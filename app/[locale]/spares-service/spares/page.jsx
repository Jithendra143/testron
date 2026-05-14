import ContactForm from '@/components/ContactForm';
import SectionWrapper from '@/components/SectionWrapper'
import { SubText, SubTitle, Title } from '@/components/ui/text'
import Image from 'next/image'

export default function SparesPage () {
  return (
    <>
      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Twin-Screw Elements (014 mm –097 mm)
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'Modular segmented design (conveying, kneading, mixing, reverse, barrier elements)',
                  'Optimized flight geometry for superior dispersion',
                  'Wear-resistant metallurgy with nitriding / hard-facing options',
                  'Balanced for high RPM stability',
                  'Designed for high filler and mineral-loaded compounds'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-1.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>

          {/* Datasheet Section */}
          <div className='rounded-[2rem] border border-gray-200 overflow-hidden shadow-xl'>
            {/* Header */}
            <div className='bg-linear-to-r from-blue-700 to-blue-900 px-6 md:px-10 py-6'>
              <SubTitle className='text-white text-2xl md:text-3xl font-medium'>
                Technical Datasheet
              </SubTitle>
            </div>

            {/* Table */}
            <div className='overflow-x-auto bg-white'>
              <table className='w-full min-w-175 border-collapse'>
                <tbody>
                  {[
                    ['Diameter Range', '014 mm – 097 mm'],
                    [
                      'Material',
                      'Wear resistance element = CR12 MOV/ D2/ D3/ M2/M34/ A11 Corossion resistance = Dufelx, Encolin, 316,700 grades Corossion & wear resistance = 1742CH , 52-58HRC'
                    ],
                    [
                      'Surface Treatment',
                      'Gas Nitrided (EN41B) / Tungsten Carbide Coating'
                    ],
                    ['Hardness', '55–62 HRC (core), surface up to 900–1100 HV'],
                    ['L/D Compatibility', '24:1 – 60:1 systems'],
                    ['Max RPM', 'Up to 1200 rpm (size dependent)'],
                    [
                      'Torque Compatibility',
                      'High torque & coupling configurations available'
                    ],
                    [
                      'Application',
                      'Masterbatch, Compounding, Recycling, Engineering Plastics, Grafting'
                    ]
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className='border-b border-gray-100 hover:bg-blue-50 transition-colors'
                    >
                      <td className='px-6 md:px-10 py-5 font-semibold text-darkColor bg-gray-50 w-[35%]'>
                        {row[0]}
                      </td>

                      <td className='px-6 md:px-10 py-5 text-lightColor'>
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Barrel & Barrel Liners
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'Replaceable liner design reduces maintenance cost',
                  'Superior wear resistance for abrasive compounds',
                  'Precision machining for accurate screw-barrel clearance',
                  'Enhanced thermal control zones'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-2.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>

          {/* Datasheet Section */}
          <div className='rounded-[2rem] border border-gray-200 overflow-hidden shadow-xl'>
            {/* Header */}
            <div className='bg-linear-to-r from-blue-700 to-blue-900 px-6 md:px-10 py-6'>
              <SubTitle className='text-white text-2xl md:text-3xl font-medium'>
                Technical Datasheet
              </SubTitle>
            </div>

            {/* Table */}
            <div className='overflow-x-auto bg-white'>
              <table className='w-full min-w-175 border-collapse'>
                <tbody>
                  {[
                    ['Diameter Compatibility', '014 mm – 097 mm'],
                    ['Material', 'Alloy & Tool Steel (Corrosion & Wear)'],
                    ['Inner Surface', 'Nitrided / Bimetallic liner option'],
                    ['Hardness', '55–65 HRC surface'],
                    [
                      'Heating Compatibility',
                      'HD Cartridge / Cast-in heaters / Band'
                    ],
                    ['Cooling', 'Water & air channel integrated'],
                    ['Max Operating Temp', 'Up to 400°C']
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className='border-b border-gray-100 hover:bg-blue-50 transition-colors'
                    >
                      <td className='px-6 md:px-10 py-5 font-semibold text-darkColor bg-gray-50 w-[35%]'>
                        {row[0]}
                      </td>

                      <td className='px-6 md:px-10 py-5 text-lightColor'>
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Heavy-Duty Extruder Gearbox
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'High torque transmission design',
                  'Hardened & ground grind helical gears',
                  'Long operational life under continuous load',
                  'Low vibration & optimized lubrication system',
                  'Custom torque rating based on extrusion load',
                  'Coupling (Sandwich)'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-3.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>

          {/* Datasheet Section */}
          <div className='rounded-[2rem] border border-gray-200 overflow-hidden shadow-xl'>
            {/* Header */}
            <div className='bg-linear-to-r from-blue-700 to-blue-900 px-6 md:px-10 py-6'>
              <SubTitle className='text-white text-2xl md:text-3xl font-medium'>
                Technical Datasheet
              </SubTitle>
            </div>

            {/* Table */}
            <div className='overflow-x-auto bg-white'>
              <table className='w-full min-w-175 border-collapse'>
                <tbody>
                  {[
                    ['Torque Range', 'Custom-built per application'],
                    [
                      'Gear Type',
                      'Helical / Hardened and Ground grinding Finish'
                    ],
                    [
                      'Gear Material',
                      'Alloy Steel (Case Hardened & through hardened) , 20MNCR5 & EN353'
                    ],
                    ['Lubrication', 'Oil bath / Forced spray system'],
                    [
                      'Efficiency',
                      'Max mechanical efficiency (lower specific energy target between 0.2 – 0.3)'
                    ],
                    [
                      'Cooling Option',
                      'Water/ Oil/ Forced-air coolers/ Plate-type heat exchangers are available'
                    ]
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className='border-b border-gray-100 hover:bg-blue-50 transition-colors'
                    >
                      <td className='px-6 md:px-10 py-5 font-semibold text-darkColor bg-gray-50 w-[35%]'>
                        {row[0]}
                      </td>

                      <td className='px-6 md:px-10 py-5 text-lightColor'>
                        {row[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Dies & Die Heads (Strand / Profile)
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'Strand dies (MOC alloy steel), underwater pelletizer (MOC M34)',
                  'Die face head & cutter (MOC M2)',
                  'Optimized melt flow channel design',
                  'Uniform pressure distribution',
                  'Reduced melt stagnation zones',
                  'Custom die geometry as per product'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-4.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Melt Pumps & Auto-filtration Systems
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'Stable melt pressure control',
                  'Improved output consistency',
                  'Reduced pulsation',
                  'Extended die life',
                  'Replaceable screen packs',
                  'Increase gear box life'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-5.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className='bg-white' contentClassName='max-w-7xl'>
        <div className='flex flex-col gap-14'>
          {/* Top Section */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='space-y-6 text-center lg:text-start'>
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-darkColor leading-tight'>
                Heating & Temperature Control Components
              </Title>

              {/* Highlights */}
              <div className='grid grid-cols-1 gap-2 pt-4'>
                {[
                  'Fast response heating',
                  'Energy-efficient insulation',
                  'Uniform temperature control',
                  'Sensor type – Universal & Angle type phase controllers'
                ].map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4'
                  >
                    <div className='w-3 h-3 rounded-full bg-blue-700 shrink-0' />

                    <p className='text-darkColor font-medium text-sm md:text-base'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className='flex justify-center'>
              <div className='relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 shadow-xl p-6 md:p-8'>
                <Image
                  src='/images/spares/spare-6.png'
                  alt='Spare Parts'
                  width={900}
                  height={700}
                  className='w-full max-h-112.5 object-contain mx-auto hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className='relative overflow-hidden'
        contentClassName='max-w-7xl'
      >
        {/* Abstract Background */}
        <div className='relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-blue-900 via-blue-800 to-cyan-900 px-6 py-14 md:px-12 md:py-20'>
          {/* Glow Shapes */}
          <div className='absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl' />
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl' />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 border border-white/5 rounded-full' />

          {/* Main Grid */}
          <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
            {/* Left Content */}
            <div className='max-w-3xl'>
              {/* Title */}
              <Title className='text-3xl md:text-4xl lg:text-[2.8rem] font-light text-white leading-tight mb-8'>
                Why Choose Testron Spares?
              </Title>

              {/* List */}
              <div className='grid grid-cols-1 gap-4 md:gap-5'>
                {[
                  'Manufactured in-house for precise fitment',
                  'High wear resistance for abrasive compounds',
                  'Custom-built for your exact screw configuration',
                  'Faster delivery & reduced downtime',
                  'Performance-focused metallurgy',
                  'Technical support & AMC availability'
                ].map((item, index) => (
                  <div key={index} className='flex items-start gap-4 px-1 py-1'>
                    {/* Dot */}
                    <div className='mt-2 w-2.5 h-2.5 rounded-full bg-cyan-300 shrink-0' />

                    {/* Text */}
                    <p className='text-white/90 text-sm md:text-base leading-relaxed'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className='mt-10 inline-flex items-center justify-center rounded-full bg-white text-blue-800 px-8 py-4 text-sm md:text-base font-semibold shadow-xl hover:bg-cyan-50 hover:-translate-y-1 transition-all duration-300'>
                Get Started Now
              </button>
            </div>

            {/* Right Image */}
            <div className='relative flex justify-center lg:justify-end'>
              {/* Glow Behind Image */}
              <div className='absolute w-87.5 h-87.5 bg-cyan-400/20 rounded-full blur-3xl' />

              {/* Image Card */}
              <div className='relative  border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl'>
                <Image
                  src='/images/why-choose.png'
                  alt='Why choose'
                  width={900}
                  height={700}
                  className='w-full max-w-125 object-contain drop-shadow-2xl'
                />
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
