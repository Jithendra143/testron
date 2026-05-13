'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  SA,
  US,
  FR,
  IN,
  RU,
  ES
} from 'country-flag-icons/react/3x2'
import { languages } from '@/config/languages'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [mounted, setMounted] = useState(false)

  const flags = {
    ar: <SA title='Arabic' className='w-6 h-6 rounded-sm' />,
    en: <US title='English' className='w-6 h-6 rounded-sm' />,
    fr: <FR title='French' className='w-6 h-6 rounded-sm' />,
    kn: <IN title='Kannada' className='w-6 h-6 rounded-sm' />,
    ru: <RU title='Russian' className='w-6 h-6 rounded-sm' />,
    es: <ES title='Spanish' className='w-6 h-6 rounded-sm' />
  }

  useEffect(() => {
    setMounted(true)

    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage) {
      const foundLanguage = languages.find(
        lang => lang.code === savedLanguage
      )

      if (foundLanguage) {
        setSelectedLanguage(foundLanguage)
        updateDocument(foundLanguage)
        return
      }
    }

    setSelectedLanguage(languages[1])
  }, [])

  const updateDocument = language => {
    document.documentElement.lang = language.code
    document.documentElement.dir = language.dir
  }

  const handleSelect = language => {
    setSelectedLanguage(language)
    localStorage.setItem('language', language.code)
    updateDocument(language)
    setIsOpen(false)
  }

  if (!mounted || !selectedLanguage) return null

  return (
    <div className='relative w-48'>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 bg-white text-sm font-medium'
      >
        <div className='flex items-center gap-2'>
          {flags[selectedLanguage.code]}
          <span>{selectedLanguage.label}</span>
        </div>

        <ChevronDown className='w-4 h-4' />
      </button>

      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50'>
          {languages.map(language => (
            <button
              key={language.code}
              onClick={() => handleSelect(language)}
              className='w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50'
            >
              {flags[language.code]}
              <span className='text-sm font-medium text-gray-700'>
                {language.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}