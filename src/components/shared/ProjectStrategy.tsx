import { HTMLAttributes } from 'react'

export type ProjectStrategyProps = HTMLAttributes<HTMLDivElement> & {
  title: string
  description: string
}

export const ProjectStrategy: React.FC<ProjectStrategyProps> = ({
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <p className=" pb-3 text-4xl font-extrabold">{title}</p>
      <p className="text-xl font-medium leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  )
}
