import ClientLogoSlider from '@/components/ClientLogoSlider'
import ContactForm from '@/components/ContactForm';
import OptimizedSolutionsSection from '@/components/OptimizedSolutionsSection'
import PageBanner from '@/components/PageBanner'
import SectionWrapper from '@/components/SectionWrapper'
import { SubText, SubTitle, Title } from '@/components/ui/text'

import { ShieldCheck, Lightbulb, BadgeCheck } from 'lucide-react'

const tileContent = [
  {
    icon: ShieldCheck,
    title: 'Responsibility',
    subTitle: 'We are serious people'
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    subTitle: 'We are passionate'
  },
  {
    icon: BadgeCheck,
    title: 'Quality',
    subTitle: 'We are determined'
  }
]

export default function AboutPage () {
  return (
    <>
      <PageBanner
        title='About Us'
        subTitle='Engineering excellence built on innovation and precision.'
        image='/images/banner/about-banner.jpg'
      />

      {/* Section 1 */}
      <SectionWrapper className='bg-blue-100' contentClassName='max-w-7xl'>
        <div className='min-h-[50vh] grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='lg:col-span-2 flex flex-col gap-5 text-center lg:text-start lg:border-s-4 lg:border-blue-700 lg:ps-6'>
            <p className='text-sm md:text-base uppercase tracking-[0.18em] text-blue-700 font-semibold'>
              WELCOME TO TESTRON ENGINEERING
            </p>

            <Title className='max-w-xl text-3xl md:text-3xl lg:text-4xl font-light text-darkColor leading-tight'>
              Testron is the perfect choice for your business machine needs.
            </Title>
          </div>

          {/* Right Content */}
          <div className='lg:col-span-3 space-y-6 text-center lg:text-start max-w-3xl'>
            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              <strong>Testron Engineering</strong> is a dynamic{' '}
              <strong>Plastic Processing & Polymer Solutions</strong> company
              built on strong engineering foundations and real industry
              experience. From our manufacturing base in{' '}
              <strong>Bangalore, India</strong>, we have successfully designed,
              built, and installed machinery for <strong>50+ industries</strong>
              , helping manufacturers enhance productivity, precision, and
              profitability.
            </SubText>

            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              Today, we are expanding our strong engineering footprint into the{' '}
              <strong>Global Market</strong>, bringing world-class machinery,
              customized polymer solutions, and expert consultation tailored to
              regional industry needs.
            </SubText>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2 */}
      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='min-h-[50vh] grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='lg:col-span-3 space-y-6 text-center lg:text-start max-w-3xl order-2 lg:order-1'>
            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              We aim to transform complex processing requirements into robust,
              high-performance solutions that deliver consistency, efficiency,
              and reliability at scale. Our focus is not just on building
              machines, but on enabling industries to operate with confidence
              through precision, durability, and intelligent design.
            </SubText>

            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              Every project we undertake is aligned with one goal — to create
              solutions that perform seamlessly in real manufacturing
              environments and stand the test of continuous industrial
              operation.
            </SubText>
          </div>

          {/* Right Content */}
          <div className='lg:col-span-2 flex flex-col gap-5 text-center lg:text-start lg:border-s-4 lg:border-blue-700 lg:ps-6 order-1 lg:order-2'>
            <p className='text-sm md:text-base uppercase tracking-[0.18em] text-blue-700 font-semibold'>
              OUR AIM
            </p>

            <Title className='max-w-xl text-3xl md:text-3xl lg:text-4xl font-light text-darkColor leading-tight'>
              To be the engineering force behind our clients’ production
              excellence.
            </Title>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper
        className='relative overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-blue-800'
        contentClassName='max-w-7xl'
      >
        {/* Background Shapes */}
        <div className='absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-white/5 rounded-full blur-3xl' />

        {/* Tiles */}
        <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {tileContent.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className='group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 md:p-10 flex flex-col items-center text-center gap-6 transition-all duration-500 hover:-translate-y-3 hover:bg-white/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]'
              >
                {/* Hover Glow */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/10 via-transparent to-cyan-300/10' />

                {/* Number */}
                <div className='absolute top-5 right-6 text-6xl font-bold text-white/5'>
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className='relative z-10 w-20 h-20 rounded-2xl bg-white/10 border border-white/10 text-white flex items-center justify-center transition-all duration-500 group-hover:bg-cyan-400 group-hover:text-blue-950 group-hover:scale-110'>
                  <Icon className='w-9 h-9' />
                </div>

                {/* Content */}
                <div className='relative z-10 space-y-3'>
                  <h3 className='text-2xl md:text-3xl font-semibold text-white'>
                    {item.title}
                  </h3>

                  <p className='text-white/75 text-base md:text-lg leading-relaxed'>
                    {item.subTitle}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </SectionWrapper>
      <OptimizedSolutionsSection />

      <SectionWrapper
        className='relative overflow-hidden py-20 md:py-32 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: "url('/images/banner/cta-bg.jpg')"
        }}
        contentClassName='max-w-7xl'
      >
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/45' />

        {/* Content Box */}
        <div className='relative z-10 border-2 border-white/90 px-6 py-16 md:px-12 md:py-24 flex flex-col items-center justify-center text-center gap-6'>
          {/* Main Title */}
          <Title className='text-4xl md:text-6xl font-light text-white leading-tight'>
            We’re Here To Help Your Business
          </Title>

          {/* Subtitle */}
          <SubTitle className='text-lg md:text-2xl text-white/90 font-light leading-relaxed'>
            Through Creativity, Integrity & Innovation
          </SubTitle>

          {/* CTA Button */}
          <button className='mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-10 py-4 rounded-sm text-base md:text-lg font-semibold tracking-wide shadow-xl transition-all duration-300 hover:-translate-y-1'>
            Let’s get started
          </button>
        </div>
      </SectionWrapper>

      {/* Client Slider */}
      <ClientLogoSlider />

      <SectionWrapper className="bg-blue-100">
				<div className="mx-auto flex min-h-[50vh] max-w-5xl flex-col items-center justify-center gap-6 text-center">
					<div className="space-y-4">
						<Title className="text-3xl font-light leading-tight text-darkColor md:text-5xl">
							Let&apos;s Talk!!!
						</Title>

						<p className="mx-auto max-w-2xl text-base leading-relaxed text-lightColor md:text-lg">
							Let&apos;s build a solution that works for your process. Reach out
							and our team will get back with a clear, practical approach.
						</p>
					</div>

					<div className="mt-6 w-full rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10">
						<ContactForm />
					</div>
				</div>
			</SectionWrapper>
    </>
  )
}
