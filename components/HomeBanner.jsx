'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const banners = [
  {
    id: 1,
    type: 'video',
    src: '/images/slider/Engineered-for-Smooth-Strong-Performance.mp4'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/slider/machinery-1.jpg'
  },
  {
    id: 3,
    type: 'image',
    src: '/images/slider/Slider-5.png'
  },
  {
    id: 4,
    type: 'image',
    src: '/images/slider/Slider-image.png'
  }
]

export default function HomeBanner () {
  return (
    <section className='relative w-full overflow-hidden'>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className='h-75 md:h-125 lg:h-162.5'
      >
        {banners.map(banner => (
          <SwiperSlide key={banner.id}>
            <div className='relative w-full h-full'>
              {banner.type === 'image' ? (
                <Image
                  src={banner.src}
                  alt={banner.id}
                  fill
                  priority
                  className='object-cover'
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-full h-full object-cover'
                >
                  <source src={banner.src} type='video/mp4' />
                </video>
              )}

              {/* <div className='absolute inset-0 bg-black/40' /> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
