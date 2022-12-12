import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HStack, Icon, Input } from '@chakra-ui/react'

const FeedsRightSideSearchBar = () => {
  const [friendNameInput, setFriendNameInput] = useState('')
  const handleSearchUsers = (e) => {
    e.preventDefault()
    console.log(friendNameInput)
  }

  return (
    <HStack
      onSubmit={handleSearchUsers}
      boxShadow="md"
      px="15px"
      py="13px"
      rounded="15px"
      as="form"
      w="80%"
      bg="var(--cardBackground1)"
    >
      <Icon as={CiSearch} />
      <Input
        value={friendNameInput}
        onChange={({ target: { value } }) => setFriendNameInput(value)}
        placeholder="search any friend"
        variant={'unstyled'}
      />
    </HStack>
  )
}

export default FeedsRightSideSearchBar
