import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Delhi Legislative Assembly AI',
  description: 'Ask questions about MLAs, their work, and assembly speeches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

