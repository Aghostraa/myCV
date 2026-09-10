const COPY = {
  en: {
    subject: 'Got it — your request has been received',
    text: [
      "Thanks for reaching out — I've received your request and will get back to you soon.",
      '',
      "— Ahoura",
    ].join('\n'),
  },
  de: {
    subject: 'Erhalten — deine Anfrage ist bei mir angekommen',
    text: [
      'Danke für deine Nachricht — ich habe deine Anfrage erhalten und melde mich bald bei dir.',
      '',
      '— Ahoura',
    ].join('\n'),
  },
}

export function visitorConfirmationFor({ language }) {
  return COPY[language] || COPY.en
}
