import {
  Avatar,
  CloseButton,
  Divider,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import uuid from 'react-uuid'
import styled from 'styled-components'

const DisplayBoxOfCommentsAndLikes = ({
  toggleVisiblity,
  isVisible,
  choise,
}) => {
  const { singlePost } = useSelector((s) => s.feeds)

  return (
    <StyledVStack
      w={{ base: '94%', md: '480px' }}
      h="400px"
      rounded="10px"
      position="fixed"
      top="50%"
      left="50%"
      style={{ transform: 'translate(-50%,-50%)' }}
      boxShadow="lg"
      bg="linear-gradient(to right top, #65dfc9, #6cdbeb)"
      p="7px"
    >
      <HStack w="full" justify="space-between" px="8px" py="10px">
        <Text fontWeight="bold">All Likes</Text>
        <CloseButton fontSize={14} onClick={toggleVisiblity} />
      </HStack>
      <Divider />
      <StyledVStack w="full" overflowY="scroll">
        {singlePost.likes &&
          singlePost[makeChoise(choise)].map((ele) => (
            <HStack
              key={uuid()}
              w={'full'}
              spacing={4}
              h="65px"
              rounded={'10px'}
              p="5px"
              bg={'var(--cardBackground)'}
            >
              <Avatar src={choise === 'isLikes' ? ele.img : ele.user.img} />
              <VStack spacing={0}>
                <Text fontWeight={'bold'} w={'full'}>
                  {choise === 'isLikes' ? ele.firstName : ele.user.firstName}{' '}
                  {choise === 'isLikes' ? ele.lastName : ele.user.lastName}
                </Text>
                <Text w={'full'}>
                  {choise === 'isLikes' ? ele.occupation : ele.user.occupation}
                </Text>
              </VStack>
            </HStack>
          ))}
      </StyledVStack>
    </StyledVStack>
  )
}

export default DisplayBoxOfCommentsAndLikes

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: purple;
  }
`

function makeChoise(choise) {
  if (choise === 'isLikes') return 'likes'
  else if (choise === 'isComments') return 'comments'
}
