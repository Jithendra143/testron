import SectionWrapper from '@/components/SectionWrapper'
import { SubText, SubTitle, Title } from '@/components/ui/text'
import Image from 'next/image'
import { Check } from 'lucide-react'
import ContactForm from '@/components/ContactForm';

export default function ServicesPage () {
  return (
    <>
      {/* HERO SECTION */}
      <SectionWrapper className='relative overflow-hidden bg-[#f4f8ff]'>
        {/* Background Effects */}
        <div className='absolute top-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl' />
        <div className='absolute bottom-0 right-0 w-120 h-120 bg-cyan-200/40 rounded-full blur-3xl' />

        <div className='relative z-10 min-h-[50vh] flex flex-col items-center justify-center text-center gap-8 max-w-5xl mx-auto py-10'>
          {/* Small Label */}
          <p className='text-sm md:text-base uppercase tracking-[0.2em] text-blue-700 font-semibold'>
            Technical Excellence
          </p>

          {/* Title */}
          <Title className='text-3xl md:text-5xl lg:text-[3.2rem] font-light text-darkColor leading-tight'>
            Advanced Technical Services & Process Support
          </Title>

          {/* Content */}
          <div className='space-y-5 max-w-4xl'>
            <SubText className='text-base md:text-xl text-lightColor leading-relaxed'>
              Complete Technical Support. Maximum Performance. Zero Compromise.
            </SubText>

            <SubText className='text-base md:text-xl text-lightColor leading-relaxed'>
              At Testron Engineering, we deliver high-impact technical services
              designed to maximize machine output, extend equipment life, and
              ensure uninterrupted production.
            </SubText>

            <SubText className='text-base md:text-xl text-lightColor leading-relaxed'>
              We position ourselves not just as suppliers — but as long-term
              performance partners.
            </SubText>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 1 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1'>
              <Title className='leading-tight'>
                Advanced Training Programs
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                We equip your team with the technical expertise required to
                efficiently operate, optimize, and maintain high-performance
                extrusion systems with confidence and precision.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Coverage Includes</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Machine parameter control and optimization',
                    'Screw configuration and mixing dynamics',
                    'High-filler and specialty compound handling',
                    'Preventive maintenance best practices',
                    'Troubleshooting and root cause identification',
                    'Safety and compliance procedures'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                  Result: Reduced rejection rates, improved output stability,
                  and highly confident operators.
                </SubText>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-2 order-2'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-1.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Image */}
            <div className='lg:col-span-2 order-2 lg:order-1'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-2.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>

            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1 lg:order-2'>
              <Title className='leading-tight'>
                High-Performance Product Consultation
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                For industries developing advanced masterbatches, speciality
                compounds, or engineering plastics, we provide expert technical
                guidance.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Our Consultation Focus</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Formulation development',
                    'Custom screw geometry selection',
                    'Material and additive optimization',
                    'Torque & output enhancement strategies',
                    'Energy efficiency improvements',
                    'Process stabilization for consistent dispersion & distribution',
                    'We help you achieve superior product performance while maintaining cost and efficiency'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1'>
              <Title className='leading-tight'>Rapid Breakdown Support</Title>

              <div className='mt-8'>
                <div className='flex flex-col gap-2'>
                  {[
                    'Downtime costs money. We act fast.',
                    'Immediate remote technical assistance',
                    'On-site intervention when required',
                    'Fast spare dispatch',
                    'Failure analysis and corrective strategy'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                  Result: Restore production quickly and prevent recurrence.
                </SubText>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-2 order-2'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-3.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Image */}
            <div className='lg:col-span-2 order-2 lg:order-1'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-4.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>

            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1 lg:order-2'>
              <Title className='leading-tight'>
                Repairs & Component Refurbishment
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                We restore performance and extend equipment life through
                precision repairs.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Services Include</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Screw reconditioning and hard-facing',
                    'Barrel relining',
                    'Gearbox overhaul',
                    'Heater & electrical panel servicing',
                    'Alignment correction & mechanical recalibration',
                    'This ensures optimal functionality without unnecessary capital replacement.',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 5 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1'>
              <Title className='leading-tight'>
                Annual Maintenance Contracts (AMC)
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                Preventive maintenance reduces unplanned failures and stabilizes long-term performance.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Our AMC Program Covers</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Scheduled inspections',
                    'Wear component monitoring',
                    'Gearbox lubrication & torque verification',
                    'Temperature system calibration',
                    'Performance reporting & analysis',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                  Result: Predictable maintenance planning and improved operational reliability.
                </SubText>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-2 order-2'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-5.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 6 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Image */}
            <div className='lg:col-span-2 order-2 lg:order-1'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-5.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>

            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1 lg:order-2'>
              <Title className='leading-tight'>
                Machine Inspection & Performance Audit
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                We conduct technical audits to unlock hidden performance potential.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Audit Deliverables</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Efficiency gap analysis',
                    'Energy consumption review',
                    'Output vs. capacity assessment',
                    'Upgrade recommendations',
                    'ROI-based improvement roadmap',
                    'Our inspection services are designed to convert underperforming systems into high-efficiency production assets.',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1'>
              <Title className='leading-tight'>Machine Enhancement & Output Upgrades</Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                When production demands increase, we upgrade your existing machinery for higher output and better consistency.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>Enhancement Solutions</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'High-torque gearbox upgrades',
                    'Advanced screw profile redesign',
                    'PLC & automation modernization',
                    'Feeding system enhancements',
                    'Melt pump integration',
                    'Additional heating zones'
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                  Result: Higher throughput, improved dispersion quality, and better process control.
                </SubText>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-2 order-2'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-7.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 8 */}
      <SectionWrapper contentClassName='max-w-7xl'>
        <div className='relative overflow-hidden rounded-[2rem] border border-gray-100 bg-linear-to-br from-white via-blue-50/40 to-white px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 shadow-[0_12px_40px_rgba(0,0,0,0.05)]'>
          {/* Background Glow */}
          <div className='absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl pointer-events-none' />
          <div className='absolute bottom-0 left-0 h-60 w-60 rounded-full bg-indigo-200/20 blur-3xl pointer-events-none' />

          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center'>
            {/* Image */}
            <div className='lg:col-span-2 order-2 lg:order-1'>
              <div className='relative overflow-hidden rounded-[2rem] shadow-2xl group'>
                <div className='absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent z-10' />

                <Image
                  src='/images/services/service-8.png'
                  alt='Advanced Training Programs'
                  width={700}
                  height={900}
                  className='h-full w-full object-cover min-h-87.5 lg:min-h-125 transition-transform duration-700 group-hover:scale-105'
                />
              </div>
            </div>

            {/* Content */}
            <div className='lg:col-span-3 text-center lg:text-left order-1 lg:order-2'>
              <Title className='leading-tight'>
                Manpower Consultation
              </Title>

              <SubText className='mt-5 text-base md:text-lg text-lightColor leading-relaxed max-w-2xl'>
                Strong machines require skilled operators.
              </SubText>

              <div className='mt-8'>
                <SubTitle className='mb-5'>We assist with</SubTitle>

                <div className='flex flex-col gap-2'>
                  {[
                    'Skilled extrusion operator sourcing',
                    'Process engineering consultation',
                    'Technical staffing advisory',
                    'Short-term deployment of experienced personnel',
                    'We ensure your production team matches your technical capability.',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start gap-3 rounded-xl border border-gray-100 bg-white/70 px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300'
                    >
                      <div className='mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-semibold'>
                        ✓
                      </div>

                      <p className='text-sm md:text-base text-darkColor font-medium leading-relaxed'>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

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
