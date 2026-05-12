import Container from './Container'
import HeaderMenu from './HeaderMenu';
import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header () {
  return (
    <header className='sticky top-0 z-50 bg-white/70 backdrop-blur-md p-4 sm shadow'>
      <Container className="flex items-center justify-between text-lightColor">
        <div className='w-auto md:w-1/3 flex items-center gap-2.5 md:gap-0'>
            <Logo />
        </div>
        <div className='flex items-center justify-between gap-5'>
            <HeaderMenu />
            <LanguageSwitcher />
            <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
