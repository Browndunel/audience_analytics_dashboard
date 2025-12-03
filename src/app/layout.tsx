import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Audience Analytics Dashboard | Brawn Dunel',
  description: 'Dashboard d\'analyse d\'audiences multi-plateformes pour IT\'S TIME - Démonstration de compétences Data Analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
