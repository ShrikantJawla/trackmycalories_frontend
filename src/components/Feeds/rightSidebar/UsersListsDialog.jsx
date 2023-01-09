import {
  CloseButton,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import FeedSingleUserInDialog from './Feed.SingleUserInDialog'
import { useSelector } from 'react-redux'
import { MdOutlineEmojiPeople } from 'react-icons/md'

const UsersListsDialog = ({
  isVisible,
  toggleVisiblity,
  title,
  users,
  type,
  displayIconOrtext,
}) => {
  const { userInfo } = useSelector((s) => s.auth)

  return (
    <>
      {/* Text or Icon to open dialog box on click */}
      {/* If length is empty icon should be normal else it will notify some message */}
      {displayIconOrtext ? (
        <HStack position="relative" spacing={0}>
          <Icon
            cursor="pointer"
            onClick={toggleVisiblity}
            fontSize={21}
            as={displayIconOrtext}
          />
          {users?.length && (
            <Text fontWeight={600} color="red">
              {users.length}
            </Text>
          )}
        </HStack>
      ) : (
        <Text
          cursor="pointer"
          color="purple"
          onClick={toggleVisiblity}
          fontWeight={500}
        >
          See All
        </Text>
      )}

      {/* Dialog box */}
      {isVisible && (
        <StyledVStack
          w="480px"
          h="400px"
          rounded="10px"
          position="fixed"
          top="16%"
          left={{ base: '0', lg: '35%' }}
          boxShadow="lg"
          bg="linear-gradient(to right top, #65dfc9, #6cdbeb)"
          p="7px"
        >
          <HStack w="full" justify="space-between" px="8px" py="10px">
            <Text fontWeight="bold">{title}</Text>
            <CloseButton fontSize={14} onClick={toggleVisiblity} />
          </HStack>
          <Divider />
          <StyledVStack w="full" overflowY="scroll">
            {!users?.length ? (
              <VStack>
                <Icon
                  color={users?.length ? 'green' : 'red'}
                  fontSize={28}
                  as={MdOutlineEmojiPeople}
                />
                <Text fontWeight="bold" color="red.500">
                  {type === 'connections'
                    ? 'Add anyone to your connection!'
                    : type === 'connectionRequest'
                    ? 'No pending request!'
                    : 'Refresh again to see all suggestions'}
                </Text>
              </VStack>
            ) : (
              users?.map((ele) => (
                <FeedSingleUserInDialog
                  loginedUser={userInfo}
                  type={type}
                  user={ele}
                  key={ele?._id}
                />
              ))
            )}
          </StyledVStack>
        </StyledVStack>
      )}
    </>
  )
}

export default UsersListsDialog

const StyledVStack = styled(VStack)`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: purple;
  }
`
