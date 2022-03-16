import { HTMLAttributes } from 'react'

export type SectionProps = HTMLAttributes<HTMLDivElement>

export const Section: React.FC<SectionProps> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`xl:px-30 mx-auto min-w-fit px-5 md:container md:px-10 lg:px-20 2xl:px-80 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
