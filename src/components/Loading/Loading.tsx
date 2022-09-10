import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-primary">
      <CgSpinner className="animate-spin text-white" size={75} />
    </div>
  )
}

export default Loading
