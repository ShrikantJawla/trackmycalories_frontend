import { Box, Button, HStack, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { HiOutlineViewGridAdd } from 'react-icons/hi'
import AddTask from '../components/tasks/AddTask'
import { useToggleVisiblity } from '../hooks/useToggleVisiblity'
import Task from '../components/tasks/Task'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTasks } from '../redux/tasks/tasks.actions'

const Tasks = () => {
  const { isVisible, toggleVisiblity } = useToggleVisiblity()
  const dispatch = useDispatch()
  const { tasks } = useSelector((s) => s.tasks)

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch])

  return (
    <StyledBox
      w={{ lg: '94%' }}
      justify="space-between"
      bg="linear-gradient(to right top, #65dfc9, #6cdbeb)"
    >
      <Sidebar location="tasks" />
      <HStack w="full" h="110px" justify="center">
        <HiOutlineViewGridAdd fontSize={27} color="red" />
        <Button variant="outline" onClick={toggleVisiblity}>
          Add new task
        </Button>
      </HStack>
      <Stack direction={{ base: 'column', lg: 'row' }} justify="space-evenly">
        <StyledVStack
          w={{ lg: '31%' }}
          h={{ lg: '90vh' }}
          bg="var(--glassBackground)"
          px="6px"
          py="10px"
          overflow="auto"
          boxShadow="var(--boxShadow)"
        >
          {tasks &&
            tasks
              .filter((task) => task.status === 'notStarted')
              .map((ele) => <Task key={ele._id} {...ele} />)}
        </StyledVStack>
        <StyledVStack
          w={{ lg: '31%' }}
          h={{ lg: '90vh' }}
          px="6px"
          py="10px"
          bg="var(--glassBackground)"
          overflow="auto"
          boxShadow="var(--boxShadow)"
        >
          {tasks &&
            tasks
              .filter((task) => task.status === 'inprogress')
              .map((ele) => <Task key={ele._id} {...ele} />)}
        </StyledVStack>
        <StyledVStack
          w={{ lg: '31%' }}
          h={{ lg: '90vh' }}
          px="6px"
          py="10px"
          bg="var(--glassBackground)"
          overflow="auto"
          boxShadow="var(--boxShadow)"
        >
          {tasks &&
            tasks
              .filter((task) => task.status === 'completed')
              .map((ele) => <Task key={ele._id} {...ele} />)}
        </StyledVStack>
      </Stack>
      <AddTask isVisible={isVisible} toggleVisiblity={toggleVisiblity} />
    </StyledBox>
  )
}

export default Tasks

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    display: none;
  }
`
const StyledBox = styled(Box)`
  margin-left: 6%;
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`
