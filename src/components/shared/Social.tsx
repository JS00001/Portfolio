export type SocialProps = React.HTMLAttributes<HTMLAnchorElement> & {
  link: string
  icon: React.ReactNode
  text: string
}

export const Social: React.FC<SocialProps> = ({
  link,
  icon,
  text,
  className = '',
  ...props
}) => {
  return (
    <a
      href={link}
      className={`my-5 flex w-min rounded-md p-1 text-lg font-medium hover:bg-gray-100 hover:text-primary ${className}`}
      {...props}
    >
      <span className="mr-5 text-primary">{icon}</span>
      {text}
    </a>
  )
}
