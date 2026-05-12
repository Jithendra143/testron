'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
export default function HeaderMenu () {
  const [openMenu, setOpenMenu] = useState(null)

  const handleMenuToggle = title => {
    setOpenMenu(prev => (prev === title ? null : title))
  }
  return (
    <nav className='hidden md:inline-flex w-full items-center justify-center gap-2 text-sm capitalize font-semibold text-lightColor'>
      {headerData.map(item => (
        <div key={item?.title} className='relative group'>
          {item.subMenu ? (
            <button
              onClick={() => handleMenuToggle(item.title)}
              className='hover:text-blue-700 hoverEffect relative px-1 flex items-center justify-center'
            >
              {item.title}{' '}
              {openMenu === item.title ? (
                <ChevronUp className='w-4 h-4 ml-1' />
              ) : (
                <ChevronDown className='w-4 h-4 ml-1' />
              )}
            </button>
          ) : (
            <Link
              href={item?.link}
              className={`hover:text-blue-700 hoverEffect relative px-1 py-0.5`}
            >
              {item?.title}
              <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-700 group-hover:w-1/2 hoverEffect group-hover:left-0`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-700 group-hover:w-1/2 hoverEffect group-hover:right-0`}
              />
            </Link>
          )}

          {item.subMenu && openMenu === item.title && (
            <div className='absolute top-full left-0 flex flex-col bg-white shadow-lg rounded-md min-w-45 py-2 z-50'>
              {item.subMenu.map(sub => (
                <Link
                  onClick={() => handleMenuToggle(item.title)}
                  key={sub.title}
                  href={sub.link}
                  className='px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300'
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
