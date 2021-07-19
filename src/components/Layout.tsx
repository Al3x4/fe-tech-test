import { FC } from 'react'

import Sidebar from './Sidebar'

const Layout: FC = ({ children }) => (
  <>
    <Sidebar />
    <div className='relative md:ml-64'>
      <div className='w-full'>{children}</div>
    </div>
  </>
)

export default Layout
