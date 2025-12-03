'use client';

import { useState } from 'react';
import { audienceData, workflowSteps } from '@/data/audienceData';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {
  TrendingUp, Users, Target, Activity,
  Database, Workflow, BarChart3, LineChart as LineChartIcon,
  Github, Linkedin, Mail
} from 'lucide-react';

const COLORS = ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE'];

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="text-white shadow-lg bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container px-6 py-6 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="mb-1 text-3xl font-bold">Audience Analytics Dashboard</h1>
              <p className="text-sm text-blue-200">Analyse Multi-Plateformes en Temps Réel</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold"></p>
              <p className="text-sm text-blue-200"></p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-6 py-8 mx-auto">
        
        {/* KPIs Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white border-l-4 border-blue-600 shadow-md rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Reach Total</div>
              <Users className="text-blue-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {audienceData.globalKPIs.totalReach.toLocaleString()}
            </div>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <TrendingUp size={16} className="mr-1" />
              +{audienceData.globalKPIs.reachGrowth}% ce mois
            </div>
          </div>

          <div className="p-6 bg-white border-l-4 border-green-600 shadow-md rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Engagement Moyen</div>
              <Activity className="text-green-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {audienceData.globalKPIs.avgEngagement}%
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Taux d'interaction global
            </div>
          </div>

          <div className="p-6 bg-white border-l-4 shadow-md rounded-xl border-amber-600">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Taux de Conversion</div>
              <Target className="text-amber-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">
              {audienceData.globalKPIs.conversionRate}%
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Actions complétées
            </div>
          </div>

          <div className="p-6 bg-white border-l-4 border-purple-600 shadow-md rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-gray-600">Plateformes Actives</div>
              <BarChart3 className="text-purple-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900">5</div>
            <div className="mt-2 text-sm text-gray-500">
              Sources consolidées
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="p-6 mb-8 bg-white shadow-md rounded-xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Workflow d'Analyse</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="relative">
                <div className={`p-4 rounded-lg border-2 ${
                  step.status === 'completed' ? 'border-green-500 bg-green-50' :
                  step.status === 'active' ? 'border-blue-500 bg-blue-50' :
                  'border-gray-300 bg-gray-50'
                }`}>
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step.status === 'completed' ? 'bg-green-500' :
                      step.status === 'active' ? 'bg-blue-500' :
                      'bg-gray-400'
                    } text-white font-bold`}>
                      {step.id}
                    </div>
                  </div>
                  <h3 className="mb-2 font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-2">
          
          {/* Evolution Temporelle */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Évolution des Audiences</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={audienceData.timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tv" stroke="#1E3A8A" strokeWidth={2} name="TV" />
                <Line type="monotone" dataKey="youtube" stroke="#EF4444" strokeWidth={2} name="YouTube" />
                <Line type="monotone" dataKey="facebook" stroke="#3B82F6" strokeWidth={2} name="Facebook" />
                <Line type="monotone" dataKey="podcasts" stroke="#10B981" strokeWidth={2} name="Podcasts" />
                <Line type="monotone" dataKey="avod" stroke="#F59E0B" strokeWidth={2} name="AVOD" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Répartition par Plateforme */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Répartition par Plateforme</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={audienceData.platformBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.platform}: ${entry.share}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="share"
                >
                  {audienceData.platformBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Comparaison Engagement */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Taux d'Engagement par Plateforme</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={audienceData.platformBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="platform" tick={{ fontSize: 12 }} angle={-15} textAnchor="end" height={80} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="engagement" fill="#3B82F6" name="Engagement (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Démographie */}
          <div className="p-6 bg-white shadow-md rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-gray-900">Répartition Démographique (Âge)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={audienceData.demographics.age} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="range" type="category" tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="percentage" fill="#10B981" name="Pourcentage (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Content Table */}
        <div className="p-6 mb-8 bg-white shadow-md rounded-xl">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Top 5 Contenus Performants</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Contenu
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Plateforme
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Vues
                  </th>
                  <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                    Engagement
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {audienceData.topContent.map((content, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {content.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        content.platform === 'TV' ? 'bg-blue-100 text-blue-800' :
                        content.platform === 'YouTube' ? 'bg-red-100 text-red-800' :
                        content.platform === 'Facebook' ? 'bg-blue-100 text-blue-800' :
                        content.platform === 'AVOD' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {content.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {content.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
                      {content.engagement}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 text-white bg-gray-900">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="mb-2 text-xl font-bold">Brawn Dunel</h3>
              <p className="text-sm text-gray-400">Master 2 Development, Big Data & AI - IPSSI</p>
              <p className="text-sm text-gray-400">Data Analyst | Project Manager | Full-Stack Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:tebohbrowndunel@gmail.com" className="transition hover:text-blue-400">
                <Mail size={24} />
              </a>
              <a href="https://www.linkedin.com/in/brawndunel" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Browndunel" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-400">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="pt-6 mt-6 text-sm text-center text-gray-400 border-t border-gray-800">
            <p>Dashboard de démonstration créé pour IT'S TIME | © 2024 Brawn Dunel</p>
            <p className="mt-2">
              <span className="font-semibold">Stack:</span> Next.js, React, TypeScript, Recharts, Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
