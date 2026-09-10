import { useEffect, useRef, useState } from 'react'

/**
 * Ambient <video> loops on this site are decorative, but they are not free:
 * `preload="metadata"` does not stop Chrome from pulling down enough of an
 * autoplaying track to start it, and it does so as soon as the element mounts
 * regardless of scroll position (`loading="lazy"` is <img>-only). Measured on
 * the live homepage, that meant an 840 KB below-the-fold card video was fetched
 * in full while the LCP hero image was still queued.
 *
 * Both hooks below gate the *mount* of the element rather than its attributes,
 * because once the element exists the fetch is already underway.
 */

/** True once the container is within `rootMargin` of the viewport. */
export function useNearViewport({ rootMargin = '200px' } = {}) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (ready) return
    const node = ref.current
    if (!node) return

    // No IntersectionObserver (very old browsers, some crawlers): fail open so
    // the media still renders rather than silently disappearing.
    if (typeof IntersectionObserver === 'undefined') {
      setReady(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setReady(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [ready, rootMargin])

  return [ref, ready]
}

/**
 * True once the page has finished loading. Used for the hero loop, which is
 * inside the viewport from the start — an IntersectionObserver would fire
 * immediately and defer nothing. Waiting for `load` keeps the ambient video off
 * the critical path so it stops competing with the hero image for bandwidth.
 */
export function useAfterPageLoad() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (document.readyState === 'complete') {
      setReady(true)
      return
    }
    const onLoad = () => setReady(true)
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return ready
}
