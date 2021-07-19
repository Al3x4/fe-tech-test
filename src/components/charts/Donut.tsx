import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { ChartData, ChartOptions } from 'chart.js/auto'
import merge from 'lodash.merge'

type Props = {
  data: ChartData
  options?: ChartOptions
}

const defaultOptions = {
  animation: false,
  plugins: {
    legend: {
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
  },
}

const DoughnutChart: FC<Props> = ({ data, options }) => (
  <Doughnut
    type='doughnut'
    data={data}
    options={merge(defaultOptions, options)}
  />
)

export default DoughnutChart
