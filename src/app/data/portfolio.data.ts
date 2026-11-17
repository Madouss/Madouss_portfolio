export interface SpecRow {
  label: string;
  value: string;
  status?: boolean;
}

export interface Phone {
  display: string;
  tel: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  location: string;
  kicker: string;
  lede: string;
  spec: SpecRow[];
  aboutLead: string;
  aboutBody: string;
  qualities: string[];
  email: string;
  phones: Phone[];
  language: string;
  address: string;
  cvUrl: string;
}

export interface ExperienceItem {
  date: string;
  duration?: string;
  title: string;
  org: string;
  points: string[];
  stack?: string;
}

export interface ProjectItem {
  domain: string;
  title: string;
  description: string;
  points: string[];
  stack: string;
  featured?: boolean;
}

export interface SkillGroup {
  label: string;
  tags: string[];
}

export interface EducationItem {
  date: string;
  title: string;
  org: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const PROFILE: Profile = {
  firstName: 'Madoussou',
  lastName: 'Ninan Fofana',
  fullName: 'Madoussou Ninan Fofana',
  role: 'Développeur fullstack',
  location: 'Abidjan, Côte d’Ivoire',
  kicker: 'Développeur fullstack · Abidjan, Côte d’Ivoire',
  lede:
    'Je conçois et fais évoluer des applications web complètes — back-offices métier, API REST et interfaces Angular — pour le recrutement, les télécoms et la santé.',
  spec: [
    { label: 'Rôle', value: 'Développeur fullstack' },
    { label: 'Stack', value: 'Angular · TypeScript · Node.js' },
    { label: 'Basé à', value: 'Abidjan, Côte d’Ivoire' },
    { label: 'En poste', value: 'Synelia Groupe' },
    { label: 'Statut', value: 'Ouvert aux opportunités', status: true },
  ],
  aboutLead:
    'Développeur fullstack spécialisé en Angular, TypeScript et Node.js, impliqué dans la conception d’applications web complètes, du front-end à l’API REST.',
  aboutBody:
    'J’ai travaillé sur des back-offices métier dans le recrutement, les télécoms et la santé : refonte d’interfaces Angular, migrations de versions majeures sans régression, dashboards et cartographies. Je maîtrise l’écosystème JavaScript/TypeScript, les bases de données et les standards du développement web.',
  qualities: ['Rigueur', 'Sens de l’organisation', 'Esprit d’équipe', 'Ponctualité', 'Adaptabilité'],
  email: 'fmadoussou01@gmail.com',
  phones: [
    { display: '07 48 33 77 25', tel: '+2250748337725' },
    { display: '01 01 04 29 61', tel: '+2250101042961' },
  ],
  language: 'Français',
  address: 'Yopougon Wassakara, Abidjan',
  cvUrl: 'cv/Madoussou_Fofana_CV.pdf',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Profil', href: '#profil' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    date: 'Depuis sept. 2025',
    title: 'Stagiaire développeur frontend',
    org: 'Synelia Groupe',
    points: [
      'Développement et refonte de 3 applications web d’entreprise (front-end Angular et API REST : recrutement, télécoms Orange, santé), en équipe sur GitLab.',
      'Refonte du back-office OmerOBF et pilotage du réseau de distribution télécom.',
      'Migration Angular 13 → 22 et TypeScript 4.6 → 6, sans régression fonctionnelle.',
      'Migration de l’UI vers PrimeNG 21, Tailwind CSS 4 et Boosted 5 ; formulaires de création/édition transformés en modals.',
      'Dashboards ApexCharts et cartographie Leaflet.',
    ],
    stack:
      'Angular 22 · TypeScript 6 · Node.js · API REST · PrimeNG 21 · Tailwind CSS 4 · Leaflet · ApexCharts',
  },
  {
    date: 'Avr. 2024 — Juil. 2025',
    duration: '1 an 3 mois',
    title: 'Conseiller client',
    org: 'PCCI',
    points: [
      'Traitement des demandes d’information, d’assistance et des réclamations clients.',
      'Historisation des appels.',
    ],
  },
  {
    date: 'Févr. — Août 2022',
    duration: '6 mois',
    title: 'Stagiaire développeur d’applications',
    org: 'Enical Technologies',
    points: [
      'Automatisation d’un logiciel de gestion de centre d’écoute.',
      'Gestion des appels entrants et sortants, mise en attente et enregistrement des appels.',
      'Conception d’un module de reporting.',
    ],
    stack: 'Intraweb · SQL Server',
  },
  {
    date: 'Janv. — Mars 2021',
    duration: '3 mois',
    title: 'Stagiaire développeur d’applications',
    org: 'Unilyone Côte d’Ivoire',
    points: [
      'Analyse des besoins métiers.',
      'Organisation du système informatique de l’entreprise.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    domain: 'Télécoms',
    title: 'Back-office OmerOBF',
    description:
      'Refonte du back-office de pilotage du réseau de distribution télécom pour Orange. Migration complète d’Angular 13 vers 22 et de TypeScript 4.6 vers 6 sans régression fonctionnelle, avec une nouvelle interface et des outils de visualisation.',
    points: [
      'Migration Angular 13 → 22 et TypeScript 4.6 → 6, sans régression.',
      'UI modernisée avec PrimeNG 21, Tailwind CSS 4 et Boosted 5.',
      'Dashboards ApexCharts et cartographie Leaflet.',
    ],
    stack:
      'Angular 22 · TypeScript 6 · Node.js · API REST · PrimeNG · Tailwind · Leaflet · ApexCharts',
    featured: true,
  },
  {
    domain: 'Santé & mutuelle',
    title: 'Back-office de santé',
    description:
      'Application multi-rôles (accueil, médecin, pharmacie, admin) couvrant le parcours de soins : rendez-vous, consultations, ordonnances, stock et tableaux de bord.',
    points: ['Migration progressive Angular 8 → 21 (standalone, signals).'],
    stack:
      'Angular 21 · Node.js · API REST · RxJS · Signals · PrimeNG · Tailwind · Chart.js',
  },
  {
    domain: 'Recrutement',
    title: 'Plateforme de recrutement',
    description:
      'Administration du cycle de recrutement complet : offres, quiz, candidats, entretiens, rapports et exports.',
    points: [
      'Composant CRUD générique piloté par configuration.',
      'Authentification login + OTP et permissions hiérarchiques (RBAC).',
      'Entretiens FullCalendar, rapports et exports PDF/CSV/XLSX.',
    ],
    stack:
      'Angular 21 · Node.js · API REST · RxJS · PrimeNG · CoreUI · Tailwind · Zod · TanStack Query',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Langages',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frameworks',
    tags: ['Angular', 'Node.js', 'Express', 'RxJS', 'Signals', 'Vue.js'],
  },
  {
    label: 'UI / CSS',
    tags: ['Bootstrap', 'Tailwind CSS', 'PrimeNG', 'CoreUI'],
  },
  {
    label: 'Bases de données',
    tags: ['SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    label: 'Méthodes',
    tags: ['UML', 'MERISE', 'API REST'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    date: '2022 — 2023',
    title: 'Master 1 — Réseaux Télécom & Génie Logiciel',
    org: 'Institut de Formation Sainte-Marie',
  },
  {
    date: '2018 — 2021',
    title: 'Licence professionnelle — Réseaux & Génie Logiciel',
    org: 'Pigier Côte d’Ivoire',
  },
  {
    date: '2017 — 2018',
    title: 'Baccalauréat série D',
    org: 'Lycée Moderne Yopougon Andokoi',
  },
];
