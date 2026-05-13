'use client'

import { X, ChevronDown, ChevronUp } from 'lucide-react'
import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation';

const headerData = [
  { title: 'Home', link: '/' },
  { title: 'About Us', link: '/about' },
  { title: 'Machines', link: '/machines' },
  {
    title: 'Spares & Service',
    link: '/spares-service',
    subMenu: [
      { title: 'Spares', link: '/spares-service/spares' },
      { title: 'Service', link: '/spares-service/services' }
    ]
  },
  { title: 'Contact Us', link: '/contact' }
]

export default function SideMenu ({ isOpen, onClose }) {
  const pathname = usePathname()
  const [openSubMenu, setOpenSubMenu] = useState(null)

  const toggleSubMenu = title => {
    setOpenSubMenu(prev => (prev === title ? null : title))
  }

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } hoverEffect`}
      onClick={onClose}
    >
      {/* Sidebar */}
      <div
        onClick={e => e.stopPropagation()}
        className={`w-70 h-screen bg-black text-white p-6 border-r border-r-blue-700 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className='flex items-center justify-between pb-7'>
          <Logo />

          <button onClick={onClose}>
            <X className='hover:text-blue-500 transition-colors duration-300' />
          </button>
        </div>

        {/* Menu */}
        <div className='flex flex-col space-y-5 font-semibold tracking-wide'>
          {headerData.map(item => (
            <div key={item.title}>
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => {
                      toggleSubMenu(item.title)
                    }}
                    className={`flex items-center justify-between w-full ${pathname.includes(item.link) && 'text-blue-700'}`}
                  >
                    {item.title}

                    {openSubMenu === item.title ? (
                      <ChevronUp className='w-4 h-4' />
                    ) : (
                      <ChevronDown className='w-4 h-4' />
                    )}
                  </button>

                  {/* Submenu */}
                  {openSubMenu === item.title && (
                    <div className={`ml-4 mt-3 flex flex-col space-y-3 text-sm text-white`}>
                      {item.subMenu.map(sub => (
                        <Link
                          key={sub.title}
                          href={sub.link}
                          onClick={() => {
                            toggleSubMenu(item.title)
                            onClose()
                          }}
                          className={`hover:text-blue-400 transition-colors duration-300 ${pathname === sub.link && 'text-blue-700'}`}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.link}
                  onClick={() => {
                    toggleSubMenu(item.title)
                    onClose()
                  }}
                  className={`hover:text-blue-400 transition-colors duration-300 ${pathname === item.link && 'text-blue-700'}`}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
