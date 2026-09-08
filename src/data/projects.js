import {
  Bot, Tag, ShieldCheck, Leaf, CircuitBoard, Watch, CalendarClock, Luggage, Users,
  Trophy, Award, Globe, Puzzle, Terminal, Hammer, GraduationCap,
} from 'lucide-react'

/**
 * Single source of truth for every project, read by both the brand catalogue (/)
 * and the CV page (/cv).
 *
 * Each entry carries two voices:
 *   - `description` / `caseStudy` — brand voice: what the work proves as a capability
 *   - `cv` — hiring voice: role, hard metrics, engineering evidence
 *
 * `discipline` drives the catalogue filter chips; `status` drives the card badge.
 */

export const DISCIPLINES = [
  { id: 'all', label: { en: 'All work', de: 'Alle Arbeiten' } },
  { id: 'agentic-ai', label: { en: 'Agentic AI', de: 'Agentische KI' } },
  { id: 'dev-tooling', label: { en: 'Dev Tooling', de: 'Dev-Tooling' } },
  { id: 'products', label: { en: 'Products', de: 'Produkte' } },
  { id: 'infrastructure', label: { en: 'Infrastructure', de: 'Infrastruktur' } },
]

export const STATUS_LABELS = {
  live: { en: 'Live', de: 'Live' },
  shipped: { en: 'Shipped', de: 'Ausgeliefert' },
  building: { en: 'Cooking right now', de: 'Wird gerade gebaut' },
}

