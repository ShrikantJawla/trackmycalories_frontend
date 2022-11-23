import { Box } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'

const Tasks = () => {
  return (
    <Box
      style={{ marginLeft: '6%' }}
      w="94%"
      justify="space-between"
      bg="#f0efef"
      h="100vh"
    >
      <Sidebar location="tasks" />
      Tasks
    </Box>
  )
}

export default Tasks
