import { FloatingNav } from '@/components/ui/FloatingNav'
import { post } from '@/data'
import React from 'react'
import HeroSouledStore from '@/components/ HeroSouledStore'
import SouledStoreContent from '@/components/SouledStoreContent'

export const metadata = {
  title: 'The Souled Store – Modern E-Commerce Experience',
  description: 'E-Commerce Web Application Case Study',
}

export default function SouledStorePage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={post} />
        <HeroSouledStore />
        <SouledStoreContent/>
      </div>
    </main>
  )
}