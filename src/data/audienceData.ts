// Données simulées pour le dashboard d'analyse d'audiences

export const audienceData = {
  // Données temporelles pour les graphiques d'évolution
  timeSeriesData: [
    { date: '2024-11-01', tv: 245000, youtube: 156000, facebook: 89000, podcasts: 34000, avod: 67000 },
    { date: '2024-11-02', tv: 238000, youtube: 162000, facebook: 92000, podcasts: 36000, avod: 71000 },
    { date: '2024-11-03', tv: 251000, youtube: 168000, facebook: 95000, podcasts: 38000, avod: 74000 },
    { date: '2024-11-04', tv: 267000, youtube: 174000, facebook: 98000, podcasts: 41000, avod: 78000 },
    { date: '2024-11-05', tv: 259000, youtube: 179000, facebook: 101000, podcasts: 43000, avod: 82000 },
    { date: '2024-11-06', tv: 272000, youtube: 185000, facebook: 104000, podcasts: 45000, avod: 85000 },
    { date: '2024-11-07', tv: 281000, youtube: 192000, facebook: 108000, podcasts: 48000, avod: 89000 },
    { date: '2024-11-08', tv: 276000, youtube: 198000, facebook: 112000, podcasts: 51000, avod: 93000 },
    { date: '2024-11-09', tv: 289000, youtube: 205000, facebook: 115000, podcasts: 53000, avod: 97000 },
    { date: '2024-11-10', tv: 295000, youtube: 212000, facebook: 119000, podcasts: 56000, avod: 101000 },
  ],

  // KPIs globaux
  globalKPIs: {
    totalReach: 1247000,
    avgEngagement: 8.7,
    conversionRate: 3.2,
    reachGrowth: 12.4,
  },

  // Données par plateforme
  platformBreakdown: [
    { platform: 'TV Linéaire', audience: 295000, engagement: 6.2, share: 38.5 },
    { platform: 'YouTube', audience: 212000, engagement: 11.4, share: 27.6 },
    { platform: 'Facebook/Instagram', audience: 119000, engagement: 9.8, share: 15.5 },
    { platform: 'AVOD', audience: 101000, engagement: 7.3, share: 13.2 },
    { platform: 'Podcasts', audience: 56000, engagement: 14.1, share: 7.3 },
  ],

  // Top contenus
  topContent: [
    { title: 'Émission Prime Time', platform: 'TV', views: 487000, engagement: 8.9 },
    { title: 'Interview Exclusive', platform: 'YouTube', views: 342000, engagement: 12.3 },
    { title: 'Behind the Scenes', platform: 'Facebook', views: 215000, engagement: 10.7 },
    { title: 'Série Documentaire Ep.1', platform: 'AVOD', views: 189000, engagement: 7.8 },
    { title: 'Podcast Insights', platform: 'Podcasts', views: 124000, engagement: 15.2 },
  ],

  // Données démographiques
  demographics: {
    age: [
      { range: '18-24', percentage: 15.2 },
      { range: '25-34', percentage: 28.7 },
      { range: '35-44', percentage: 24.3 },
      { range: '45-54', percentage: 18.9 },
      { range: '55+', percentage: 12.9 },
    ],
    gender: [
      { category: 'Femmes', percentage: 52.3 },
      { category: 'Hommes', percentage: 45.8 },
      { category: 'Autre', percentage: 1.9 },
    ],
  },
};

// Workflow de traitement
export const workflowSteps = [
  {
    id: 1,
    title: 'Collecte des Données',
    description: 'Extraction via APIs (YouTube Analytics, Facebook Insights, Médiamétrie, etc.)',
    icon: 'Database',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Traitement ETL',
    description: 'Nettoyage, normalisation et consolidation dans un modèle unifié',
    icon: 'Workflow',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Analyse & KPIs',
    description: 'Calcul des métriques cross-plateformes et corrélations',
    icon: 'BarChart3',
    status: 'completed',
  },
  {
    id: 4,
    title: 'Visualisation',
    description: 'Dashboards interactifs Power BI / Tableau avec drill-down',
    icon: 'LineChart',
    status: 'active',
  },
];
