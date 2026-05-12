'use client'

import { useEffect, useState } from 'react'
import { AlignRight } from 'lucide-react'
import SideMenu from './SideMenu'

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Auto close sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <button onClick={() => setIsSidebarOpen(true)}>
        <AlignRight className='w-5 h-5 hover:text-darkColor hoverEffect md:hidden cursor-pointer' />
      </button>

      <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  )
}