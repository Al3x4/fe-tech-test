import { FC } from 'react'

const Skeleton: FC = () => {
  // this needs workl
  return (
    <div className='bg-gray-100 w-full h-screen p-8 flex flex-wrap'>
      <div className='w-full h-56 animate-pulse mb-4 bg-blueGray-300'></div>
      <div className='w-full h-56 animate-pulse mb-4 bg-blueGray-300'></div>
      <div className='w-full h-56 animate-pulse mb-4 bg-blueGray-300'></div>
      <div className='w-full h-56 animate-pulse mb-4 bg-blueGray-300'></div>
    </div>
  )
}

export default Skeleton
