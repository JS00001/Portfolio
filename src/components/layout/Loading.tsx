import { CgSpinner } from 'react-icons/cg'

export default function () {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary">
      <CgSpinner className="animate-spin text-white" size={75} />
    </div>
  )
}
