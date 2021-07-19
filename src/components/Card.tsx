import { FC } from 'react'
import { DatumI } from 'models/types'
import Donut from 'components/charts/Donut'
import { ChartData } from 'chart.js/auto'

type Props = {
  data: DatumI
  extra?: any[]
  handleClick: React.Dispatch<
    React.SetStateAction<{
      visible: boolean
      data: DatumI
    }>
  >
}

const Card: FC<Props> = ({ data, handleClick }) => {
  const { description, name, prevTotalViews, totalViews, videoImage } = data

  // get year and duration from description
  const yearAndDurationWithPara = description.match(/\(([^)]+)\)/g)
  const yearAndDuration: any[] = []
  if (yearAndDurationWithPara) {
    yearAndDuration.push(
      yearAndDurationWithPara[0].slice(1, yearAndDurationWithPara[0].length - 1)
    )
    yearAndDuration.push(
      yearAndDurationWithPara[1].slice(1, yearAndDurationWithPara[1].length - 6)
    )
  }
  const difference = prevTotalViews.total - totalViews.total

  return (
    <div
      className='w-full md:w-6/12 lg:w-4/12 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1'
      role='button'
      onClick={() =>
        handleClick({
          visible: true,
          data: data,
        })
      }
    >
      <div className='w-full rounded flex flex-col lg:flex-row bg-white shadow-md my-14 '>
        <div className='w-6/12 mx-auto lg:w-2/5 -mt-14 lg:ml-6 mb-6 rounded-md overflow-hidden shadow-md'>
          <img
            className='object-cover h-full w-full'
            src={videoImage}
            alt={name}
          />
        </div>
        <div className='w-10/12 lg:w-2/3 mx-auto mb-4 lg:m-4 lg:mb-6'>
          <h5 className='text-blueGray-400 uppercase font-bold text-md'>
            {name}
          </h5>
          <div className='text-blue-500 uppercase font-light text-4xl mt-4'>
            <span className='block text-xs text-blueGray-400 font-bold'>
              Total views
            </span>
            {totalViews.total}
          </div>

          <div className='text-sm text-white mt-4'>
            <span
              className={`${
                difference > 0 ? 'bg-emerald-400' : 'bg-pink-500'
              } mr-2 px-2 py-1 rounded-full whitespace-nowrap`}
            >
              <i
                className={`fas ${
                  difference > 0 ? 'fa-arrow-up' : 'fa-arrow-down'
                }`}
              ></i>{' '}
              {difference}
            </span>
            <span className='whitespace-nowrap text-blueGray-400'>
              Since last month
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
