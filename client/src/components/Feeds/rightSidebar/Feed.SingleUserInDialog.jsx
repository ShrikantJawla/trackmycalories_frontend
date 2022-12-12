import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  acceptUserProfile,
  declineUserProfile,
  disconnectUserProfile,
  makeFollowRequest,
  makeUnFollowRequest,
} from '../../../redux/connectAndFollow/connectAndFollow.actions'

const FeedSingleUserInDialog = ({ user, type, loginedUser }) => {
  const dispatch = useDispatch()

  return (
    <HStack
      w="full"
      px="5px"
      py="10px"
      h="75px"
      bg="var(--cardBackground)"
      justify="space-between"
      rounded="5px"
    >
      <HStack spacing={3}>
        <Avatar size="lg" src={user?.img} />
        <Text fontWeight={500} fontSize={15}>
          {user?.firstName} {user?.lastName ? user?.lastName : ''}
        </Text>
      </HStack>
      <HStack>{acceptOrDeclineBtn(type, user, dispatch, loginedUser)}</HStack>
    </HStack>
  )
}

export default FeedSingleUserInDialog

function acceptOrDeclineBtn(type, user, dispatch, loginedUser) {
  const dispatchFollow = () => dispatch(makeFollowRequest({ userId: user._id }))
  const dispatchUnFollow = () =>
    dispatch(makeUnFollowRequest({ userId: user._id }))
  let followStatus = false
  loginedUser.following.forEach((ele) => {
    if (ele?._id === user._id) followStatus = true
  })
  if (type === 'suggestions') {
    return (
      <>
        <Button
          size="sm"
          onClick={followStatus ? dispatchUnFollow : dispatchFollow}
          variant="outline"
          colorScheme={followStatus ? 'red' : 'purple'}
        >
          {followStatus ? 'Unfollow' : 'Follow'}
        </Button>
      </>
    )
  } else if (type === 'connections') {
    return (
      <>
        <Button
          size="sm"
          onClick={followStatus ? dispatchUnFollow : dispatchFollow}
          variant="outline"
          colorScheme={followStatus ? 'red' : 'purple'}
        >
          {followStatus ? 'Unfollow' : 'Follow'}
        </Button>
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          onClick={() => dispatch(disconnectUserProfile({ userId: user._id }))}
        >
          Disconnect
        </Button>
      </>
    )
  } else if (type === 'connectionRequest') {
    return (
      <>
        <Button
          size="sm"
          onClick={() => dispatch(acceptUserProfile({ userId: user._id }))}
          variant="outline"
          colorScheme="purple"
        >
          Accept
        </Button>
        <Button
          size="sm"
          onClick={() => dispatch(declineUserProfile({ userId: user._id }))}
          variant="outline"
          colorScheme="red"
        >
          Decline
        </Button>
      </>
    )
  }
}
