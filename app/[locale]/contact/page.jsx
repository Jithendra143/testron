'use client'
import ContactForm from '@/components/ContactForm';
import PageBanner from '@/components/PageBanner'
import SectionWrapper from '@/components/SectionWrapper';

import dynamic from 'next/dynamic'
import Image from 'next/image';

const WorldMapSection = dynamic(() => import('@/components/WorldMapSection'), {
  ssr: false
})

export default function ContactPage () {
  return (
    <>
      <PageBanner
        title='Contact us'
        image='/images/banner/contact-banner.png'
      />
      <WorldMapSection />
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Left Content */}
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-bold tracking-tight text-darkColor leading-tight'>
              Let&apos;s Talk!!!
            </h2>

            <p className='mt-6 text-base md:text-lg text-lightColor leading-relaxed max-w-xl'>
              Let&apos;s build a solution that works for your process. Reach out
              and our team will get back with a clear, practical approach.
            </p>

            <div className='mt-10'>
              <ContactForm />
            </div>
          </div>

          {/* Right Image */}
          <div className='relative'>
            <div className='relative overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]'>
              <Image
                src='/images/contact-image.png'
                alt='Contact Us'
                width={700}
                height={900}
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
