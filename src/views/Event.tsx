import { FC } from 'react'
import { useDataFetcher } from 'hooks/useDataFetcher'

import { ChartData } from 'chart.js/auto'
import { DatumI, TimeseriesDatumI } from 'models/types'
import { Donut, LineChart, BarChart } from 'components/charts'

const timeseries_url =
  'https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data'

type Props = {
  data: DatumI
}
const Event: FC<Props> = (props) => {
  const {
    assetImage,
    description,
    duration,
    genre,
    name,
    prevTotalViews,
    provider,
    totalViews,
    videoImage,
  } = props.data
  const { data } = useDataFetcher(timeseries_url)

  const formatDataForChartTimeseries = (
    data: TimeseriesDatumI[],
    labelFormatter?: any
  ): ChartData => {
    const chartData: ChartData = {
      datasets: [
        {
          label: 'Total views',
          data: data.map((d) => d.value),
          fill: false,
          radius: 3,
          capBezierPoints: true,
          borderColor: '#32cec6',
          backgroundColor: '#32cec6',
        },
      ],
      labels: data.map((d) =>
        labelFormatter ? labelFormatter(d.timestamp) : d.timestamp
      ),
    }

    return chartData
  }
  const formatDataForPieChart = (
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
    <>
      <div className='relative bg-gradient-to-t from-indigo-900 to-blueGray-900 -mb-96 '>
        <img
          src={videoImage}
          alt={name}
          className='w-full h-full absolute object-cover opacity-25'
        />
        <div className='i just space py-64 md:py-48 '></div>
      </div>

      <div className='z-50 max-w-6xl'>
        <div className='relative flex flex-col w-full outline-none focus:outline-none md:mt-24'>
          {/*body*/}
          <div className='relative p-6 flex flex-col md:flex-row items-center lg:items-start'>
            <div className='w-6/12 md:w-1/3 rounded-md overflow-hidden -mt-24 mx-auto'>
              <img src={videoImage} alt={name} />
            </div>

            <div className='mx-4 mt-5 md:mt-44 w-full md:w-2/3 flex flex-col justify-between flex-grow '>
              <div className='w-full flex items-top justify-between flex-grow'>
                <div>
                  <h5 className='text-blueGray-100 uppercase font-bold text-4xl'>
                    {name}
                  </h5>
                  <div className='text-sm text-blueGray-100 font-bold'>
                    {yearAndDuration[0]}{' '}
                  </div>
                  <div className='text-sm text-blueGray-100 font-bold'>
                    {yearAndDuration[1]} minutes
                  </div>
                </div>
                <div className='text-blue-100 uppercase font-light text-5xl text-right '>
                  <span className='block text-sm text-blueGray-100 font-bold px-1'>
                    Total views
                  </span>
                  {totalViews.total}
                  <div className='text-sm text-white mt-3'>
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
          <p className='mb-4 mx-6 px-2 py-8 text-blueGray-500 text-md leading-relaxed border-l-8 border-blueGray-200'>
            {description}
          </p>
        </div>

        <div className='flex flex-wrap flex-col md:flex-row px-2'>
          <div className='p-4 mx-auto w-full md:w-9/12'>
            <div className='w-full rounded-md shadow-md bg-white'>
              <h3 className='text-lg font-bold text-blueGray-800 mr-10 pt-4 pl-4'>
                Total views
              </h3>
              <hr className='mt-2 mb-3 w-full' />
              <div className='p-4 h-56'>
                <LineChart data={formatDataForChartTimeseries(data)} />
              </div>
            </div>
          </div>
          <div className='p-4 mx-auto w-full md:w-3/12'>
            <div className='w-full rounded-md shadow-md bg-white'>
              <div className=' flex items-center justify-between px-4 pt-4'>
                <h3 className='text-lg font-bold text-blue-800'>Total views</h3>
                <span className='text-lg font-bold text-blue-800'>
                  {totalViews.total}
                </span>
              </div>

              <hr className='mt-2 mb-3 w-full' />
              <div className='p-4'>
                <Donut
                  data={formatDataForPieChart(props.data, 'totalViews')}
                  options={{
                    plugins: {
                      legend: {
                        position: 'bottom',
                        align: 'center',
                      },
                    },
                  }}
                ></Donut>
              </div>
            </div>
          </div>
          <div className='p-4 mx-auto w-full md:w-9/12'>
            <div className='w-full rounded-md shadow-md bg-white'>
              <h3 className='text-lg font-bold text-blueGray-800 mr-10 pt-4 pl-4'>
                Total views
              </h3>
              <hr className='mt-2 mb-3 w-full' />
              <div className='p-4 h-56'>
                <BarChart
                  data={formatDataForChartTimeseries(data, (v: any) =>
                    new Date(v).getHours()
                  )}
                />
              </div>
            </div>
          </div>
          <div className='p-4 mx-auto w-full md:w-3/12'>
            <div className='w-full rounded-md shadow-md bg-white'>
              <div className=' flex items-center justify-between px-4 pt-4'>
                <h3 className='text-lg font-bold text-blue-800'>
                  Previous views
                </h3>
                <span className='text-lg font-bold text-blue-800'>
                  {prevTotalViews.total}
                </span>
              </div>
              <hr className='mt-2 mb-3 w-full' />
              <div className='p-4 '>
                <Donut
                  data={formatDataForPieChart(props.data, 'prevTotalViews')}
                  options={{
                    plugins: {
                      legend: {
                        position: 'bottom',
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
    </>
  )
}

export default Event
