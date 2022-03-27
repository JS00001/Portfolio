import React from 'react'
import Link from 'next/link'
import Content from '../../content'
import { Button } from '../shared/Button'
import { RiMenuFill } from 'react-icons/ri'

const NavItem: React.FC<React.HTMLProps<HTMLAnchorElement>> = (props) => {
  return (
    <a className="font-semibold text-gray-600 hover:text-gray-400 " {...props}>
      {props.children}
    </a>
  )
}

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  const toggleNav = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className="w-full border-b border-gray-100 py-4">
        <div className="mx-auto px-5 md:container lg:px-40">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <p className="hover:cursor-pointer">
                  <span className="text-lg font-bold">Jack</span>
                  <span className="text-lg font-bold text-blue-700">
                    Senyitko
                  </span>
                </p>
              </Link>
            </div>

            <div className="hidden space-x-8 md:flex">
              {Content.Navigation.items.map((item) => (
                <NavItem href={item.link}>{item.text}</NavItem>
              ))}
            </div>

            <div className="hidden md:flex">
              <Link href="/contact">
                <Button size="small">Contact</Button>
              </Link>
            </div>

            <div className="md:hidden">
              <RiMenuFill
                size={26}
                onClick={toggleNav}
                className="text-gray-600 hover:cursor-pointer hover:text-gray-400"
              />
            </div>
          </div>

          {open && (
            <div className="flex animate-fade-in-down flex-col space-y-8 p-8">
              {Content.Navigation.items.map((item) => (
                <NavItem href={item.link}>{item.text}</NavItem>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBar
