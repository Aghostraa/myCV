import { profile } from './profile'

/**
 * Impressum (§ 5 DDG) and Datenschutzerklärung (Art. 13 DSGVO).
 *
 * German is the legally binding version — the English column is a courtesy
 * translation for non-German readers, not a second legal text.
 *
 * TODO(ahoura): fill `legalEntity` before this goes live. § 5 DDG requires a
 * real postal address that can receive service of process — a PO box, a
 * "address on request" line, or a bare email will not satisfy it. The site
 * shows a loud warning banner in `npm run dev` until these are replaced.
 */
export const legalEntity = {
  name: 'Ahoura Azarbin',
  street: 'STRASSE UND HAUSNUMMER',
  city: 'PLZ AACHEN',
  country: { en: 'Germany', de: 'Deutschland' },
  // § 5 Abs. 1 Nr. 2 DDG: email alone is not enough — a phone number or an
  // equally immediate second channel has to be reachable too.
  phone: 'TELEFONNUMMER',
  email: profile.email,
  // § 27a UStG — only if you are actually VAT-registered. Leave null otherwise;
  // the line is then omitted rather than printed empty.
  vatId: null,
}

const PLACEHOLDER = /^[A-ZÄÖÜ\s]+$/

/** True while any required field is still the shipped placeholder. */
export function hasUnfilledLegalFields() {
  return [legalEntity.street, legalEntity.city, legalEntity.phone].some(
    (value) => PLACEHOLDER.test(value),
  )
}

const addressLines = (language) => [
  legalEntity.name,
  legalEntity.street,
  legalEntity.city,
  legalEntity.country[language] ?? legalEntity.country.en,
]

/**
 * A document is a list of sections; a section body is a list of blocks.
 * Blocks are either a bilingual paragraph, a bilingual bullet list, or an
 * address block rendered from `legalEntity`.
 */
