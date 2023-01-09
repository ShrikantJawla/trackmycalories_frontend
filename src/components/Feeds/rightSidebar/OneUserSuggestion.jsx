import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  makeFollowRequest,
  makeUnFollowRequest,
} from '../../../redux/connectAndFollow/connectAndFollow.actions'

const OneUserSuggestion = ({ user }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((s) => s.auth)
  return (
    <HStack w="full" justify="space-between">
      <HStack>
        <Avatar size="md" src={user?.img} />
        <Text fontWeight={500} fontSize={15}>
          {user?.firstName} {user?.lastName ? user?.lastName : ''}
        </Text>
      </HStack>
      {followOrUnFollowBtns(userInfo, user, dispatch)}
    </HStack>
  )
}

export default OneUserSuggestion

function followOrUnFollowBtns(user, ele, dispatch) {
  let followStatus = false
  user?.following?.forEach((element) => {
    if (element?._id === ele?._id) followStatus = true
  })
  if (followStatus) {
    return (
      <Button
        size="sm"
        onClick={() => dispatch(makeUnFollowRequest({ userId: ele?._id }))}
        variant="solid"
        colorScheme="purple"
      >
        Unfollow
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        onClick={() => dispatch(makeFollowRequest({ userId: ele?._id }))}
        variant="solid"
        colorScheme="cyan"
      >
        Follow
      </Button>
    )
  }
}
