import { Badge, HStack, Progress, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { currentTime } from '../tasks/timeRelatedData'

const ScheduledTask = ({ taskName, tag, targetTime, setTime }) => {
  const [current, setCurrent] = useState(new Date(currentTime()))
  let id = setInterval(() => {
    clearInterval(id)
    setCurrent(new Date(currentTime()))
  }, 1000 * 60)
  let taskSetTime = new Date(setTime)
  let target = new Date(targetTime)
  let diff = target - current
  let mins = diff / (1000 * 60)
  const totalDiff = (target - taskSetTime) / (1000 * 60)
  let totalPer = (mins / totalDiff) * 100

  return (
    <VStack
      w="full"
      bg="var(--cardBackground1)"
      padding="8px"
      rounded="4%"
      boxShadow="var(--boxShadow)"
    >
      <HStack w="full" justify="space-between">
        <Text fontSize={14}>{taskName && taskName}</Text>
        <Link to="/tasks">
          <BiEditAlt cursor="pointer" />
        </Link>
      </HStack>
      <HStack w="full" justify="space-between" px="20px">
        <Badge variant="outline" colorScheme="green">
          {tag && tag}
        </Badge>
        <Text fontSize={13}>
          {targetTime && `${targetTime.slice(8, 10)}-${targetTime.slice(5, 7)}`}
        </Text>
      </HStack>
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
    </VStack>
  )
}

export default ScheduledTask
