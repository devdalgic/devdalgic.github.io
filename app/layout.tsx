import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {AptabaseProvider} from "@aptabase/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Denizhan Dalgic',
  description: 'Personal website of Denizhan Dalgic',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AptabaseProvider appKey="A-US-9847557599">{children}</AptabaseProvider>
      </body>
    </html>
  )
}
