import { HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import OneUserSuggestion from './OneUserSuggestion'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../redux/auth/auth.actions'
import { getUser } from '../../../redux/auth/auth.actions'
import styled from 'styled-components'
import UsersListsDialog from './UsersListsDialog'

const FeedsUsersSuggestionsList = () => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()
  const { allUsers, userInfo } = useSelector((s) => s.auth)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const toggleVisiblity = () => setIsVisible((p) => (p = !p))

  return (
    <VStack w="90%" spacing={5} pb="10px">
      <HStack w="full" justify="space-between" p>
        <Text fontWeight="bold">Suggestions for you</Text>
        <UsersListsDialog
          title="All Suggestions"
          type='suggestions'
          users={allUsers}
          isVisible={isVisible}
          toggleVisiblity={toggleVisiblity}
        />
      </HStack>
      <StyledVStack pr="2px" h="200px" overflowY="scroll" w="full" spacing={3}>
        {allUsers &&
          allUsers
            .filter((ele) => ele._id !== userInfo?._id)
            .map((ele) => (
              <OneUserSuggestion
                user={ele}
                key={`${ele._id}+${Math.floor(Math.random()) * 3}`}
              />
            ))}
      </StyledVStack>
    </VStack>
  )
}

export default FeedsUsersSuggestionsList

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: purple;
  }
`
