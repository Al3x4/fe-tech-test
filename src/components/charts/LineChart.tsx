import { FC } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js/auto'
import 'chartjs-adapter-date-fns'
import merge from 'lodash.merge'

type Props = {
  data: ChartData
  options?: ChartOptions
}

const defaultOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      type: 'timeseries',
    },
  },
  plugins: {
    legend: {
      align: 'end',
      position: 'bottom',
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
}
const LineChart: FC<Props> = ({ data, options }) => (
  <div className='w-full h-full'>
    <Line type='line' data={data} options={merge(defaultOptions, options)} />
  </div>
)
export default LineChart
