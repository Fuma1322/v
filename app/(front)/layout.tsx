import MobileDock from '@/components/Frontend/MobileDock'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default async function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      <Navbar />
        {children}
        <MobileDock />
    </div>
  )
}