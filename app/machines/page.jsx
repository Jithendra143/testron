import Image from 'next/image'
import PageBanner from '@/components/PageBanner'
import SectionWrapper from '@/components/SectionWrapper'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import { SubText, Title, SubTitle } from '@/components/ui/text'
import ContactForm from '@/components/ContactForm';

const machineAccordions = [
  {
    title: 'Application Areas',
    type: 'list',
    content: [
      'Color and Additive Masterbatch',
      'Polymer Compounding (Commodity and Bio)',
      'Engineering Plastics',
      'Filler & Mineral Compounds',
      'Reprocessing & Recycling',
      'Specialty Polymer Blends',
      'High-performance Materials',
      'Grafting',
      'Pultrusion (LFRTP)'
    ]
  },
  {
    title: 'Unified Technical Specifications (14 mm – 97 mm)',
    type: 'table',
    content: [
      ['Screw Diameter', '14 mm – 97 mm'],
      ['Screw Type', 'Co-rotating, modular segmented design'],
      ['L/D Ratio', '24:1 – 60:1 (customisable)'],
      ['Throughput', '0.5 kg/hr – 1200+ kg/hr'],
      ['Screw Speed', '50 – 1200 rpm (VFD-controlled)'],
      ['Main Motor Power', '1 HP – 500+ HP'],
      ['Gearbox', 'Heavy-duty, high-torque transmission & coupling system'],
      ['Heating Zones', '4 – 16 PID angular phase-controlled zones'],
      ['Max Processing Temperature', 'Up to 400°C'],
      ['Control System', 'PLC + HMI interface with recipe control'],
      ['Feeding Options', 'Gravimetric / Volumetric / Density Feeders'],
      [
        'Downstream Options',
        'Strand Pelletizer / Underwater Pelletizer / Die Face Cutter'
      ],
      [
        'Cooling System',
        'Water cooling / forced air system / Plate type heat exchanger'
      ],
      ['Electrical Supply', '380–440V, 3-Phase, 50/60Hz'],
      ['Warranty', '24 Months Standard']
    ]
  },
  {
    title: 'Key Engineering Advantages',
    type: 'list',
    content: [
      'Modular screw elements for customized mixing',
      'High-torque gearbox design for demanding compounds',
      'Optimized barrel metallurgy for wear resistance',
      'Low vibration and stable melt pressure',
      'Easy maintenance and quick screw replacement',
      'Designed for long operational life'
    ]
  },
  {
    title: 'Customization Capability',
    type: 'mixed',
    intro:
      'Every extrusion line is built based on the following process requirements:',
    content: [
      'Polymer additive combination',
      'Required output (kg/hr)',
      'Desired dispersion quality',
      'Energy optimization goals',
      'Automation level required',
      'Future scalability planning'
    ],
    footer:
      'We do not supply standard machines — we engineer solutions aligned with your process and performance expectations.'
  },
  {
    title: 'Support Beyond Installation',
    type: 'mixed',
    intro: 'To ensure long-term operational success, we provide:',
    content: [
      'On-site commissioning',
      'Operator & maintenance training',
      'Spare screw, shaft and barrel supply',
      'Annual Maintenance Contracts (AMC)',
      'Process optimization consultation'
    ]
  }
]

const strengths = [
  'In-house screw & barrel manufacture (accurate metallurgy & hard-facing)',
  'Heavy-duty gearboxes and shafts built for high torque life',
  'Custom screw geometries for dispersive mixing and devolatilization',
  'Integrated PLC controls, dosing & downstream options',
  'Training, commissioning and Annual Maintenance Contracts (AMC)'
]

