'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { languages } from '@/config/languages'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)

  const [selectedLanguage, setSelectedLanguage] = useState(languages[1])

  // Load saved language
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage) {
      const foundLanguage = languages.find(
        lang => lang.code === savedLanguage
      )

      if (foundLanguage) {
        setSelectedLanguage(foundLanguage)

        updateDocument(foundLanguage)
      }
    }
  }, [])

  // Update html attributes
  const updateDocument = language => {
    document.documentElement.lang = language.code

    document.documentElement.dir = language.dir
  }

  // Handle language select
  const handleSelect = language => {
    setSelectedLanguage(language)

    localStorage.setItem('language', language.code)

    updateDocument(language)

    setIsOpen(false)
  }

  return (
    <div className='relative w-44'>
      
      {/* Selected Language */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='w-full flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 bg-white text-sm font-medium'
      >
        <div className='flex items-center gap-2'>
          <span className='text-lg'>
            {selectedLanguage.flag}
          </span>

          <span>{selectedLanguage.label}</span>
        </div>

        <ChevronDown className='w-4 h-4' />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className='absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden z-50'>
          
          {languages.map(language => (
            <button
              key={language.code}
              onClick={() => handleSelect(language)}
              className='w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-300 text-left'
            >
              <span className='text-lg'>
                {language.flag}
              </span>

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