const projects = [
  {
    id: 'cortex',
    discipline: 'agentic-ai',
    status: 'shipped',
    year: '2026',
    featured: true,
    icon: Bot,
    taglineIcon: Trophy,
    title: { en: 'Cortex', de: 'Cortex' },
    category: { en: 'Agentic AI', de: 'Agentische KI' },
    tagline: { en: 'ETH Global Open Agents Winner', de: 'ETH Global Open Agents Gewinner' },
    description: {
      en: 'Self-evolving AI agent twins — encrypted on 0G, TeeML-verified, ENS-discoverable, P2P via AXL. Winner of the 0G Best Agent Framework track at ETH Global Open Agents.',
      de: 'Selbst-evolvierende KI-Agenten-Zwillinge — verschlüsselt auf 0G, TeeML-verifiziert, ENS-auffindbar, P2P via AXL. Gewinner des 0G Best Agent Framework Tracks beim ETH Global Open Agents Hackathon.',
    },
    caseStudy: {
      summary: {
        en: 'Cortex lets protocols build agent twins that help developers integrate their products, talk to other protocol twins, and learn from failed sessions. The flagship demo is three live protocol twins — 0G, AXL, and ENS — that declare roles, query each other over AXL, evolve skills from failure, and upload updated encrypted brains to 0G Storage. The apply-twin is a self-twin MCP server that connects to Claude Desktop, drafts tailored cover letters via 0G Compute, and tracks your application pipeline in 0G KV — your encrypted professional brain persists across devices.',
        de: 'Cortex ermöglicht Protokollen, Agent-Zwillinge zu bauen, die Entwicklern bei der Integration helfen, miteinander kommunizieren und aus fehlgeschlagenen Sessions lernen. Die Flagship-Demo zeigt drei Live-Protokoll-Zwillinge (0G, AXL, ENS), die Rollen deklarieren, sich gegenseitig befragen, aus Fehlern Fähigkeiten entwickeln und aktualisierte verschlüsselte Brains auf 0G Storage hochladen. Das apply-twin: ein MCP-Server für Claude Desktop, der maßgeschneiderte Bewerbungsschreiben entwirft und die Bewerbungspipeline in 0G KV trackt.',
      },
      features: {
        en: [
          'Agent SDK: Agent.create, ask, remember, recall, send, listen — storage, memory, inference, and messaging in one object',
          'TeeML-verified inference — runtime fails closed if verification does not pass',
          'AES-256 encrypted agent brains on 0G Storage; skill evolution with verifiable on-chain root hash',
          'ENS name resolution via CCIP-read gateway — agents publish agent.resume, agent.skills, agent.proof text records',
          'apply-twin MCP server: connects to Claude Desktop, drafts tailored cover letters, tracks application pipeline in 0G KV',
          "The system's own agent output drove the product pivot — the clearest proof that persistent, evolving agents actually work",
        ],
        de: [
          'Agent SDK: Agent.create, ask, remember, recall, send, listen — Storage, Memory, Inference und Messaging in einem Objekt',
          'TeeML-verifizierte Inferenz — Runtime schlägt fehl, wenn Verifikation nicht besteht',
          'AES-256-verschlüsselte Agent-Brains auf 0G Storage; Skill-Evolution mit on-chain Verifikation',
          'ENS-Namensauflösung via CCIP-read Gateway — Agenten veröffentlichen agent.resume, agent.skills, agent.proof',
          'apply-twin MCP-Server: Claude Desktop entwirft Bewerbungsschreiben, trackt Pipeline in 0G KV',
          'Die eigenen Agenten-Ausgaben trieben den Produkt-Pivot an — der klarste Beweis für funktionierendes persistentes Gedächtnis',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Designed and shipped an agent SDK unifying storage, memory, verified inference, and P2P messaging behind one object. Won the 0G Best Agent Framework track against a competitive field.',
        de: 'Agent-SDK entworfen und ausgeliefert, das Storage, Memory, verifizierte Inferenz und P2P-Messaging hinter einem Objekt vereint. Gewinner des 0G Best Agent Framework Tracks.',
      },
      metrics: {
        en: ['Hackathon track winner', '3 live protocol twins', 'AES-256 encrypted persistent memory'],
        de: ['Hackathon-Track-Gewinner', '3 Live-Protokoll-Zwillinge', 'AES-256 verschlüsseltes Gedächtnis'],
      },
    },
    stack: ['TypeScript', 'pnpm monorepo', '0G Storage/KV/Compute', 'AXL', 'ENS', 'ERC-721/iNFT', 'TeeML', 'AES-256'],
    links: { code: 'https://github.com/Aghostraa/cortex', live: 'https://ethglobal.com/showcase/cortex-cactx' },
    media: { image: '/images/generated/project-cortex.jpg', video: '/videos/project-cortex-loop.mp4' },
  },
  {
    id: 'oli',
    discipline: 'infrastructure',
    status: 'live',
    year: '2024–2026',
    icon: Tag,
    taglineIcon: Award,
    title: { en: 'Open Labels Initiative (OLI)', de: 'Open Labels Initiative (OLI)' },
    category: { en: 'Data Standards', de: 'Daten-Standards' },
    tagline: { en: 'Ethereum Foundation Funded', de: 'Ethereum Foundation gefördert' },
    description: {
      en: 'An open standard for EVM address labeling — built from an empty repo to Ethereum Foundation-funded infrastructure, adopted by Enscribe, walletlabels, Blockscout, and multiple data teams.',
      de: 'Ein offener Standard für EVM-Adress-Labeling — von einem leeren Repo zu Ethereum Foundation-geförderter Infrastruktur, adoptiert von Enscribe, walletlabels, Blockscout und mehreren Daten-Teams.',
    },
    caseStudy: {
      summary: {
        en: 'OLI provides a unified, permissionless labeling framework that eliminates redundant work across blockchain data teams. Three grants secured independently: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling.',
        de: 'OLI bietet einen einheitlichen, erlaubnisfreien Labeling-Rahmen, der redundante Arbeit in Blockchain-Daten-Teams eliminiert. Drei Grants eigenständig gesichert: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, Arbitrum Questbook Dev Tooling.',
      },
      features: {
        en: [
          'TypeScript/JavaScript SDK for reading the OLI EVM label pool over REST',
          'Hardhat plugin that lets developers attest labels on deployment',
          'Web frontend for community label submissions',
          'Adopted by Enscribe, walletlabels, Blockscout, and multiple Ethereum ecosystem data platforms',
          'Funded by Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling',
        ],
        de: [
          'TypeScript/JavaScript SDK für das Lesen des OLI EVM Label Pools über REST',
          'Hardhat-Plugin: Entwickler können Labels direkt beim Deployment attestieren',
          'Web-Frontend für Community-Label-Submissions',
          'Adoptiert von Enscribe, walletlabels, Blockscout und mehreren Ethereum-Datenplattformen',
          'Finanziert durch Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra und Arbitrum Questbook Dev Tooling',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Took an open data standard from empty repo to funded, adopted infrastructure: shipped three production artifacts (SDK, Hardhat plugin, web frontend) and secured three independent grants totalling $50,000.',
        de: 'Offenen Datenstandard vom leeren Repo zu geförderter, adoptierter Infrastruktur gebracht: drei Produktions-Artefakte (SDK, Hardhat-Plugin, Web-Frontend) und drei unabhängige Grants über insgesamt $50.000.',
      },
      metrics: {
        en: ['3 grants secured · $50,000', '3 production artifacts shipped', 'Adopted by Blockscout, Enscribe, Sourcify'],
        de: ['3 Grants gesichert · $50.000', '3 Produktions-Artefakte', 'Adoptiert von Blockscout, Enscribe, Sourcify'],
      },
    },
    stack: ['TypeScript', 'JavaScript', 'Node.js', 'Hardhat', 'REST APIs', 'EAS'],
    links: { code: 'https://github.com/openlabelsinitiative', live: 'https://www.openlabelsinitiative.org/' },
    media: { image: '/images/generated/project-oli.jpg' },
  },
  {
    id: 'shifrix',
    discipline: 'products',
    status: 'live',
    year: '2026',
    icon: CalendarClock,
    taglineIcon: Globe,
    title: { en: 'Shifrix', de: 'Shifrix' },
    category: { en: 'SaaS Product', de: 'SaaS-Produkt' },
    tagline: { en: 'Live product', de: 'Live-Produkt' },
    description: {
      en: 'Shift scheduling built for German SMBs — schedule builder, leave, contracts and payslips, with per-Bundesland holidays and Minijob limits baked in.',
      de: 'Schichtplanung für deutsche KMU — Dienstplan-Builder, Urlaub, Verträge und Lohnabrechnungen, mit Feiertagen je Bundesland und Minijob-Grenzen eingebaut.',
    },
    caseStudy: {
      summary: {
        en: 'A drag-and-drop weekly schedule grid, shift swaps and availability, hours vs. overtime tracking with rest-break advisories, and a permanent audit log for teams sharing one rota across managers. Every deployment is tailored to how the business actually runs.',
        de: 'Ein Wochenraster zum Ziehen und Ablegen, Schichttausch und Verfügbarkeiten, Stunden- und Überstundenauswertung mit Warnungen zu Ruhezeiten, sowie ein lückenloses Audit-Log für Teams mit mehreren Managern. Jede Instanz wird auf das jeweilige Geschäft zugeschnitten.',
      },
      features: {
        en: [
          'Schedule builder: weekly grid on desktop, day view on mobile, open-ended shifts staff close themselves',
          'Shift swaps and availability with manager approval in one place',
          'Per-Bundesland public holidays, labour-law warnings, Minijob earning caps out of the box',
          'Leave requests, approvals, and annual allowance tracking',
          'Secure documents and payslips — staff download only their own, auto-removed after 90 days',
          'Planned vs. worked hours with charts, plus a permanent audit log for multi-manager rotas',
        ],
        de: [
          'Dienstplan-Builder: Wochenraster am Desktop, Tagesansicht mobil, offene Schichten schließt das Personal selbst',
          'Schichttausch und Verfügbarkeiten mit Manager-Freigabe an einem Ort',
          'Feiertage je Bundesland, Arbeitsrecht-Warnungen, Minijob-Grenzen out of the box',
          'Urlaubsanträge, Freigaben und Jahresurlaub-Tracking',
          'Sichere Dokumente & Lohnabrechnungen — nur eigene Downloads, nach 90 Tagen automatisch entfernt',
          'Geplante vs. geleistete Stunden mit Charts, dazu lückenloses Audit-Log für mehrere Manager',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Built and operate a multi-tenant scheduling SaaS end to end — domain modelling of German labour law (rest breaks, Minijob caps, per-state holidays), document handling with retention policy, and a full audit trail.',
        de: 'Multi-Tenant-Scheduling-SaaS end-to-end gebaut und betrieben — Domänenmodellierung des deutschen Arbeitsrechts (Ruhezeiten, Minijob-Grenzen, Feiertage je Bundesland), Dokumenten-Handling mit Aufbewahrungsfrist und lückenloser Audit-Trail.',
      },
      metrics: {
        en: ['Live with paying businesses', 'Bilingual DE/EN product', 'Labour-law compliance built in'],
        de: ['Live bei zahlenden Betrieben', 'Zweisprachiges Produkt DE/EN', 'Arbeitsrecht-Konformität eingebaut'],
      },
    },
    stack: ['SaaS', 'German Labour Law', 'Multi-tenant', 'DE/EN'],
    links: { live: 'https://shifrix.com/features' },
    media: { image: '/images/generated/project-shifrix.jpg' },
  },
  {
    id: 'boardwright',
    discipline: 'dev-tooling',
    status: 'shipped',
    year: '2026',
    icon: CircuitBoard,
    taglineIcon: Puzzle,
    title: { en: 'Boardwright', de: 'Boardwright' },
    category: { en: 'Dev Tooling', de: 'Dev-Tooling' },
    tagline: { en: 'Claude Code plugin', de: 'Claude Code Plugin' },
    description: {
      en: 'A Claude Code plugin automating the full PCB workflow — from KiCad schematic through routing to fabrication-ready output.',
      de: 'Ein Claude-Code-Plugin, das den gesamten PCB-Workflow automatisiert — vom KiCad-Schaltplan über das Routing bis zur fertigungsreifen Ausgabe.',
    },
    caseStudy: {
      summary: {
        en: 'Boardwright codifies the procedural knowledge of real board builds instead of just wrapping tools: warm-iterative Freerouting (export-DSN → route → import-SES → re-pour), DRC/ERC gated on specific metrics rather than tool defaults, and a bundled hw-rag MCP server (SQLite FTS5 + embeddings) that makes vendor datasheets queryable instead of hallucinated.',
        de: 'Boardwright kodifiziert die prozedurale Erfahrung aus echten Board-Builds statt Tools nur zu umhüllen: warm-iteratives Freerouting, DRC/ERC-Prüfung gegen konkrete Metriken statt Tool-Defaults, und ein eigener hw-rag MCP-Server (SQLite FTS5 + Embeddings), der Bauteile-Datenblätter durchsuchbar macht statt Specs zu halluzinieren.',
      },
      features: {
        en: [
          '8-phase PCB-to-fab workflow with 7 core rules',
          'Warm-iterative Freerouting: export-DSN → route → import-SES → re-pour cycle',
          'One command for gerber + drill + position + BOM + STEP export',
          'hw-rag MCP server: own datasheet knowledge base instead of hallucinated specs',
          'Documents executable design discipline instead of a 100+ tool wrapper that gets bypassed',
        ],
        de: [
          '8-Phasen-Workflow von Schaltplan bis Fertigung mit 7 Kernregeln',
          'Warm-iteratives Freerouting: export-DSN → route → import-SES → re-pour',
          'Ein Befehl für Gerber + Drill + Position + BOM + STEP-Export',
          'hw-rag MCP-Server: eigene Datenblatt-Wissensbasis statt halluzinierter Specs',
          'Dokumentierte Design-Disziplin statt 100+ Tools, die ohnehin umgangen werden',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Built a domain-specific agent toolchain: Python/pcbnew scripting, a retrieval server over vendor PDFs (SQLite FTS5 + embeddings), and a gated verification workflow that treats DRC as linting rather than an absolute gate.',
        de: 'Domänenspezifische Agenten-Toolchain gebaut: Python/pcbnew-Scripting, Retrieval-Server über Hersteller-PDFs (SQLite FTS5 + Embeddings) und ein Verifikations-Workflow, der DRC als Linting statt als absolutes Gate behandelt.',
      },
      metrics: {
        en: ['End-to-end schematic → fab automation', 'Bundled RAG server over datasheets'],
        de: ['End-to-end Schaltplan → Fertigung', 'Eigener RAG-Server über Datenblätter'],
      },
    },
    stack: ['KiCad 9/10', 'Python', 'Freerouting', 'SQLite FTS5', 'MCP'],
    links: { code: 'https://github.com/Aghostraa/boardwright' },
    media: { image: '/images/generated/project-boardwright.jpg' },
  },
  {
    id: 'dapsocial',
    discipline: 'products',
    status: 'building',
    year: '2026',
    icon: Users,
    taglineIcon: Hammer,
    title: { en: 'dap.social', de: 'dap.social' },
    category: { en: 'Social Product', de: 'Social-Produkt' },
    tagline: { en: 'In active development', de: 'In aktiver Entwicklung' },
    description: {
      en: 'Real-life encounters are the actual social wave. dap.social turns the handshake, the meetup, the scan at the door into a connection that lasts instead of a contact lost in a feed.',
      de: 'Echte Begegnungen sind die eigentliche soziale Welle. dap.social macht aus dem Handschlag, dem Meetup, dem Scan an der Tür eine Verbindung, die bleibt — statt einem Kontakt, der im Feed verschwindet.',
    },
    caseStudy: {
      summary: {
        en: 'The bet: the strongest social graph is the one you build in person, and nothing on your phone respects that. dap.social starts at the moment two people actually meet — an event, a meetup, a tap between two phones — and carries that moment forward as something you keep. The passbook onboarding funnel and tap-exchange are already live; the full vision is being cooked right now.',
        de: 'Die These: der stärkste soziale Graph entsteht persönlich — und kein Tool auf dem Handy respektiert das. dap.social setzt genau im Moment der Begegnung an: ein Event, ein Meetup, ein Tap zwischen zwei Handys — und trägt diesen Moment weiter als etwas, das bleibt. Passbook-Onboarding und Tap-Exchange laufen bereits live; die volle Vision wird gerade gebaut.',
      },
      features: {
        en: [
          'Tap exchange: two phones meet, the connection is made — no handle-swapping, no follow request',
          'Event check-in that mints a passbook at the door, so the room you were in is part of the record',
          'A calendar feed that keeps the people you met surfacing after the event ends',
          'Guest-first web funnel — the person you just met needs no app install to connect back',
          'iOS app and organizer tooling in active development',
        ],
        de: [
          'Tap-Exchange: zwei Handys begegnen sich, die Verbindung steht — kein Handle-Tausch, keine Follow-Anfrage',
          'Event-Check-in, das an der Tür ein Passbook ausstellt — der Raum, in dem du warst, wird Teil des Verlaufs',
          'Ein Kalender-Feed, der die Menschen, die du getroffen hast, nach dem Event weiter sichtbar hält',
          'Guest-First-Web-Funnel — die Person, die du triffst, braucht keine App-Installation',
          'iOS-App und Organizer-Tooling in aktiver Entwicklung',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Designing and building a consumer social product end to end: native iOS client, Postgres/edge-function backend, a guest-first web funnel, and a token model hardened against enumeration and existence oracles.',
        de: 'Consumer-Social-Produkt end-to-end im Aufbau: nativer iOS-Client, Postgres/Edge-Function-Backend, Guest-First-Web-Funnel und ein Token-Modell, gehärtet gegen Enumeration und Existence-Oracles.',
      },
      metrics: {
        en: ['Onboarding funnel live end to end', 'iOS + web + edge functions', 'Security-hardened token model'],
        de: ['Onboarding-Funnel live end-to-end', 'iOS + Web + Edge Functions', 'Sicherheitsgehärtetes Token-Modell'],
      },
    },
    stack: ['iOS / Swift', 'Supabase', 'Edge Functions', 'Vercel'],
    links: {},
    media: { image: '/images/generated/project-dapsocial.jpg' },
  },
  {
    id: 'watchy',
    discipline: 'dev-tooling',
    status: 'shipped',
    year: '2026',
    icon: Watch,
    taglineIcon: Terminal,
    title: { en: 'Watchy Claude Companion', de: 'Watchy Claude Companion' },
    category: { en: 'Hardware / Dev Tooling', de: 'Hardware / Dev-Tooling' },
    tagline: { en: 'Claude Code on your wrist', de: 'Claude Code am Handgelenk' },
    description: {
      en: 'Remote control for Claude Code from an e-ink smartwatch — approve tool calls, answer clarifying questions, and read replies without leaving your wrist.',
      de: 'Fernsteuerung von Claude Code über eine E-Ink-Smartwatch — Tool-Aufrufe genehmigen, Rückfragen beantworten, Antworten lesen, ohne den Rechner anzusehen.',
    },
    caseStudy: {
      summary: {
        en: 'Three components form the control flow: Claude Code hooks post lifecycle events to a relay server, which speaks WebSocket to the watch firmware. Pip-Boy styled watchface, distinct haptic patterns (5 buzzes for questions, 2 for approvals, 1 for alerts), and session browsing across multiple concurrent Claude Code instances.',
        de: 'Drei Komponenten bilden den Kontrollfluss: Claude-Code-Hooks senden Ereignisse an einen Relay-Server, der per WebSocket mit der Watch-Firmware spricht. Pip-Boy-artiges Watchface, unterscheidbare Haptik-Muster (5 Buzz für Rückfragen, 2 für Genehmigungen, 1 für Alerts), Session-Verwaltung über mehrere Instanzen.',
      },
      features: {
        en: [
          'Bash and file-edit approval right on the wrist (Allow / Always Allow / Deny)',
          'Answers AskUserQuestion prompts, including batches',
          'Full message text with scrolling for long content',
          'Session browsing across multiple concurrent Claude Code instances',
          'Distinct haptic feedback patterns per event type',
        ],
        de: [
          'Bash- und Datei-Edit-Genehmigung direkt am Handgelenk (Allow / Always / Deny)',
          'Beantwortung von AskUserQuestion-Prompts, auch in Batches',
          'Vollständiger Nachrichtentext mit Scroll-Unterstützung',
          'Session-Browsing über mehrere Claude-Code-Instanzen',
          'Unterscheidbare Haptik-Muster je Ereignistyp',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Embedded firmware plus a TypeScript relay: ESP32-S3 e-ink client over WebSocket, lifecycle hook scripts, and session state fan-out across concurrent agent instances.',
        de: 'Embedded-Firmware plus TypeScript-Relay: ESP32-S3-E-Ink-Client über WebSocket, Lifecycle-Hook-Skripte und Session-State-Verteilung über parallele Agenten-Instanzen.',
      },
      metrics: {
        en: ['Firmware + relay + hooks, 3 layers', 'Sub-second wrist approvals'],
        de: ['Firmware + Relay + Hooks, 3 Schichten', 'Freigaben am Handgelenk in Sekundenbruchteilen'],
      },
    },
    stack: ['ESP32-S3', 'PlatformIO', 'TypeScript', 'Node.js', 'WebSocket'],
    links: { code: 'https://github.com/Aghostraa/watchy-claude-companion' },
    media: { image: '/images/generated/project-watchy.jpg' },
  },
  {
    id: 'privact',
    discipline: 'infrastructure',
    status: 'shipped',
    year: '2025',
    icon: ShieldCheck,
    taglineIcon: Trophy,
    title: {
      en: 'PrivaCT: Trust-Minimized Certificate Transparency',
      de: 'PrivaCT: Vertrauensminimierte Zertifikatstransparenz',
    },
    category: { en: 'Web Security', de: 'Web-Sicherheit' },
    tagline: { en: 'Hackathon Winner — Mammothan 2025', de: 'Hackathon Gewinner — Mammothan 2025' },
    description: {
      en: 'Browser extension verifying website certificates in-browser using Prism-based decentralized transparency logs — protecting users from MITM attacks without trusting a central authority.',
      de: 'Browser-Erweiterung, die Website-Zertifikate direkt im Browser verifiziert — mit Prism-basierten dezentralen Transparenzlogs. Schützt vor Man-in-the-Middle-Angriffen ohne zentraler Autorität zu vertrauen.',
    },
    caseStudy: {
      summary: {
        en: 'PrivaCT closes a critical security gap in web browsing: Merkle Proof verification and real-time visual indicators directly in the browser, with no central infrastructure required.',
        de: 'PrivaCT schließt eine kritische Sicherheitslücke beim Surfen im Web: Merkle-Proof-Verifikation und visuelle Echtzeit-Indikatoren direkt im Browser, ohne zentrale Infrastruktur.',
      },
      features: {
        en: [
          'Browser extension that automatically verifies website certificates in real time',
          'Prism-based transparency system for decentralized verification',
          'Secure Merkle Proof verification within the browser',
          'Visual certificate validity indicators — no central broker',
        ],
        de: [
          'Browser-Erweiterung verifiziert Website-Zertifikate automatisch in Echtzeit',
          'Prism-basiertes Transparenzsystem für dezentrale Verifikation',
          'Sichere Merkle-Proof-Verifikation direkt im Browser',
          'Visuelle Indikatoren für Zertifikatsstatus — kein zentraler Broker',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Implemented in-browser Merkle proof verification against decentralized transparency logs, shipped as a browser extension. Won Celestia’s Mammothan 2025.',
        de: 'In-Browser-Merkle-Proof-Verifikation gegen dezentrale Transparenzlogs implementiert, als Browser-Erweiterung ausgeliefert. Gewinner des Mammothan 2025 von Celestia.',
      },
      metrics: {
        en: ['Hackathon winner', 'Zero central infrastructure'],
        de: ['Hackathon-Gewinner', 'Keine zentrale Infrastruktur'],
      },
    },
    stack: ['TypeScript', 'Blockchain', 'Web Security', 'Browser Extension'],
    links: { code: 'https://github.com/Aghostraa/PrivaCT' },
    media: { image: '/images/generated/project-privact.jpg' },
  },
  {
    id: 'sustained',
    discipline: 'infrastructure',
    status: 'shipped',
    year: '2025',
    icon: Leaf,
    taglineIcon: GraduationCap,
    title: {
      en: 'Sustained: Pro-Environmental Behavior Platform',
      de: 'Sustained: Plattform für umweltfreundliches Verhalten',
    },
    category: { en: 'Civic Tech', de: 'Civic-Tech' },
    tagline: { en: 'Thesis project', de: 'Abschlussprojekt' },
    description: {
      en: 'Full-stack platform fostering pro-environmental behavior in Aachen through democratic funding and community action — quadratic funding simulation, initiative hub, impact visualization.',
      de: 'Full-Stack-Plattform zur Förderung pro-umweltlichen Verhaltens in Aachen durch demokratische Finanzierung und Community-Aktionen — Quadratic-Funding-Simulation, Initiative Hub, Impact-Visualisierung.',
    },
    caseStudy: {
      summary: {
        en: 'Research grounded in Value-Belief-Norm and Theory of Planned Behavior frameworks — developed as a thesis project at FH Aachen University.',
        de: 'Forschungsgetriebene Plattform auf Basis von Value-Belief-Norm und Theory of Planned Behavior Frameworks — entwickelt als Abschlussprojekt an der FH Aachen.',
      },
      features: {
        en: [
          'EcoFundSim: Quadratic Funding simulation for democratic resource allocation',
          'Initiative Hub for local sustainability projects',
          'Impact Visualization System: translates initiative goals into tangible metrics',
          'Personal Dashboard with community engagement features',
          'Value-Belief-Norm and Theory of Planned Behavior framework integration',
        ],
        de: [
          'EcoFundSim: Quadratic-Funding-Simulation für demokratische Ressourcenverteilung',
          'Initiative Hub für lokale Nachhaltigkeitsprojekte',
          'Impact-Visualisierungssystem: Ziele in messbare Kennzahlen übersetzt',
          'Persönliches Dashboard mit Community-Engagement-Funktionen',
          'VBN- und TPB-Framework-Integration für verhaltensbasiertes Design',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Full-stack thesis platform translating behavioural research (VBN, TPB) into a working funding and engagement product.',
        de: 'Full-Stack-Abschlussarbeit, die Verhaltensforschung (VBN, TPB) in ein funktionierendes Funding- und Engagement-Produkt übersetzt.',
      },
      metrics: {
        en: ['Thesis project, FH Aachen', 'Quadratic funding simulation'],
        de: ['Abschlussarbeit, FH Aachen', 'Quadratic-Funding-Simulation'],
      },
    },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Quadratic Funding'],
    links: { code: 'https://github.com/Aghostraa/sustained-aachen', live: 'https://sustained-aachen.vercel.app' },
    media: { image: '/images/generated/project-sustained.jpg' },
  },
  {
    id: 'vacpaks',
    discipline: 'products',
    status: 'live',
    year: '2026',
    icon: Luggage,
    taglineIcon: Globe,
    title: { en: 'VacPaks', de: 'VacPaks' },
    category: { en: 'E-Commerce Brand', de: 'E-Commerce-Marke' },
    tagline: { en: 'Live brand', de: 'Live-Marke' },
    description: {
      en: 'Travel-accessories brand built around packing less — the Quadro four-in-one refillable dispenser and the Cloud travel pillow. "Pack Less. Explore More."',
      de: 'Reise-Accessoires-Marke für weniger Gepäck — der Quadro-Vier-in-eins-Dispenser und das Cloud-Nackenkissen. „Pack Less. Explore More."',
    },
    caseStudy: {
      summary: {
        en: 'VacPaks Quadro consolidates multiple toiletry bottles into one refillable dispenser; VacPaks Cloud is a refillable plush travel neck pillow. Storefront, fulfilment, and brand built and operated end to end, shipping across Europe, Canada, and the US.',
        de: 'VacPaks Quadro fasst mehrere Flaschen in einem nachfüllbaren Dispenser zusammen, VacPaks Cloud ist ein nachfüllbares Plüsch-Reisekissen. Shop, Fulfilment und Marke end-to-end aufgebaut und betrieben, Versand nach Europa, Kanada und in die USA.',
      },
      features: {
        en: [
          'VacPaks Quadro: 4-in-1 refillable toiletry dispenser',
          'VacPaks Cloud: refillable plush travel neck pillow',
          'Storefront, product photography, and brand voice built end to end',
          'Multi-country shipping across Europe, Canada, and the US',
        ],
        de: [
          'VacPaks Quadro: 4-in-1 nachfüllbarer Toiletry-Dispenser',
          'VacPaks Cloud: nachfüllbares Plüsch-Reisekissen',
          'Shop, Produktfotografie und Markenauftritt end-to-end aufgebaut',
          'Versand nach Europa, Kanada und in die USA',
        ],
      },
    },
    cv: {
      evidence: {
        en: 'Founded and operate a DTC e-commerce brand: product selection, storefront, conversion funnel, and multi-country fulfilment.',
        de: 'DTC-E-Commerce-Marke gegründet und betrieben: Produktauswahl, Shop, Conversion-Funnel und Fulfilment über mehrere Länder.',
      },
      metrics: {
        en: ['2 products live', 'Ships to EU, CA, US'],
        de: ['2 Produkte live', 'Versand EU, CA, US'],
      },
    },
    stack: ['E-Commerce', 'DTC Brand', 'Product Design'],
    links: { live: 'https://vacpaks.com/' },
    media: { image: '/images/generated/project-vacpaks.jpg' },
  },
]

/** Resolve every bilingual field for one language. */
function resolve(project, language) {
  const lang = language === 'de' ? 'de' : 'en'
  return {
    ...project,
    title: project.title[lang],
    category: project.category[lang],
    tagline: project.tagline[lang],
    description: project.description[lang],
    statusLabel: STATUS_LABELS[project.status][lang],
    caseStudy: {
      summary: project.caseStudy.summary[lang],
      features: project.caseStudy.features[lang],
    },
    cv: {
      evidence: project.cv.evidence[lang],
      metrics: project.cv.metrics[lang],
    },
  }
}

/** All projects, brand-catalogue order. */
export function getProjects(language) {
  return projects.map((p) => resolve(p, language))
}

/** The one project rendered as the wide featured card above the grid. */
export function getFeaturedProject(language) {
  return resolve(projects.find((p) => p.featured) ?? projects[0], language)
}

/** Everything except the featured project — the uniform grid. */
export function getCatalogueProjects(language) {
  return projects.filter((p) => !p.featured).map((p) => resolve(p, language))
}

/** Projects worth showing a hiring manager, most relevant first. */
export function getCVProjects(language) {
  const order = ['cortex', 'oli', 'shifrix', 'dapsocial', 'boardwright', 'watchy', 'privact', 'sustained']
  return order
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean)
    .map((p) => resolve(p, language))
}

export function getDisciplines(language) {
  const lang = language === 'de' ? 'de' : 'en'
  return DISCIPLINES.map((d) => ({ id: d.id, label: d.label[lang] }))
}
