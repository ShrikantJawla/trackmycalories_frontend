import { Avatar, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BiEditAlt } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import UsersListsDialog from './Feeds/rightSidebar/UsersListsDialog'

const ProfileSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { userInfo } = useSelector((state) => state.auth)

  const toggleVisiblity = () => setIsVisible((p) => (p = !p))

  return (
    <VStack
      w="full"
      minH="30vh"
      px={2}
      // bg="var(--color3)"
      bg="var(--cardBackground)"
      py="7px"
      rounded="10px"
      fontFamily={`'Poppins', sans-serif`}
      boxShadow="var(--boxShadow)"
    >
      {/* Profile Heading */}
      <HStack w="full" justifyContent="space-between">
        <HStack>
          <Text fontSize={17} fontWeight="600" color="#3f3d3d">
            My Profile
          </Text>
          <UsersListsDialog
            toggleVisiblity={toggleVisiblity}
            isVisible={isVisible}
            title="Pending connect requests"
            users={userInfo.connectReqReceivedPending}
            type="connectionRequest"
            displayIconOrtext={IoNotificationsOutline}
          />
        </HStack>
        <Link to="/userprofile">
          <BiEditAlt cursor="pointer" />
        </Link>
      </HStack>
      <VStack spacing={0} w="full">
        <Avatar size="lg" src={userInfo?.img} />
        <Text fontSize={13} fontWeight={500}>
          {userInfo.firstName && userInfo.firstName + ' ' + userInfo.lastName}
        </Text>
      </VStack>
      <HStack w="full" justify="space-evenly">
        <VStack spacing={0}>
          <Text fontSize={9}>Height</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.height} cm
          </Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize={9}>Weight</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.weight} kg
          </Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize={9}>Age</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.age} years
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default ProfileSection
