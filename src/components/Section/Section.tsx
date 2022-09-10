const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`xl:px-30 mx-auto px-5 md:container md:px-10 lg:px-20 2xl:px-40 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Section
