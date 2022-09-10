export const Paragraph: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <p
      className={`mb-5 text-xl font-medium leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  )
}
