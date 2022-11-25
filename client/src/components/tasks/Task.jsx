import {
  Badge,
  CloseButton,
  HStack,
  IconButton,
  Progress,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { VscDebugStart, VscDebugRestart } from 'react-icons/vsc'
import { MdFileDownloadDone } from 'react-icons/md'
import {
  deleteTask,
  getOneTask,
  updateTask,
} from '../../redux/tasks/tasks.actions'
import { useDispatch } from 'react-redux'
import UpdateTaskForm from './UpdateTaskForm'
import { useToggleVisiblity } from '../../hooks/useToggleVisiblity'

const Task = ({
  extraInfo,
  status,
  tag,
  targetTime,
  taskName,
  _id,
  setTime,
}) => {
  const dispatch = useDispatch()
  const {
    isVisible: updateFormIsVisble,
    toggleVisiblity,
  } = useToggleVisiblity()
  let time = new Date()
  const [current, setCurrent] = useState(
    new Date(
      `${time.getFullYear()}-${
        time.getMonth() + 1
      }-${time.getDate()}T${time.getHours()}:${time.getMinutes()}`,
    ),
  )
  let id = setInterval(() => {
    clearInterval(id)
    setCurrent(
      new Date(
        `${time.getFullYear()}-${
          time.getMonth() + 1
        }-${time.getDate()}T${time.getHours()}:${time.getMinutes()}`,
      ),
    )
  }, 1000 * 60)
  let taskSetTime = new Date(setTime)
  let target = new Date(targetTime)
  let diff = target - current
  let mins = diff / (1000 * 60)
  const totalDiff = (target - taskSetTime) / (1000 * 60)
  let totalPer = (mins / totalDiff) * 100

  useEffect(() => {
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <VStack
      w="full"
      bg="var(--cardBackground1)"
      py="14px"
      pb="10px"
      px="8px"
      rounded="10px"
      h="fit-content"
      boxShadow="var(--boxShadow)"
    >
      <VStack w="full" spacing="-1px">
        <HStack w="full" h="fit-content">
          <Text fontSize={14} fontWeight={600} color="red">
            {taskName && taskName}
          </Text>
          <Badge fontSize={11} variant="outline" colorScheme="green">
            {status && status}
          </Badge>
          <Spacer />
          <BiEditAlt
            cursor="pointer"
            onClick={() => {
              dispatch(getOneTask(_id))
              toggleVisiblity()
            }}
          />
          <CloseButton onClick={() => dispatch(deleteTask(_id))} />
        </HStack>
        <HStack w="full" h="fit-content">
          <Text fontSize={12}>{extraInfo}</Text>
        </HStack>
      </VStack>
      <Spacer />
      <HStack w="full">
        <Badge fontSize={14} variant="outline" colorScheme="green">
          {tag && tag}
        </Badge>
        <Spacer />
        <Text color="teal" fontWeight={500} fontSize={15}>
          {targetTime && `${targetTime.slice(8, 10)}-${targetTime.slice(5, 7)}`}
        </Text>
      </HStack>
      <HStack w="full">
        {changeStatusButtons(status, _id, dispatch)}
        <Progress
          w="80%"
          value={100 - totalPer}
          size="xs"
          colorScheme={
            100 - totalPer < 100
              ? 100 - totalPer > 30 && 100 - totalDiff <= 85
                ? 'yellow'
                : 'blue'
              : 'red'
          }
        />
      </HStack>
      <UpdateTaskForm
        isVisible={updateFormIsVisble}
        toggleVisiblity={toggleVisiblity}
      />
    </VStack>
  )
}

export default Task

function changeStatusButtons(status, _id, dispatch) {
  let props = {
    h: '28px',
    variant: 'outline',
    color: 'green',
    fontWeight: '600',
  }
  if (status === 'inprogress') {
    return (
      <IconButton
        {...props}
        icon={<MdFileDownloadDone color="green" fontSize={17} />}
        onClick={() => dispatch(updateTask(_id, { status: 'completed' }))}
      />
    )
  }
  if (status === 'notStarted') {
    return (
      <IconButton
        {...props}
        icon={<VscDebugStart color="green" fontSize={17} />}
        onClick={() => dispatch(updateTask(_id, { status: 'inprogress' }))}
      />
    )
  }
  if (status === 'completed') {
    return (
      <IconButton
        {...props}
        icon={<VscDebugRestart color="green" fontSize={17} />}
        onClick={() => dispatch(updateTask(_id, { status: 'notStarted' }))}
      />
    )
  }
}