export default function MachinesPage () {
  return (
    <>
      <PageBanner
        title='Machines'
        subTitle='Precision engineered machinery built for performance and reliability.'
        image='/images/banner/machinery.png'
      />

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-16'>
          {/* Header */}
          <div className='space-y-5 text-center max-w-5xl mx-auto'>
            <p className='text-sm md:text-base uppercase tracking-[0.18em] text-blue-700 font-semibold'>
              Our Machinery
            </p>

            <Title className='text-3xl md:text-5xl font-light text-darkColor leading-tight'>
              Twin Screw, Co-Rotating & Counter Rotating Extruders
            </Title>

            <SubText className='text-base md:text-xl text-lightColor leading-relaxed'>
              Available from Ø14 mm to Ø97 mm, engineered for precision polymer
              processing and scalable industrial production.
            </SubText>
          </div>

          {/* Machine Image */}
          <div className='flex justify-center'>
            <div className='relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl max-w-6xl w-full p-4 md:p-8'>
              <Image
                src='/images/machines/machine-1.png'
                alt='Twin Screw Extruder'
                width={1400}
                height={700}
                priority
                className='w-full h-auto max-h-62.5 md:max-h-112.5 object-contain mx-auto'
              />
            </div>
          </div>

          {/* Description */}
          <div className='space-y-6 text-center max-w-5xl mx-auto'>
            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              At Testron Engineering, we manufacture co-rotating Twin-Screw
              Extruders ranging from Ø14 mm to Ø97 mm (capable up to Ø150 mm L/D
              60), designed to support everything from R&D trials to full-scale
              industrial production.
            </SubText>

            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              Built at our manufacturing facility in Bangalore, India, each
              machine is engineered with precision screw profiles, heavy-duty
              gearboxes, and modular barrel systems — ensuring superior mixing,
              high torque stability, and long operational life.
            </SubText>

            <SubText className='text-base md:text-lg text-lightColor leading-relaxed'>
              Whether you are developing a new formulation or running continuous
              masterbatch production, our extruders deliver consistent output,
              optimized energy usage, and exceptional process flexibility.
            </SubText>
          </div>

          {/* Key Strengths */}
          <div className='space-y-8 text-center'>
            <SubTitle className='text-2xl md:text-3xl text-darkColor font-medium'>
              Key Strengths
            </SubTitle>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-start max-w-5xl mx-auto'>
              {strengths.map((item, index) => (
                <div
                  key={index}
                  className='group flex items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-lg'
                >
                  <div className='mt-1 w-3 h-3 rounded-full bg-blue-700 shrink-0 group-hover:scale-125 transition-transform duration-300' />

                  <p className='text-darkColor font-medium leading-relaxed text-sm md:text-base'>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion */}
          {/* Accordion Section */}
          <div className='space-y-6'>
            <div className='text-center space-y-3'>
              <SubTitle className='text-2xl md:text-3xl text-darkColor font-medium'>
                Machine Features
              </SubTitle>

              <SubText className='text-lightColor text-base md:text-lg'>
                Designed for efficiency, reliability, and industrial-grade
                performance.
              </SubText>
            </div>

            {/* Accordions */}
            <Accordion type='single' collapsible className='w-full space-y-4'>
              {machineAccordions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className='overflow-hidden border-0 rounded-none bg-[#eef3ee]'
                >
                  <AccordionTrigger className='px-6 md:px-8 py-5 text-start hover:no-underline group'>
                    <span className='text-lg md:text-2xl font-light text-darkColor'>
                      {item.title}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className='px-6 md:px-8 pb-8 pt-2 bg-white'>
                    {/* LIST TYPE */}
                    {item.type === 'list' && (
                      <ul className='space-y-4'>
                        {item.content.map((listItem, idx) => (
                          <li
                            key={idx}
                            className='flex items-start gap-3 text-lightColor text-base md:text-lg leading-relaxed'
                          >
                            <div className='w-2.5 h-2.5 rounded-full bg-blue-700 mt-2 shrink-0' />

                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* TABLE TYPE */}
                    {item.type === 'table' && (
                      <div className='overflow-x-auto rounded-2xl border border-gray-200'>
                        <table className='w-full border-collapse'>
                          <thead>
                            <tr className='bg-blue-700 text-white'>
                              <th className='text-left px-5 py-4 font-semibold text-sm md:text-base'>
                                Parameter
                              </th>

                              <th className='text-left px-5 py-4 font-semibold text-sm md:text-base'>
                                Specification Range
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {item.content.map((row, idx) => (
                              <tr
                                key={idx}
                                className='border-b border-gray-200 even:bg-gray-50'
                              >
                                <td className='px-5 py-4 font-medium text-darkColor text-sm md:text-base'>
                                  {row[0]}
                                </td>

                                <td className='px-5 py-4 text-lightColor text-sm md:text-base leading-relaxed'>
                                  {row[1]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* MIXED TYPE */}
                    {item.type === 'mixed' && (
                      <div className='space-y-6'>
                        {item.intro && (
                          <p className='text-lightColor text-base md:text-lg leading-relaxed'>
                            {item.intro}
                          </p>
                        )}

                        <ul className='space-y-4'>
                          {item.content.map((listItem, idx) => (
                            <li
                              key={idx}
                              className='flex items-start gap-3 text-lightColor text-base md:text-lg leading-relaxed'
                            >
                              <div className='w-2.5 h-2.5 rounded-full bg-blue-700 mt-2 shrink-0' />

                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>

                        {item.footer && (
                          <p className='text-darkColor text-base md:text-lg leading-relaxed font-medium'>
                            {item.footer}
                          </p>
                        )}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA Text */}
          <div className='relative overflow-hidden rounded-[2rem] bg-linear-to-r from-blue-700 to-blue-900 px-6 py-14 md:px-12 md:py-16 text-center'>
            <div className='absolute top-0 left-0 w-60 h-60 bg-white/5 rounded-full blur-3xl' />
            <div className='absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl' />

            <div className='relative z-10 space-y-5 max-w-4xl mx-auto'>
              <SubTitle className='text-2xl md:text-4xl text-white font-medium leading-tight'>
                Engineered for Precision. Built for Performance. Scaled for
                Growth.
              </SubTitle>

              <SubText className='text-base md:text-lg text-white/85 leading-relaxed'>
                Our Ø14–Ø97 mm Twin-Screw Extruder Series represents a complete,
                scalable solution for modern polymer processing industries
                across India, UAE, GCC, and global markets.
              </SubText>
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