export const legalDocs = {
  impressum: {
    slug: 'impressum',
    title: { en: 'Legal Notice', de: 'Impressum' },
    intro: {
      en: 'Information required under § 5 of the German Digital Services Act (DDG).',
      de: 'Angaben gemäß § 5 DDG.',
    },
    sections: [
      {
        heading: { en: 'Service provider', de: 'Diensteanbieter' },
        body: [{ type: 'address' }],
      },
      {
        heading: { en: 'Contact', de: 'Kontakt' },
        body: [
          {
            type: 'lines',
            en: [`Phone: ${legalEntity.phone}`, `Email: ${legalEntity.email}`],
            de: [`Telefon: ${legalEntity.phone}`, `E-Mail: ${legalEntity.email}`],
          },
        ],
      },
      ...(legalEntity.vatId
        ? [
            {
              heading: { en: 'VAT identification number', de: 'Umsatzsteuer-Identifikationsnummer' },
              body: [
                {
                  type: 'p',
                  en: `VAT ID under § 27a of the German VAT Act: ${legalEntity.vatId}`,
                  de: `Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${legalEntity.vatId}`,
                },
              ],
            },
          ]
        : []),
      {
        heading: {
          en: 'Responsible for editorial content',
          de: 'Redaktionell verantwortlich',
        },
        body: [
          {
            type: 'p',
            en: `Responsible under § 18 (2) of the German Interstate Media Treaty (MStV): ${legalEntity.name}, address as above.`,
            de: `Verantwortlich gemäß § 18 Abs. 2 MStV: ${legalEntity.name}, Anschrift wie oben.`,
          },
        ],
      },
      {
        heading: { en: 'Consumer dispute resolution', de: 'Verbraucherstreitbeilegung' },
        body: [
          {
            type: 'p',
            en: 'I am neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
            de: 'Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          },
        ],
      },
      {
        heading: { en: 'Liability for links', de: 'Haftung für Links' },
        body: [
          {
            type: 'p',
            en: 'This site links to external websites over whose content I have no control. Responsibility for that content always lies with its respective provider or operator. Linked pages were checked for legal violations at the time of linking; no unlawful content was apparent. Permanent monitoring without concrete evidence of an infringement is not reasonable — such links will be removed immediately once a violation becomes known.',
            de: 'Diese Seite enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine permanente inhaltliche Kontrolle ohne konkrete Anhaltspunkte einer Rechtsverletzung ist nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.',
          },
        ],
      },
      {
        heading: { en: 'Copyright', de: 'Urheberrecht' },
        body: [
          {
            type: 'p',
            en: 'The content and works created by me on these pages are subject to German copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits of copyright require my written consent. Downloads and copies of this site are permitted for private, non-commercial use only.',
            de: 'Die von mir erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
          },
        ],
      },
    ],
  },

  datenschutz: {
    slug: 'datenschutz',
    title: { en: 'Privacy Policy', de: 'Datenschutzerklärung' },
    intro: {
      en: 'How this site handles personal data, under Articles 13 and 14 GDPR.',
      de: 'Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 und 14 DSGVO.',
    },
    sections: [
      {
        heading: { en: 'Controller', de: 'Verantwortlicher' },
        body: [
          {
            type: 'p',
            en: 'The controller for data processing on this website within the meaning of Art. 4 (7) GDPR is:',
            de: 'Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne von Art. 4 Nr. 7 DSGVO ist:',
          },
          { type: 'address' },
          {
            type: 'lines',
            en: [`Phone: ${legalEntity.phone}`, `Email: ${legalEntity.email}`],
            de: [`Telefon: ${legalEntity.phone}`, `E-Mail: ${legalEntity.email}`],
          },
        ],
      },
      {
        heading: { en: 'Hosting', de: 'Hosting' },
        body: [
          {
            type: 'p',
            en: 'This site is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. When you visit the site, Vercel processes connection data on my behalf as a processor under Art. 28 GDPR, on the basis of a data processing agreement. The legal basis is my legitimate interest in a secure, fast, and reliably delivered website (Art. 6 (1)(f) GDPR).',
            de: 'Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Aufruf der Seite verarbeitet Vercel Verbindungsdaten in meinem Auftrag als Auftragsverarbeiter gemäß Art. 28 DSGVO auf Grundlage eines Auftragsverarbeitungsvertrags. Rechtsgrundlage ist mein berechtigtes Interesse an einer sicheren, schnellen und zuverlässigen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO).',
          },
          {
            type: 'p',
            en: 'This involves a transfer of data to the United States. Vercel Inc. is certified under the EU–U.S. Data Privacy Framework, and standard contractual clauses under Art. 46 (2)(c) GDPR apply in addition.',
            de: 'Damit ist eine Datenübermittlung in die USA verbunden. Vercel Inc. ist unter dem EU-U.S. Data Privacy Framework zertifiziert; ergänzend gelten Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.',
          },
        ],
      },
      {
        heading: { en: 'Server log files', de: 'Server-Logfiles' },
        body: [
          {
            type: 'p',
            en: 'Every page request automatically transmits information that your browser sends. This is recorded temporarily:',
            de: 'Bei jedem Seitenaufruf werden automatisch Informationen übermittelt, die Ihr Browser sendet. Diese werden vorübergehend protokolliert:',
          },
          {
            type: 'list',
            en: [
              'shortened or anonymised IP address',
              'date and time of the request',
              'the page or file requested and the amount of data transferred',
              'browser type and version, operating system, and referring URL',
            ],
            de: [
              'gekürzte bzw. anonymisierte IP-Adresse',
              'Datum und Uhrzeit der Anfrage',
              'aufgerufene Seite bzw. Datei und übertragene Datenmenge',
              'Browsertyp und -version, Betriebssystem und Referrer-URL',
            ],
          },
          {
            type: 'p',
            en: 'This data is not merged with other data sources and is not used to identify you personally. It is processed on the basis of Art. 6 (1)(f) GDPR — my legitimate interest in operating the site securely and defending against attacks — and deleted once it is no longer needed for that purpose.',
            de: 'Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nicht zur Identifizierung Ihrer Person verwendet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO — mein berechtigtes Interesse am sicheren Betrieb der Website und an der Abwehr von Angriffen — und die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr erforderlich sind.',
          },
        ],
      },
      {
        heading: { en: 'Reach measurement', de: 'Reichweitenmessung' },
        body: [
          {
            type: 'p',
            en: 'This site uses Vercel Web Analytics to count page views. It works without cookies: it sets no cookie, reads nothing from your device, and creates no persistent identifier or cross-site profile. Requests are aggregated into anonymous statistics — page, referrer, country, device category — from which you cannot be identified. Because no information is stored on or read from your device, § 25 (1) TDDDG does not apply and no consent banner is required. The legal basis is Art. 6 (1)(f) GDPR, my legitimate interest in understanding which content is read.',
            de: 'Diese Website nutzt Vercel Web Analytics zur Zählung von Seitenaufrufen. Der Dienst arbeitet ohne Cookies: Es werden keine Cookies gesetzt, keine Informationen von Ihrem Endgerät ausgelesen und keine dauerhaften Kennungen oder seitenübergreifenden Profile gebildet. Die Anfragen werden zu anonymen Statistiken aggregiert — Seite, Referrer, Land, Gerätekategorie —, aus denen kein Rückschluss auf Ihre Person möglich ist. Da weder Informationen auf Ihrem Endgerät gespeichert noch aus ihm ausgelesen werden, greift § 25 Abs. 1 TDDDG nicht und es ist keine Einwilligung erforderlich. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO, mein berechtigtes Interesse daran, zu verstehen, welche Inhalte gelesen werden.',
          },
        ],
      },
      {
        heading: { en: 'Local storage', de: 'Lokale Speicherung' },
        body: [
          {
            type: 'p',
            en: 'Your language choice (English or German) is stored in your browser’s local storage so the site keeps that setting on your next visit. This is a setting you requested yourself; it is strictly necessary to provide the function and therefore exempt from consent under § 25 (2) no. 2 TDDDG. The value never leaves your device and is not transmitted to me. You can delete it at any time by clearing your browser’s site data.',
            de: 'Ihre Sprachwahl (Deutsch oder Englisch) wird im Local Storage Ihres Browsers gespeichert, damit die Website diese Einstellung beim nächsten Besuch beibehält. Es handelt sich um eine von Ihnen selbst angeforderte Einstellung; die Speicherung ist zur Bereitstellung der Funktion unbedingt erforderlich und daher gemäß § 25 Abs. 2 Nr. 2 TDDDG einwilligungsfrei. Der Wert verlässt Ihr Endgerät nicht und wird nicht an mich übermittelt. Sie können ihn jederzeit löschen, indem Sie die Websitedaten Ihres Browsers löschen.',
          },
        ],
      },
      {
        heading: { en: 'Contacting me', de: 'Kontaktaufnahme' },
        body: [
          {
            type: 'p',
            en: 'If you write to me by email, the details you send — your address, your name if given, and the content of your message — are processed solely to handle your enquiry. The legal basis is Art. 6 (1)(b) GDPR where the enquiry concerns a contract or pre-contractual steps, otherwise Art. 6 (1)(f) GDPR. I keep the correspondence until it has been dealt with and any statutory retention periods have expired, then delete it.',
            de: 'Wenn Sie mich per E-Mail kontaktieren, werden die übermittelten Angaben — Ihre Adresse, gegebenenfalls Ihr Name und der Inhalt Ihrer Nachricht — ausschließlich zur Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern die Anfrage einen Vertrag oder vorvertragliche Maßnahmen betrifft, andernfalls Art. 6 Abs. 1 lit. f DSGVO. Die Korrespondenz wird gelöscht, sobald das Anliegen erledigt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
          },
        ],
      },
      {
        heading: { en: 'External links and embedded services', de: 'Externe Links und eingebundene Dienste' },
        body: [
          {
            type: 'p',
            en: 'Links to GitHub, LinkedIn, X, Instagram, and Telegram are plain hyperlinks. Nothing is loaded from those services while you are on this site, and they learn nothing about your visit unless you click through — at which point their own privacy policies apply.',
            de: 'Die Links zu GitHub, LinkedIn, X, Instagram und Telegram sind reine Hyperlinks. Solange Sie sich auf dieser Website befinden, werden keine Inhalte dieser Dienste geladen; sie erfahren nichts über Ihren Besuch, sofern Sie den Link nicht anklicken. Ab dann gelten deren eigene Datenschutzerklärungen.',
          },
        ],
      },
      {
        heading: { en: 'Encryption', de: 'Verschlüsselung' },
        body: [
          {
            type: 'p',
            en: 'This site uses TLS encryption for every connection. You can recognise it by the https:// prefix and the lock icon in your browser’s address bar.',
            de: 'Diese Website nutzt für alle Verbindungen eine TLS-Verschlüsselung. Sie erkennen sie am Präfix https:// und am Schlosssymbol in der Adresszeile Ihres Browsers.',
          },
        ],
      },
      {
        heading: { en: 'Your rights', de: 'Ihre Rechte' },
        body: [
          {
            type: 'p',
            en: 'In relation to your personal data you have the right to:',
            de: 'Bezüglich Ihrer personenbezogenen Daten haben Sie das Recht auf:',
          },
          {
            type: 'list',
            en: [
              'access to the data held about you (Art. 15 GDPR)',
              'rectification of inaccurate data (Art. 16 GDPR)',
              'erasure (Art. 17 GDPR)',
              'restriction of processing (Art. 18 GDPR)',
              'data portability (Art. 20 GDPR)',
              'object to processing based on legitimate interests (Art. 21 GDPR)',
            ],
            de: [
              'Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)',
              'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
              'Löschung (Art. 17 DSGVO)',
              'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
              'Datenübertragbarkeit (Art. 20 DSGVO)',
              'Widerspruch gegen eine auf berechtigten Interessen beruhende Verarbeitung (Art. 21 DSGVO)',
            ],
          },
          {
            type: 'p',
            en: `To exercise any of these, write to ${legalEntity.email}. No automated decision-making or profiling under Art. 22 GDPR takes place on this site.`,
            de: `Zur Ausübung genügt eine Nachricht an ${legalEntity.email}. Eine automatisierte Entscheidungsfindung oder ein Profiling gemäß Art. 22 DSGVO findet auf dieser Website nicht statt.`,
          },
        ],
      },
      {
        heading: { en: 'Right to lodge a complaint', de: 'Beschwerderecht' },
        body: [
          {
            type: 'p',
            en: 'You may lodge a complaint with a supervisory authority, in particular in the member state of your residence, workplace, or the place of the alleged infringement (Art. 77 GDPR). The authority responsible for me is the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf.',
            de: 'Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, insbesondere im Mitgliedstaat Ihres Aufenthaltsorts, Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77 DSGVO). Die für mich zuständige Behörde ist die Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW), Kavalleriestr. 2–4, 40213 Düsseldorf.',
          },
        ],
      },
    ],
  },
}

export function getLegalDoc(slug, language = 'en') {
  const doc = legalDocs[slug]
  if (!doc) return null
  return { ...doc, address: addressLines(language) }
}
