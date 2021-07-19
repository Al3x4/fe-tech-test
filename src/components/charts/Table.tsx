import { FC, useState } from 'react'
import { DatumI } from 'models/types'
import Donut from 'components/charts/Donut'

import { ChartData } from 'chart.js/auto'

type Props = {
  data: DatumI[]
  handleClick: React.Dispatch<
    React.SetStateAction<{
      visible: boolean
      data: DatumI
    }>
  >
}

const Table: FC<Props> = ({ data, handleClick }) => {
  const formatDataForChart = (data: DatumI): ChartData => {
    const chartColors: string[] = [
      '#2563EB',
      '#DB2777',
      '#8B5CF6',
      '#32cec6',
      '#F9A8D4',
      '#FCD34D',
    ]

    const chartData: ChartData = {
      datasets: [
        {
          data: [],
          backgroundColor: chartColors,
          borderWidth: 5,
          borderColor: 'transparent',
        },
      ],
      labels: Object.keys(data.prevTotalViews).filter((key) => key !== 'total'),
    }

    chartData.datasets[0].data = Object.keys(data.prevTotalViews)
      .filter((key) => key !== 'total')
      .map((key) => data.prevTotalViews[key as 'now-tv' | 'sky-go' | 'peacock'])

    return chartData
  }
  return (
    <>
      <div className='flex flex-col px-4'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200 table-auto'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 md:px-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Provider
                    </th>
                    <th
                      scope='col'
                      className='hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Genre
                    </th>
                    <th
                      scope='col'
                      className='hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Total views
                    </th>
                    <th
                      scope='col'
                      className='px-2 md:px-6  py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                    >
                      Views split
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {data.map((datum) => {
                    // get year and duration from description
                    const yearAndDurationWithPara = datum.description.match(
                      /\(([^)]+)\)/g
                    )
                    const yearAndDuration: any[] = []
                    if (yearAndDurationWithPara) {
                      yearAndDuration.push(
                        yearAndDurationWithPara[0].slice(
                          1,
                          yearAndDurationWithPara[0].length - 1
                        )
                      )
                      yearAndDuration.push(
                        yearAndDurationWithPara[1].slice(
                          1,
                          yearAndDurationWithPara[1].length - 6
                        )
                      )
                    }
                    return (
                      <tr
                        className='cursor-pointer  transition duration-300 ease-in-out transform hover:bg-sky-50'
                        role='button'
                        onClick={() =>
                          handleClick({
                            visible: true,
                            data: datum,
                          })
                        }
                      >
                        <td className='px-2 md:px-6 py-4 whitespace-normal w-1/3 '>
                          <div className='flex items-top'>
                            <div className='flex-shrink-0 w-16 md:w-20 rounded overflow-hidden shadow-md'>
                              <img
                                className='object-cover w-full h-full'
                                src={datum.assetImage}
                                alt={datum.name}
                              />
                            </div>
                            <div className='ml-2 md:ml-4'>
                              <div className='text:md md:text-lg text-blueGray-900'>
                                {datum.name}
                              </div>
                              <div className='hidden md:block text-sm text-blueGray-400 font-bold'>
                                {yearAndDuration[0]}
                              </div>
                              <div className='hidden md:block text-sm text-blueGray-400 font-bold'>
                                {yearAndDuration[1]} minutes
                              </div>
                              <div className='md:hidden text-xs text-blueGray-400 font-bold'>
                                {datum.provider}
                              </div>
                              <div className='md:hidden text-sm text-blue-500 font-bold'>
                                {datum.totalViews.total} views
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='hidden md:table-cell px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-blueGray-400 font-bold'>
                            {datum.provider}
                          </div>
                        </td>
                        <td className='hidden md:table-cell px-6 py-4 '>
                          <div className='text-sm text-blueGray-100 flex flex-wrap w-36'>
                            {datum.genre.map((genre) => (
                              <span className='text-xs leading-5 font-semibold m-1 rounded-full bg-blueGray-400 px-2 '>
                                {genre}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className='hidden md:table-cell px-6 py-4 whitespace-nowrap'>
                          <div className='text-lg leading-5 font-semibold text-blue-500 '>
                            {datum.totalViews.total}
                          </div>
                        </td>
                        <td className='px-2 md:px-6 py-4 whitespace-nowrap flex flex-col items-start justify-center'>
                          {/* <div className='text-md leading-5 font-semibold text-blue-500 md:hidden text-center'>
                            TOTAL {datum.totalViews.total}
                          </div> */}
                          <div className='w-36 h-20 md:w-40 overflow-hidden flex items-center justify-around'>
                            <Donut
                              data={formatDataForChart(datum)}
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
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Table
