import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {AptabaseProvider} from "@aptabase/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Denizhan Dalgic Portfolio Website',
    description: 'Personal website of Denizhan Dalgic',
    keywords: ["denizhan", "dalgic", "denizhandalgic", "denizhan dalgic", "denizhan dalgıç", "portfolio", "devdalgic"],
    creator: "Denizhan Dalgic",
    authors: [{name: "Denizhan Dalgic"}],
    robots: "index, follow",
    openGraph: {
        type: "website",
        url: "https://devdalgic.github.io",
        title: "Denizhan Dalgic Portfolio Website",
        description: "Personal website of Denizhan Dalgic",
        siteName: "Denizhan Dalgic Portfolio Website",
        images: [{
            url: "/dd.webp",
        }],
    }
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
