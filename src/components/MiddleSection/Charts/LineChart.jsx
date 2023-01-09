import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { dateWiseData, chartData } from '../../../assets/chartData'

function LineChart({ wid, title }) {
  const { usersAlItems } = useSelector((store) => store.diary)
  if (usersAlItems) var dataArray = dateWiseData(usersAlItems)
  const data = chartData(dataArray, title)

  return (
    <Box
      rounded="10px"
      w={wid}
      boxShadow="var(--boxShadow)"
      p="2"
      bg="var(--cardBackground)"
    >
      <Bar data={data} />
    </Box>
  )
}

export default LineChart
