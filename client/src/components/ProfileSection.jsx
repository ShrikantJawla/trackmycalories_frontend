import { Avatar, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { BiEditAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const ProfileSection = () => {
  const { userInfo } = useSelector((state) => state.auth)
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
      <HStack w="full" justifyContent="space-between">
        <Text fontSize={17} fontWeight="600" color="#3f3d3d">
          My Profile
        </Text>
        <Link to="/userprofile">
          <BiEditAlt cursor="pointer" />
        </Link>
      </HStack>
      <VStack spacing={0} w="full">
        <Avatar
          size="lg"
          src={`${process.env.REACT_APP_SERVER_BASE_URL}${process.env.REACT_APP_IMAGE_BASE_ROUTE}${userInfo?.img}`}
        />
        <Text fontSize={13} fontWeight={500}>
          {userInfo.firstName && userInfo.firstName + ' ' + userInfo.lastName}
        </Text>
      </VStack>
      <HStack w="full" justify="space-evenly">
        <VStack spacing={0}>
          <Text fontSize={9}>Height</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.height}
          </Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize={9}>Weight</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.weight}
          </Text>
        </VStack>
        <VStack spacing={0}>
          <Text fontSize={9}>Age</Text>
          <Text fontSize={13} fontWeight="bold">
            {userInfo?.measurement?.age}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default ProfileSection
