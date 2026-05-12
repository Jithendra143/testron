import Container from './Container'
import { cn } from '@/lib/utils'

export default function SectionWrapper ({
  children,
  className,
  containerClassName,
  contentClassName,
  style
}) {
  return (
    <section
      style={style}
      className={cn('w-full py-10 md:py-16 overflow-hidden', className)}
    >
      <Container className={containerClassName}>
        <div className={cn('max-w-5xl mx-auto', contentClassName)}>
          {children}
        </div>
      </Container>
    </section>
  )
}
