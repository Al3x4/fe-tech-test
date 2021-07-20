import { FC } from 'react'
import { DatumI } from 'models/types'
import Donut from 'components/charts/Donut'
import { ChartData } from 'chart.js/auto'
import { Link, NavLink } from 'react-router-dom'

type Props = {
  data: DatumI
  extra?: any[]
  setModal: React.Dispatch<
    React.SetStateAction<{
      visible: boolean
      data: DatumI
    }>
  >
}

const Modal: FC<Props> = ({ data, setModal }) => {
  const {
    description,
    genre,
    name,
    prevTotalViews,
    provider,
    totalViews,
    videoImage,
  } = data
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
  const formatDataForChart = (
    data: DatumI,
    accessor: 'prevTotalViews' | 'totalViews'
  ): ChartData => {
    const chartColors: string[] = ['#2563EB', '#DB2777', '#8B5CF6']

    const chartData: ChartData = {
      datasets: [
        {
          data: [],
          backgroundColor: chartColors,
          borderWidth: 5,
          borderColor: 'transparent',
        },
      ],
      labels: Object.keys(data[accessor]).filter((key) => key !== 'total'),
    }

    chartData.datasets[0].data = Object.keys(prevTotalViews)
      .filter((key) => key !== 'total')
      .map((key) => data[accessor][key as 'now-tv' | 'sky-go' | 'peacock'])

    return chartData
  }
  return (
    <>
      <div
        id='modal-parent'
        className='justify-center items-center flex overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none'
        onClick={(e) => {
          if ((e.target as HTMLDivElement).id === 'modal-parent') {
            return setModal({
              data: data,
              visible: false,
            })
          }
        }}
      >
        <div className='relative my-6 mx-4 md:mx-auto max-w-3xl px-2'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full mx-auto bg-white outline-none focus:outline-none mt-48 md:mt-24'>
            <div className='w-full h-10 flex items-center justify-end p-1'>
              <NavLink
                to={{
                  pathname: `/content/${data.name
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}`,
                  state: data,
                }}
                className='w-8 h-8 rounded text-2xl  flex items-center justify-around  text-blueGray-400 hover:text-blueGray-800'
              >
                <span>
                  <i className='fas fa-plus-circle'></i>
                </span>
              </NavLink>
              <div
                role='button'
                onClick={() =>
                  setModal({
                    data: data,
                    visible: false,
                  })
                }
                className='w-8 h-8 rounded text-2xl  flex items-center justify-around  text-blueGray-400 hover:text-blueGray-800'
              >
                <span>
                  <i className='fas fa-times-circle'></i>
                </span>
              </div>
            </div>
            {/*body*/}
            <div className='relative p-6 flex flex-col md:flex-row'>
              <div className='w-6/12 md:w-1/3 rounded-md overflow-hidden -mt-24 shadow'>
                <NavLink
                  to={{
                    pathname: `/content/${data.name
                      .toLowerCase()
                      .replace(/ /g, '-')
                      .replace(/[^\w-]+/g, '')}`,
                    state: data,
                  }}
                >
                  <img src={videoImage} alt={name} />
                </NavLink>
              </div>

              <div className='mt-4 mx-4 w-11/12 md:w-2/3 flex flex-col justify-between  flex-grow '>
                <div className='w-full flex items-top justify-between flex-grow'>
                  <div>
                    <h5 className='text-blueGray-800 uppercase font-bold text-4xl'>
                      {name}
                    </h5>
                    <div className='text-sm text-blueGray-400 font-bold'>
                      {yearAndDuration[0]}{' '}
                    </div>
                    <div className='text-sm text-blueGray-400 font-bold'>
                      {yearAndDuration[1]} minutes
                    </div>
                  </div>

                  <div className='text-blue-500 uppercase font-light text-3xl md:text-5xl text-right '>
                    <span className='block text-sm text-blueGray-400 font-bold px-1'>
                      Total views
                    </span>
                    {totalViews.total}
                    <div className='text-sm text-white mt-4'>
                      <span
                        className={`${
                          difference > 0 ? 'bg-emerald-400' : 'bg-pink-500'
                        } px-2 py-1 rounded-full whitespace-nowrap`}
                      >
                        <i
                          className={`fas ${
                            difference > 0 ? 'fa-arrow-up' : 'fa-arrow-down'
                          }`}
                        ></i>{' '}
                        {difference}
                      </span>
                      <span className='block whitespace-nowrap text-blueGray-400 text-xs lowercase mt-2'>
                        from last month
                      </span>
                    </div>
                  </div>
                </div>

                <div className='w-full flex flex-col items-start justify-between'>
                  <div className='text-sm text-blueGray-400 font-bold'>
                    {provider}
                  </div>
                  <div className='text-sm text-blueGray-100 flex flex-wrap'>
                    {genre.map((genre) => (
                      <span className='text-xs leading-5 font-semibold mr-1 mt-2 rounded-full bg-blueGray-400 px-2 '>
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className='mb-6 mx-6 px-2 text-blueGray-500 text-xs md:text-base leading-relaxed border-l-8 border-blueGray-200'>
              {description}
            </p>
            <hr />
            <div className='flex flex-col md:flex-row w-full items-center justify-around'>
              <div className='w-full md:w-1/3 px-6 py-6 text-blue-500 text-bold text-lg'>
                Total views {totalViews.total}
                <div className='w-36 h-20 md:w-40 overflow-hidden flex items-center justify-around mt-2'>
                  <Donut
                    data={formatDataForChart(data, 'totalViews')}
                    options={{
                      plugins: {
                        legend: {
                          position: 'right',
                          align: 'center',
                        },
                      },
                    }}
                  ></Donut>
                </div>
              </div>
              <div className='w-full md:w-1/3 px-6 py-6 text-blue-500 text-bold text-lg'>
                Prev total {prevTotalViews.total}
                <div className='w-36 h-20 md:w-40 overflow-hidden flex items-center justify-around mt-2'>
                  <Donut
                    data={formatDataForChart(data, 'prevTotalViews')}
                    options={{
                      plugins: {
                        legend: {
                          position: 'right',
                          align: 'center',
                        },
                      },
                    }}
                  ></Donut>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-50 fixed inset-0 z-40 bg-black'></div>
    </>
  )
}

export default Modal
