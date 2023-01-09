import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MdOutlineEmojiPeople } from 'react-icons/md'
import Friend from './OneUserSuggestion'
import UsersListsDialog from './UsersListsDialog'

const FeedConnectionsList = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisiblity = () => setIsVisible((p) => (p = !p))
  const { userInfo } = useSelector((s) => s.auth)

  return (
    <VStack w="90%" spacing={5} pb="10px">
      <HStack w="full" justify="space-between" p>
        <Text fontWeight="bold">Your connections</Text>
        <UsersListsDialog
          users={userInfo.connected}
          type="connections"
          title="All connections list"
          isVisible={isVisible}
          toggleVisiblity={toggleVisiblity}
        />
      </HStack>
      <StyledVStack pr="2px" h="200px" overflowY="scroll" w="full" spacing={3}>
        {!userInfo?.connected?.length ? (
          <VStack>
            <Icon color="brown" fontSize={28} as={MdOutlineEmojiPeople} />
            <Text fontWeight="bold" color="red.500">
              Add anyone to your connection!
            </Text>
          </VStack>
        ) : (
          userInfo?.connected.map((ele, ind) => (
            <Friend
              user={ele}
              key={`${ele._id}+${new Date().getTime()}+${ind}`}
            />
          ))
        )}
      </StyledVStack>
    </VStack>
  )
}

export default FeedConnectionsList

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: purple;
  }
`
