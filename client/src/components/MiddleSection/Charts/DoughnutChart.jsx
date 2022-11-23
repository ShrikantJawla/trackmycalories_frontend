import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Box } from '@chakra-ui/react'
import { singleProductData } from '../../../assets/chartData'

const DoughnutChart = ({ product }) => {
  if (product) var data = singleProductData(product)
  return (
    <Box h="fit-content" w="200px">
      <Doughnut data={data} />
    </Box>
  )
}

export default DoughnutChart
