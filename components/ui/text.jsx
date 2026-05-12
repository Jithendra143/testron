import { cn } from '@/lib/utils'

const Title = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-3xl font-bold capitalize tracking-wide font-sans',
        className
      )}
    >
      {children}
    </h2>
  )
}

const SubTitle = ({ children, className }) => {
  return (
    <h3 className={cn('font-semibold text-gray-900 font-sans', className)}>
      {children}
    </h3>
  )
}

const SubText = ({ children, className }) => {
  return <p className={cn('text-gray-600 text-sm', className)}>{children}</p>
}

export { Title, SubTitle, SubText }
