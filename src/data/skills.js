import { Bot, Code2, Database, Blocks, Briefcase, Users } from 'lucide-react';

/** Skill groups and languages, shared by the brand site and the CV page. */
export const skillContent = {
  en: {
    eyebrow: 'Skills & Expertise',
    heading: 'My technical toolbox',
    githubTitle: 'GitHub Activity',
    githubAlt: 'GitHub contributions calendar for Aghostraa',
    languagesTitle: 'Languages',
    groups: [
      {
        icon: Bot,
        title: 'AI, Agents & Automation',
        skills: ['AI Agents', 'RAG Pipelines', 'LLM Integration', 'n8n', 'Automation-First Process Design', 'Event-Driven & Scheduled Pipelines'],
      },
      {
        icon: Code2,
        title: 'Architecture & Frameworks',
        skills: ['TypeScript', 'Python', 'Node.js', 'React', 'Next.js', 'Tailwind CSS', 'RESTful API Design', 'Supabase / PostgreSQL', 'Software Engineering', 'JavaScript', 'Vue', 'REST APIs', 'SDK Development'],
      },
      {
        icon: Database,
        title: 'Data & Analytics',
        skills: ['SQL', 'Data Validation', 'Pipeline QA', 'Evaluation Methods', 'Airflow', 'Airtable'],
      },
      {
        icon: Blocks,
        title: 'Web3 & Blockchain',
        skills: ['Ethereum', 'EVM', 'Smart Contracts', 'Layer 2 Analytics', 'DeFi', 'EAS'],
      },
      {
        icon: Briefcase,
        title: 'Business & Strategy',
        skills: ['Grants & Funding', 'Business Development', 'Partnerships', 'Content Strategy', 'Project Management'],
      },
      {
        icon: Users,
        title: 'Professional Skills',
        skills: ['Leadership', 'Research', 'Communication', 'Product & Design', 'Community Management'],
      },
    ],
    languages: [
      { name: 'English', level: 'C2 — Proficient' },
      { name: 'Persian', level: 'Native' },
      { name: 'German', level: 'C1 — Advanced' },
    ],
  },
  de: {
    eyebrow: 'Fähigkeiten & Expertise',
    heading: 'Mein technischer Werkzeugkasten',
    githubTitle: 'GitHub Aktivität',
    githubAlt: 'GitHub Beitragskalender für Aghostraa',
    languagesTitle: 'Sprachen',
    groups: [
      {
        icon: Bot,
        title: 'KI, Agenten & Automatisierung',
        skills: ['KI-Agenten', 'RAG-Pipelines', 'LLM-Integration', 'n8n', 'Automation-First Prozessdesign', 'Event-getriebene & geplante Pipelines'],
      },
      {
        icon: Code2,
        title: 'Architektur & Frameworks',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Node.js', 'React', 'Vue', 'RESTful API-Design', 'Supabase / PostgreSQL', 'SDK Development'],
      },
      {
        icon: Database,
        title: 'Daten & Analytics',
        skills: ['SQL', 'Datenvalidierung', 'Pipeline QA', 'Evaluationsmethoden', 'Airflow', 'Airtable'],
      },
      {
        icon: Blocks,
        title: 'Web3 & Blockchain',
        skills: ['Ethereum', 'EVM', 'Smart Contracts', 'Layer-2-Analyse', 'DeFi', 'EAS'],
      },
      {
        icon: Briefcase,
        title: 'Business & Strategie',
        skills: ['Grants & Förderung', 'Business Development', 'Partnerschaften', 'Content-Strategie', 'Projektmanagement'],
      },
      {
        icon: Users,
        title: 'Überfachliche Kompetenzen',
        skills: ['Führung', 'Forschung', 'Kommunikation', 'Produkt & Design', 'Community Management'],
      },
    ],
    languages: [
      { name: 'Englisch', level: 'C2 — Verhandlungssicher' },
      { name: 'Persisch', level: 'Muttersprache' },
      { name: 'Deutsch', level: 'C1 — Fortgeschritten' },
    ],
  },
};

