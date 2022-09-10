import React from 'react'

export type HeaderComponent = React.FC<React.HTMLAttributes<HTMLDivElement>> & {
  Subject: React.FC
  Title: React.FC
  Subtitle: React.FC
}

export const Header: HeaderComponent = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

const Subject: React.FC = ({ children }) => {
  return <p className="text-lg font-medium text-gray-500">{children}</p>
}

const Title: React.FC = ({ children }) => {
  return <p className="py-3 text-6xl font-black">{children}</p>
}

const Subtitle: React.FC = ({ children }) => {
  return (
    <p className="text-xl font-medium leading-normal text-gray-500">
      {children}
    </p>
  )
}

Header.Subject = Subject
Header.Title = Title
Header.Subtitle = Subtitle
