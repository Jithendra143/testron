import Image from 'next/image'
import Link from 'next/link'

export default function Logo () {
  return (
    <Link href='/'>
      <Image
        src='/logo-1.png'
        alt='Logo'
        width={60}
        height={60}
        className='w-auto h-auto'
        priority
      />
    </Link>
  )
}
