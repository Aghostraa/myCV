export const REASONS = {
  project: 'Project / automation inquiry',
  hiring: 'Hiring / job opportunity',
  collaboration: 'Collaboration',
  other: null, // label comes from the visitor's own customReason text
}

export function validateReason({ reason, customReason }) {
  if (!Object.prototype.hasOwnProperty.call(REASONS, reason)) {
    return { ok: false }
  }
  if (reason === 'other' && !String(customReason || '').trim()) {
    return { ok: false }
  }
  return { ok: true }
}

export function ownerSubjectFor({ reason, customReason, name }) {
  const label = reason === 'other' ? customReason.trim() : REASONS[reason]
  return `${label} — from ${name}`
}
