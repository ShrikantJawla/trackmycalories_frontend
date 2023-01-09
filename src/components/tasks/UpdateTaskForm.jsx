import {
  VStack,
  CloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../../redux/tasks/tasks.actions'

const UpdateTaskForm = ({ isVisible, toggleVisiblity }) => {
  const dispatch = useDispatch()
  const { singleTask } = useSelector((s) => s.tasks)
  const [taskDetail, setTaskDetail] = useState({ ...singleTask })
  const toast = useToast()

  useEffect(() => {
    setTaskDetail({ ...singleTask })
  }, [singleTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      taskDetail.taskName === '' ||
      taskDetail.extraInfo === '' ||
      (taskDetail.targetTime === '' && taskDetail.tag === '')
    ) {
      return toast({
        position: 'top',
        title: 'Empty Feild validator error!',
        description: "Can't leave a feild empty!",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    dispatch(updateTask(singleTask._id, taskDetail))
    toggleVisiblity()
  }
  if (isVisible)
    return (
      <VStack
        w="400px"
        // h="350px"
        rounded="10px"
        bg="linear-gradient(to right bottom,#76b7d3,#73b2d7)"
        position="fixed"
        top="18vh"
        left="35vw"
        p="17px"
        zIndex={2}
      >
        <CloseButton
          onClick={toggleVisiblity}
          alignSelf="end"
          w="40px"
          fontSize={16}
          color="white"
        />
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          }}
        >
          <FormControl>
            <Input
              placeholder="Enter task"
              _placeholder={{ color: 'black' }}
              value={taskDetail.taskName}
              onChange={({ target: { value } }) =>
                setTaskDetail({ ...taskDetail, taskName: value })
              }
            />
          </FormControl>
          <FormControl>
            <Input
              type="text"
              placeholder="Enter extra info if there is any!"
              _placeholder={{ color: 'black' }}
              value={taskDetail.extraInfo}
              onChange={({ target: { value } }) =>
                setTaskDetail({ ...taskDetail, extraInfo: value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Set a tag</FormLabel>
            <Select
              placeholder="Select option"
              value={taskDetail.tag}
              onChange={({ target: { value } }) =>
                setTaskDetail({ ...taskDetail, tag: value })
              }
            >
              <option value="fitness">Fitness</option>
              <option value="cardio">Cardio</option>
              <option value="study">Study</option>
              <option value="diet">Diet</option>
              <option value="other">Other</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Set target time</FormLabel>
            <Input
              type="datetime-local"
              value={taskDetail.targetTime}
              onChange={({ target: { value } }) =>
                setTaskDetail({ ...taskDetail, targetTime: value })
              }
            />
          </FormControl>
          <Button variant="outline" type="submit">
            Add task
          </Button>
        </form>
      </VStack>
    )
}

export default UpdateTaskForm
