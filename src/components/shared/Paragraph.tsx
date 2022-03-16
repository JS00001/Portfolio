import { HTMLAttributes } from 'react'

export type ParagraphProps = HTMLAttributes<HTMLDivElement> & {
  message: string
}

export const Paragraph: React.FC<ParagraphProps> = ({
  message,
  className = '',
  ...props
}) => {
  return (
    <p
      className={`mb-5 text-xl font-medium leading-relaxed ${className}`}
      {...props}
    >
      {message}
    </p>
  )
}
