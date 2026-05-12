'use client'

import { useState } from 'react'

import SectionWrapper from '@/components/SectionWrapper'
import { SubText, Title } from '@/components/ui/text'

import { Cog, Settings, Wrench, TrendingUp } from 'lucide-react'

const tabs = [
  {
    tab: "Custom Machine's",
    icon: Cog,
    title:
      'Built Around Your Process — No Standard Designs, Unique and In house Built',
    content:
      'Every machine we deliver is engineered specifically for your material, output requirements, and production conditions. We don’t adapt catalog products — we design solutions that fit your process perfectly, ensuring higher efficiency, consistency, and long-term performance.'
  },
  {
    tab: 'Spares',
    icon: Settings,
    title: 'Precision Components. Reliable Performance.',
    content:
      'Our spares are manufactured to exact specifications using high-grade materials to ensure durability and consistent operation. From barrels and screws to critical wear parts, every component is built to minimize downtime and maintain peak machine performance.'
  },
  {
    tab: 'Machinery Servicing',
    icon: Wrench,
    title: 'Expert Support That Keeps You Running',
    content:
      'We provide end-to-end servicing backed by deep technical expertise. From troubleshooting and refurbishment to performance optimization, our focus is to keep your operations running efficiently with minimal interruption.'
  },
  {
    tab: 'Process Improvement',
    icon: TrendingUp,
    title: 'Optimize Output. Reduce Losses. Improve Efficiency.',
    content:
      'We analyze your existing process and identify opportunities to enhance performance, product quality, and throughput. Our approach is practical and results-driven — delivering measurable improvements where it matters most.'
  }
]

export default function OptimizedSolutionsSection () {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <SectionWrapper
      className='relative overflow-hidden bg-white'
      contentClassName='max-w-7xl'
    >
      {/* Background Shapes */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40' />
      <div className='absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40' />

      <div className='relative z-10 flex flex-col gap-14'>
        {/* Heading */}
        <div className='flex flex-col items-center text-center gap-5 max-w-5xl mx-auto'>
          <p className='text-sm md:text-base uppercase tracking-[0.18em] text-blue-700 font-semibold'>
            FULLY OPTIMISED
          </p>

          <Title className='text-3xl md:text-4xl lg:text-5xl font-light text-darkColor leading-tight wrap-break-word'>
            The Only Machine You Need
          </Title>

          <SubText className='text-base md:text-lg text-lightColor leading-relaxed max-w-3xl'>
            Precision engineered. Performance guaranteed. One optimized solution
            for all your extrusion needs.
          </SubText>
        </div>

        {/* Tabs Container */}
        <div className='bg-white border border-gray-200 rounded-[2rem] p-4 md:p-6 shadow-2xl'>
          {/* Tab Buttons */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {tabs.map((tab, index) => {
              const Icon = tab.icon

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`group rounded-2xl p-4 md:p-5 flex items-center gap-4 text-start transition-all duration-300 border
					
					${
            activeTab === index
              ? 'bg-blue-700 text-white border-blue-700 shadow-xl'
              : 'bg-gray-50 text-darkColor border-gray-200 hover:bg-blue-50 hover:border-blue-200'
          }
				`}
                >
                  {/* Icon */}
                  <div
                    className={`min-w-14 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
						
						${
              activeTab === index
                ? 'bg-white/15 text-white'
                : 'bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white'
            }
					`}
                  >
                    <Icon className='w-7 h-7' />
                  </div>

                  {/* Text */}
                  <div className='flex flex-col'>
                    <span className='text-sm md:text-base font-semibold leading-snug'>
                      {tab.tab}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Content */}
          <div className='relative overflow-hidden rounded-[2rem] bg-linear-to-br from-blue-700 via-blue-800 to-blue-950 p-8 md:p-12 min-h-80 flex items-center'>
            {/* Glow */}
            <div className='absolute top-0 right-0 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl' />

            <div className='relative z-10 max-w-4xl space-y-6'>
              <h3 className='text-3xl md:text-4xl font-semibold text-white leading-tight'>
                {tabs[activeTab].title}
              </h3>

              <p className='text-white/80 text-base md:text-lg leading-relaxed'>
                {tabs[activeTab].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
