import { FC } from 'react'

const Skeleton: FC = () => {
  // this needs workl
  return (
    <div className='bg-gray-100 w-full h-screen p-8 flex flex-wrap'>
      <div className='translate-3d-none-after w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300'></div>
      <div className='translate-3d-none-after w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300'></div>
      <div className='translate-3d-none-after w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300'></div>
      <div className='translate-3d-none-after w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300'></div>
    </div>
  )
}

export default Skeleton
