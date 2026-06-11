import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import ResumeAIDocs from '@/components/ResumeAIDocs'
import ResumeAIContent from '@/components/ResumeAIContent'

export const metadata = {
  title: 'Resume Analyzer AI',
  description: 'AI-powered interview preparation platform that analyzes resumes and job descriptions to generate personalized interview questions, skill gap analysis, and study plans.',
}

export default function ResumeAIPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <ResumeAIDocs/>
        <ResumeAIContent/>
      </div>
    </main>
  )
}