import { Trophy, Award, Rocket, Users, PenLine, Bot, Tag, ShieldCheck, Leaf } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './motion/primitives'
import ProjectCard from './ProjectCard'

export default function Projects({ language = 'en' }) {
  const projects = [
    {
      title: 'Cortex',
      category: language === 'de' ? 'Agentische KI' : 'Agentic AI',
      icon: Bot,
      tagline: language === 'de' ? 'ETH Global Open Agents Gewinner' : 'ETH Global Open Agents Winner',
      description: language === 'de'
        ? 'Selbst-evolvierende KI-Agenten-Zwillinge — verschlüsselt auf 0G, TeeML-verifiziert, ENS-auffindbar, P2P via AXL. Gewinner des 0G Best Agent Framework Tracks beim ETH Global Open Agents Hackathon.'
        : 'Self-evolving AI agent twins — encrypted on 0G, TeeML-verified, ENS-discoverable, P2P via AXL. Winner of the 0G Best Agent Framework track at ETH Global Open Agents.',
      fullDescription: language === 'de'
        ? 'Cortex ermöglicht Protokollen, Agent-Zwillinge zu bauen, die Entwicklern bei der Integration helfen, miteinander kommunizieren und aus fehlgeschlagenen Sessions lernen. Die Flagship-Demo zeigt drei Live-Protokoll-Zwillinge (0G, AXL, ENS), die Rollen deklarieren, sich gegenseitig befragen, aus Fehlern Fähigkeiten entwickeln und aktualisierte verschlüsselte Brains auf 0G Storage hochladen. Das apply-twin: ein MCP-Server für Claude Desktop, der maßgeschneiderte Bewerbungsschreiben entwirft und die Bewerbungspipeline in 0G KV trackt.'
        : 'Cortex lets protocols build agent twins that help developers integrate their products, talk to other protocol twins, and learn from failed sessions. The flagship demo is three live protocol twins — 0G, AXL, and ENS — that declare roles, query each other over AXL, evolve skills from failure, and upload updated encrypted brains to 0G Storage. The apply-twin is a self-twin MCP server that connects to Claude Desktop, drafts tailored cover letters via 0G Compute, and tracks your application pipeline in 0G KV — your encrypted professional brain persists across devices.',
      technologies: ['TypeScript', 'pnpm monorepo', '0G Storage/KV/Compute', 'AXL', 'ENS', 'ERC-721/iNFT', 'TeeML', 'AES-256'],
      features: language === 'de'
        ? [
          'Agent SDK: Agent.create, ask, remember, recall, send, listen — Storage, Memory, Inference und Messaging in einem Objekt',
          'TeeML-verifizierte Inferenz — Runtime schlägt fehl, wenn Verifikation nicht besteht',
          'AES-256-verschlüsselte Agent-Brains auf 0G Storage; Skill-Evolution mit on-chain Verifikation',
          'ENS-Namensauflösung via CCIP-read Gateway — Agenten veröffentlichen agent.resume, agent.skills, agent.proof',
          'apply-twin MCP-Server: Claude Desktop entwirft Bewerbungsschreiben, trackt Pipeline in 0G KV',
          'Die eigenen Agenten-Ausgaben trieben den Produkt-Pivot an — der klarste Beweis für funktionierendes persistentes Gedächtnis'
        ]
        : [
          'Agent SDK: Agent.create, ask, remember, recall, send, listen — storage, memory, inference, and messaging in one object',
          'TeeML-verified inference — runtime fails closed if verification does not pass',
          'AES-256 encrypted agent brains on 0G Storage; skill evolution with verifiable on-chain root hash',
          'ENS name resolution via CCIP-read gateway — agents publish agent.resume, agent.skills, agent.proof text records',
          'apply-twin MCP server: connects to Claude Desktop, drafts tailored cover letters, tracks application pipeline in 0G KV',
          "The system's own agent output drove the product pivot — the clearest proof that persistent, evolving agents actually work"
        ],
      codeLink: 'https://github.com/Aghostraa/cortex',
      liveLink: 'https://ethglobal.com/showcase/cortex',
      bgImage: '/images/generated/project-cortex.jpg',
      bgVideo: '/videos/project-cortex-loop.mp4',
    },
    {
      title: 'Open Labels Initiative (OLI)',
      category: language === 'de' ? 'Daten-Standards' : 'Data Standards',
      icon: Tag,
      tagline: language === 'de' ? 'Ethereum Foundation gefördert' : 'Ethereum Foundation Funded',
      description: language === 'de'
        ? 'Ein offener Standard für EVM-Adress-Labeling — von einem leeren Repo zu Ethereum Foundation-geförderter Infrastruktur entwickelt. Drei Produktions-Artefakte geliefert und adoptiert von Enscribe, walletlabels, Blockscout und mehreren Daten-Teams.'
        : 'An open standard for EVM address labeling — built from an empty repo to Ethereum Foundation-funded infrastructure. Shipped three production artifacts and adopted by Enscribe, walletlabels, Blockscout, and multiple ecosystem data teams.',
      fullDescription: language === 'de'
        ? 'OLI bietet einen einheitlichen, erlaubnisfreien Labeling-Rahmen, der redundante Arbeit in Blockchain-Daten-Teams eliminiert. Drei Grants eigenständig gesichert: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, Arbitrum Questbook Dev Tooling.'
        : 'OLI provides a unified, permissionless labeling framework that eliminates redundant work across blockchain data teams. Three grants secured independently: Ethereum Foundation ESP DevTooling, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling.',
      technologies: ['TypeScript', 'JavaScript', 'Node.js', 'Hardhat', 'REST APIs', 'EAS'],
      features: language === 'de'
        ? [
          'TypeScript/JavaScript SDK für das Lesen des OLI EVM Label Pools über REST',
          'Hardhat-Plugin: Entwickler können Labels direkt beim Deployment attestieren',
          'Web-Frontend für Community-Label-Submissions',
          'Adoptiert von Enscribe, walletlabels, Blockscout und mehreren Ethereum-Datenplattformen',
          'Finanziert durch Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra und Arbitrum Questbook Dev Tooling'
        ]
        : [
          'TypeScript/JavaScript SDK for reading the OLI EVM label pool over REST',
          'Hardhat plugin that lets developers attest labels on deployment',
          'Web frontend for community label submissions',
          'Adopted by Enscribe, walletlabels, Blockscout, and multiple Ethereum ecosystem data platforms',
          'Funded by Ethereum Foundation, Gitcoin GG25 OSS Developer Tooling & Infra, and Arbitrum Questbook Dev Tooling'
        ],
      codeLink: 'https://github.com/openlabelsinitiative',
      liveLink: 'https://www.openlabelsinitiative.org/',
      bgImage: '/images/generated/project-oli.jpg',
    },
    {
      title: language === 'de' ? 'PrivaCT: Vertrauensminimierte Zertifikatstransparenz' : 'PrivaCT: Trust-Minimized Certificate Transparency',
      category: language === 'de' ? 'Web-Sicherheit' : 'Web Security',
      icon: ShieldCheck,
      tagline: language === 'de' ? 'Hackathon Gewinner — Mammothan 2025' : 'Hackathon Winner — Mammothan 2025',
      description: language === 'de'
        ? 'Browser-Erweiterung, die Website-Zertifikate direkt im Browser verifiziert — mit Prism-basierten dezentralen Transparenzlogs. Schützt vor Man-in-the-Middle-Angriffen ohne zentraler Autorität zu vertrauen.'
        : 'Browser extension that verifies website certificates directly in the browser using Prism-based decentralized transparency logs — protecting users from man-in-the-middle attacks without trusting a central authority.',
      fullDescription: language === 'de'
        ? 'PrivaCT schließt eine kritische Sicherheitslücke beim Surfen im Web: Merkle-Proof-Verifikation und visuelle Echtzeit-Indikatoren direkt im Browser, ohne zentrale Infrastruktur.'
        : 'PrivaCT closes a critical security gap in web browsing: Merkle Proof verification and real-time visual indicators directly in the browser, with no central infrastructure required.',
      technologies: language === 'de'
        ? ['TypeScript', 'Blockchain', 'Web-Sicherheit', 'Browser-Erweiterung']
        : ['TypeScript', 'Blockchain', 'Web Security', 'Browser Extension'],
      features: language === 'de'
        ? [
          'Browser-Erweiterung verifiziert Website-Zertifikate automatisch in Echtzeit',
          'Prism-basiertes Transparenzsystem für dezentrale Verifikation',
          'Sichere Merkle-Proof-Verifikation direkt im Browser',
          'Visuelle Indikatoren für Zertifikatsstatus — kein zentraler Broker'
        ]
        : [
          'Browser extension that automatically verifies website certificates in real time',
          'Prism-based transparency system for decentralized verification',
          'Secure Merkle Proof verification within the browser',
          'Visual certificate validity indicators — no central broker'
        ],
      codeLink: 'https://github.com/Aghostraa/PrivaCT',
      liveLink: '',
      bgImage: '/images/generated/project-privact.jpg',
    },
    {
      title: language === 'de' ? 'Sustained: Plattform für umweltfreundliches Verhalten' : 'Sustained: Pro-Environmental Behavior Platform',
      category: language === 'de' ? 'Civic-Tech' : 'Civic Tech',
      icon: Leaf,
      tagline: language === 'de' ? 'Abschlussprojekt' : 'Thesis Project',
      description: language === 'de'
        ? 'Full-Stack-Plattform zur Förderung pro-umweltlichen Verhaltens in Aachen durch demokratische Finanzierung und Community-Aktionen. Quadratic-Funding-Simulation, Initiative Hub und Impact-Visualisierungssystem.'
        : 'Full-stack platform designed to foster pro-environmental behavior in Aachen through democratic funding and community action. Built a Quadratic Funding simulation (EcoFundSim), an Initiative Hub for local sustainability projects, and an Impact Visualization System.',
      fullDescription: language === 'de'
        ? 'Forschungsgetriebene Plattform auf Basis von Value-Belief-Norm und Theory of Planned Behavior Frameworks — entwickelt als Abschlussprojekt an der FH Aachen.'
        : 'Research grounded in Value-Belief-Norm and Theory of Planned Behavior frameworks — developed as a thesis project at FH Aachen University.',
      technologies: language === 'de'
        ? ['React', 'TypeScript', 'Tailwind CSS', 'Quadratische Finanzierung']
        : ['React', 'TypeScript', 'Tailwind CSS', 'Quadratic Funding'],
      features: language === 'de'
        ? [
          'EcoFundSim: Quadratic-Funding-Simulation für demokratische Ressourcenverteilung',
          'Initiative Hub für lokale Nachhaltigkeitsprojekte',
          'Impact-Visualisierungssystem: Ziele in messbare Kennzahlen übersetzt',
          'Persönliches Dashboard mit Community-Engagement-Funktionen',
          'VBN- und TPB-Framework-Integration für verhaltensbasiertes Design'
        ]
        : [
          'EcoFundSim: Quadratic Funding simulation for democratic resource allocation',
          'Initiative Hub for local sustainability projects',
          'Impact Visualization System: translates initiative goals into tangible metrics',
          'Personal Dashboard with community engagement features',
          'Value-Belief-Norm and Theory of Planned Behavior framework integration'
        ],
      codeLink: 'https://github.com/Aghostraa/sustained-aachen',
      liveLink: 'https://sustained-aachen.vercel.app',
      bgImage: '/images/generated/project-sustained.jpg',
    },
  ]

  const achievements = [
    {
      icon: Trophy,
      title: language === 'de' ? 'ETH Global Open Agents — Cortex' : 'ETH Global Open Agents — Cortex',
      description: language === 'de' ? 'Gewinner des 0G Best Agent Framework Tracks. Selbst-evolvierende KI-Agenten-Zwillinge mit verschlüsseltem persistentem Gedächtnis auf dezentralem Storage — persistente Identität für KI.' : 'Winner of the 0G Best Agent Framework track. Built self-evolving AI agent twins with encrypted persistent memory on decentralized storage — persistent identity for AI.',
    },
    {
      icon: Trophy,
      title: language === 'de' ? 'Mammothan 2025 Gewinner' : 'Mammothan 2025 Winner',
      description: language === 'de' ? 'Gewinner des 2025 Mammothan Hackathons von Celestia mit PrivaCT — vertrauensminimierte Zertifikatstransparenz direkt im Browser.' : 'Winner of the 2025 Mammothan hackathon by Celestia with PrivaCT — trust-minimized Certificate Transparency delivered directly in the browser.',
    },
    {
      icon: Award,
      title: language === 'de' ? 'Ethereum Foundation Grant' : 'Ethereum Foundation Grant',
      description: language === 'de' ? 'ESP DevTooling Grant für die Open Labels Initiative als kritische Ethereum Ecosystem-Infrastruktur.' : 'ESP DevTooling Grant awarded to Open Labels Initiative as critical Ethereum ecosystem infrastructure.',
    },
    {
      icon: Award,
      title: language === 'de' ? 'Gitcoin Grants' : 'Gitcoin Grants',
      description: language === 'de' ? 'OLI akzeptiert in Gitcoin GG25 OSS Developer Tooling & Infra.' : 'OLI accepted into Gitcoin GG25 OSS Developer Tooling & Infra.',
    },
    {
      icon: Rocket,
      title: language === 'de' ? 'KI Labeling Agent — 100x Kostenreduktion' : 'AI Labeling Agent — 100x Cost Reduction',
      description: language === 'de' ? 'KI-Agent für Smart-Contract-Labeling: Kosten von €1 auf €0,01 pro Label gesenkt — Bearbeitungszeit von 4 Stunden auf 10 Minuten.' : 'Built an automated AI agent that cut smart contract labeling costs from €1 to €0.01 per label — reducing processing time from 4 hours to 10 minutes at scale.',
    },
    {
      icon: Rocket,
      title: language === 'de' ? 'KI Sales Engine — 3 Stellen automatisiert' : 'AI Sales Engine — 3 Hires Replaced',
      description: language === 'de' ? 'Agentisches System für 30 simultane Business-Gespräche — Outreach-Zeit von 1 Stunde auf 10 Minuten, ersetzte Aufwand von 3 zusätzlichen Mitarbeitern.' : 'Built an agentic system managing 30 simultaneous business conversations, reducing per-contact outreach time from 1 hour to 10 minutes — collectively replacing the workload of 3 additional hires.',
    },
    {
      icon: Users,
      title: language === 'de' ? 'Web3 Community Partner' : 'Web3 Community Partner',
      description: language === 'de' ? 'Organisation von Hackathon Side-Events, Workshops und Community-Events für Solana, Celestia und ICP — inkl. 5 Mammothan Pit-Stops in Deutschland als Blockchain Club President.' : 'Organized hackathon side events, workshops, and community events for Solana, Celestia, and ICP — including 5 Mammothan pit-stops across Germany as Blockchain Club President.',
    },
    {
      icon: PenLine,
      title: language === 'de' ? 'Award-Winning Writing' : 'Award-Winning Writing',
      description: language === 'de' ? 'Analyse zum Stand des Ethereum Ecosystems — in der Web3-Research-Community verbreitet und anerkannt.' : 'Published analysis on the state of the Ethereum ecosystem — featured and recognized across the Web3 research community.',
      link: { href: 'https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q', label: language === 'de' ? 'Lesen' : 'Read it' },
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">
            {language === 'de' ? 'Ausgewählte Arbeiten' : 'Selected work'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            {language === 'de' ? 'Systeme, die live sind und sich rechnen' : 'Systems that shipped and paid off'}
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-neutral-600">
            {language === 'de'
              ? 'Von preisgekrönten Agenten-Frameworks bis zu Ethereum Foundation-geförderter Infrastruktur — Projekte, die von der Idee bis zur Produktion und Adoption getragen wurden.'
              : 'From award-winning agent frameworks to Ethereum Foundation-funded infrastructure — projects carried from idea through to production and real adoption.'}
          </p>
        </div>

        {/* Featured project */}
        <Reveal className="mb-6">
          <ProjectCard {...projects[0]} featured language={language} />
        </Reveal>

        {/* Remaining projects */}
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(1).map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard {...project} featured={false} language={language} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Achievements */}
        <Reveal className="mt-16 md:mt-20 rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="flex items-center gap-3 border-b border-neutral-200 bg-neutral-900 px-6 py-5 md:px-8">
            <Trophy size={20} className="text-primary" />
            <h3 className="font-display text-xl font-semibold text-white">
              {language === 'de' ? 'Erfolge & Auszeichnungen' : 'Achievements & Recognition'}
            </h3>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {achievements.map((item, i) => {
                const ItemIcon = item.icon
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <ItemIcon size={17} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-neutral-600">
                        {item.description}
                        {item.link ? (
                          <a
                            href={item.link.href}
                            target="_blank"
                            rel="noopener"
                            className="ml-1 font-semibold text-primary hover:text-primary-hover underline underline-offset-2 transition-colors duration-150"
                          >
                            {item.link.label}
                          </a>
                        ) : null}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
