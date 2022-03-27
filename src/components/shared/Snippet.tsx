import Link from 'next/link'
import { RiReactjsFill } from 'react-icons/ri'

export const Snippet: React.FC = () => {
  return (
    <Link href="test">
      <div className="cursor-pointer rounded-md border border-gray-200 p-4 transition delay-150 ease-in-out hover:scale-105 hover:bg-gray-50">
        <div className="mb-3 max-w-min rounded-full bg-blue-600 p-1.5">
          <RiReactjsFill className="text-white" size={30} />
        </div>
        <p className="text-lg font-bold">Buttondown</p>
        <p className="font-medium text-gray-500">Get all subscribers.</p>
      </div>
    </Link>
  )
}
