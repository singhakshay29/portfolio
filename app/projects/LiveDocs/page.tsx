import HeroLiveDocs from '@/components/HeroLiveDocs'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import ZentryContent from "@/components/LiveDocsContent"

export const metadata = {
  title: 'LiveDocs – Real-Time Collaborative Editor',
  description: 'A Google Docs–inspired collaborative editor built with Next.js, Liveblocks, and modern web technologies to demonstrate real-time collaboration and scalable architecture.',
}

export default function LiveDocsPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroLiveDocs />
        <ZentryContent/>
      </div>
    </main>
  )
}