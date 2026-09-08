import { Trophy, Award, Rocket, Users, PenLine } from 'lucide-react'

/** Recognition and outcomes, shared by the brand catalogue and the CV page. */
export function getAchievements(language) {
  const de = language === 'de'
  return [
    {
      icon: Trophy,
      title: 'ETH Global Open Agents — Cortex',
      description: de
        ? 'Gewinner des 0G Best Agent Framework Tracks. Selbst-evolvierende KI-Agenten-Zwillinge mit verschlüsseltem persistentem Gedächtnis auf dezentralem Storage.'
        : 'Winner of the 0G Best Agent Framework track. Built self-evolving AI agent twins with encrypted persistent memory on decentralized storage.',
    },
    {
      icon: Trophy,
      title: de ? 'Mammothan 2025 Gewinner' : 'Mammothan 2025 Winner',
      description: de
        ? 'Gewinner des 2025 Mammothan Hackathons von Celestia mit PrivaCT — vertrauensminimierte Zertifikatstransparenz direkt im Browser.'
        : 'Winner of the 2025 Mammothan hackathon by Celestia with PrivaCT — trust-minimized Certificate Transparency delivered directly in the browser.',
    },
    {
      icon: Award,
      title: de ? 'Ethereum Foundation Grant' : 'Ethereum Foundation Grant',
      description: de
        ? 'ESP DevTooling Grant für die Open Labels Initiative als kritische Ethereum Ecosystem-Infrastruktur.'
        : 'ESP DevTooling Grant awarded to Open Labels Initiative as critical Ethereum ecosystem infrastructure.',
    },
    {
      icon: Award,
      title: de ? 'Gitcoin Grants' : 'Gitcoin Grants',
      description: de
        ? 'OLI akzeptiert in Gitcoin GG25 OSS Developer Tooling & Infra.'
        : 'OLI accepted into Gitcoin GG25 OSS Developer Tooling & Infra.',
    },
    {
      icon: Rocket,
      title: de ? 'KI Labeling Agent — 100x Kostenreduktion' : 'AI Labeling Agent — 100× Cost Reduction',
      description: de
        ? 'KI-Agent für Smart-Contract-Labeling: Kosten von €1 auf €0,01 pro Label gesenkt — Bearbeitungszeit von 4 Stunden auf 10 Minuten.'
        : 'Built an automated AI agent that cut smart contract labeling costs from €1 to €0.01 per label — reducing processing time from 4 hours to 10 minutes at scale.',
    },
    {
      icon: Rocket,
      title: de ? 'KI Sales Engine — 3 Stellen automatisiert' : 'AI Sales Engine — 3 Hires Replaced',
      description: de
        ? 'Agentisches System für 30 simultane Business-Gespräche — Outreach-Zeit von 1 Stunde auf 10 Minuten, ersetzte Aufwand von 3 zusätzlichen Mitarbeitern.'
        : 'Built an agentic system managing 30 simultaneous business conversations, reducing per-contact outreach time from 1 hour to 10 minutes — collectively replacing the workload of 3 additional hires.',
    },
    {
      icon: Users,
      title: de ? 'Web3 Community Partner' : 'Web3 Community Partner',
      description: de
        ? 'Organisation von Hackathon Side-Events, Workshops und Community-Events für Solana, Celestia und ICP — inkl. 5 Mammothan Pit-Stops in Deutschland als Blockchain Club President.'
        : 'Organized hackathon side events, workshops, and community events for Solana, Celestia, and ICP — including 5 Mammothan pit-stops across Germany as Blockchain Club President.',
    },
    {
      icon: PenLine,
      title: de ? 'Preisgekröntes Schreiben' : 'Award-Winning Writing',
      description: de
        ? 'Analyse zum Stand des Ethereum Ecosystems — in der Web3-Research-Community verbreitet und anerkannt.'
        : 'Published analysis on the state of the Ethereum ecosystem — featured and recognized across the Web3 research community.',
      link: {
        href: 'https://app.t2.world/article/cm13hjiki91314821mcrbk78i1q',
        label: de ? 'Lesen' : 'Read it',
      },
    },
  ]
}
