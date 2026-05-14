'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import {
  SA,
  US,
  FR,
  RU,
  ES
} from 'country-flag-icons/react/3x2'

import { languages } from '@/config/languages'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)

  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const flags = {
    ar: <SA title='Arabic' className='w-6 h-6 rounded-sm' />,
    en: <US title='English' className='w-6 h-6 rounded-sm' />,
    fr: <FR title='French' className='w-6 h-6 rounded-sm' />,
    ru: <RU title='Russian' className='w-6 h-6 rounded-sm' />,
    es: <ES title='Spanish' className='w-6 h-6 rounded-sm' />
  }

  const selectedLanguage =
    languages.find(lang => lang.code === locale) || languages[0]

  useEffect(() => {
    document.documentElement.lang = selectedLanguage.code
    document.documentElement.dir = selectedLanguage.dir
  }, [selectedLanguage])

  const handleSelect = language => {
    if (language.code !== locale) {
      router.replace(pathname, {
        locale: language.code
      })

      router.refresh()
    }

    setIsOpen(false)
  }

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