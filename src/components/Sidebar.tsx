import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar: FC = () => {
  const [collapseShow, setCollapseShow] = useState(false)
  const [routes] = useState([
    {
      path: '/',
      component: 'Overview',
      icon: 'fa-tv',
    },
    {
      path: '/content',
      component: 'Content',
      icon: 'fa-video',
    },
  ])
  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 md:px-0 '>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Toggler */}
          <button
            className='w-12 h-12 cursor-pointer  text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow(!collapseShow)}
          >
            {collapseShow ? (
              <i className='fas fa-times'></i>
            ) : (
              <i className='fas fa-hamburger'></i>
            )}
          </button>
          {/* Brand */}
          <NavLink
            className='md:block text-left md:py-3 md:px-6  text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            to='/'
          >
            FE Tech Test
          </NavLink>

          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow-sm absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded 
              ${collapseShow ? 'bg-white mt-16 mx-3 py-3 px-7' : 'hidden'}`}
          >
            {/* Navigation */}
            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
              {routes.map((r) => (
                <li className='items-center'>
                  <NavLink
                    className='text-xs uppercase py-3 px-6 font-bold block text-blueGray-600 transition duration-200 ease-in-out transform  hover:text-blueGray-900 hover:bg-indigo-100'
                    activeClassName='bg-indigo-100'
                    exact
                    to={r.path}
                  >
                    <i className={`fas ${r.icon} opacity-75 mr-2 text-sm`}></i>{' '}
                    {r.component}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
