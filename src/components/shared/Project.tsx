import Link from 'next/link'
import { HTMLAttributes } from 'react'

export type ProjectProps = HTMLAttributes<HTMLDivElement> & {
  image: string
  tag: string
  title: string
  url: string
  description: string
}

export const Project: React.FC<ProjectProps> = ({
  image,
  tag,
  url,
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <Link href={url}>
      <div
        className={`cursor-pointer rounded-lg p-8 hover:text-primary hover:shadow-md ${className} flex flex-col`}
        {...props}
      >
        <img
          src={image}
          className=" max-h-56 rounded-lg border border-gray-200"
        />
        <p className="pt-6 text-xs font-medium text-gray-500">{tag}</p>
        <p className="bg-3 text-2xl font-bold">{title}</p>
        <p className=" text-lg leading-relaxed text-gray-500">{description}</p>
      </div>
    </Link>
  )
}
