import { Avatar, Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Calender from '../components/Calendar'
import LineChart from '../components/MiddleSection/Charts/LineChart'
import CaloriesAndMacro from '../components/CaloriesAndMacro'
import { BiEditAlt } from 'react-icons/bi'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalEnergy, macroTargets } from '../assets/userProfileData'
import ProfileUpdateForm from '../components/ProfileUpdateForm'
import { getUser } from '../redux/auth/auth.actions'
import UpdateProfilePicture from '../components/UpdateProfilePicture'
import MicronutrientsBottomDisplay from '../components/MiddleSection/MicronutrientsBottomDisplay'

const UserProfile = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [uploadImgVisible, setUploadImgVisible] = useState(true)
  const dispatch = useDispatch()
  const { foodItemsInList, baseValue } = useSelector((state) => state.diary)
  const { userInfo } = useSelector((state) => state.auth)
  if (foodItemsInList) var { per } = getTotalEnergy(foodItemsInList, baseValue)
  if (foodItemsInList) var { targets } = macroTargets(foodItemsInList, per)
  const toggleProfileUpdateForm = () => setIsVisible((prev) => (prev = !prev))

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const handleToggleUploadBox = () => {
    setUploadImgVisible((prev) => (prev = !prev))
  }

  return (
    <WrapperBox
      style={{ marginLeft: '6%' }}
      w="94%"
      bg="var(--backgroundColor)"
    >
      <Sidebar location="userprofile" />
      <VStack w="full" spacing={0}>
        <Image
          objectFit="cover"
          w="full"
          h="170px"
          src="https://images.pexels.com/photos/5546907/pexels-photo-5546907.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <HStack
          position="relative"
          bg="#e9e8e8"
          w="full"
          justify="left"
          pl="130px"
          spacing="30px"
        >
          {/* Edit profile Form */}
          <HStack position="absolute" left={1} top="1">
            <Text
              p="5px"
              fontSize={13}
              fontWeight="bold"
              color="#426696"
              textDecoration="underline"
              cursor="pointer"
              onClick={toggleProfileUpdateForm}
            >
              Edit Profile
            </Text>
            <BiEditAlt />
          </HStack>

          {/* Avatar */}
          <HStack position="relative">
            <Avatar
              position="relative"
              top="-14"
              w="180px"
              h="180px"
              borderTop="3px solid yellow"
              borderRight="3px solid red"
              borderBottom="3px solid green"
              borderLeft="3px solid orange"
              boxShadow="var(--boxShadow)"
              src={userInfo?.img}
            />
            {/* upload image dialoge box */}
            <UpdateProfilePicture
              uploadImgVisible={uploadImgVisible}
              toggleBox={handleToggleUploadBox}
            />
          </HStack>
          {/* User Info */}
          <VStack style={{ marginTop: '-30px' }} w="420px" spacing={0}>
            <Text
              fontSize={28}
              fontStyle="italic"
              fontWeight="700"
              fontFamily={`'Poppins', sans-serif`}
              w="full"
            >
              {userInfo?.firstName} {userInfo?.lastName}
            </Text>
            <Text fontWeight={600} fontSize={17} w="full">
              {userInfo?.occupation}
            </Text>
            <VStack fontSize={14} w="400px" spacing="-4px">
              {['facebook', 'email', 'linkedin', 'twitter'].map((ele, ind) => (
                <Text fontWeight={500} w="full" textAlign="left">
                  {userInfo.socialLinks && userInfo.socialLinks[ele]}
                </Text>
              ))}
            </VStack>
          </VStack>
          <HStack w="full" justify="center" spacing={5}>
            <VStack spacing={0}>
              <Text fontSize={12}>Height</Text>
              <Text fontSize={20} fontWeight="bold">
                {userInfo?.measurement?.height} cm
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize={12}>Weight</Text>
              <Text fontSize={20} color="red" fontWeight="bold">
                {userInfo?.measurement?.weight} kg
              </Text>
            </VStack>
            <VStack spacing={0}>
              <Text fontSize={12}>Age</Text>
              <Text fontSize={20} fontWeight="bold">
                {userInfo?.measurement?.age} years
              </Text>
            </VStack>
          </HStack>
        </HStack>
        <HStack w="full" px="20px" pt="10px" justify="space-between">
          <LineChart wid="40%" title="Daywise Calorie cunsumption" />
          <VStack w="20%">
            <CaloriesAndMacro
              title={targets[0].title}
              val={targets[0].value.toFixed(2)}
              wid="100%"
            />
            <CaloriesAndMacro
              title={targets[1].title}
              val={targets[1].value.toFixed()}
              wid="100%"
            />
            <CaloriesAndMacro
              title={targets[2].title}
              val={targets[2].value.toFixed()}
              wid="100%"
            />
          </VStack>
          <Calender />
        </HStack>
      </VStack>
      <MicronutrientsBottomDisplay />
      <ProfileUpdateForm
        isVisible={isVisible}
        toggleShowHide={toggleProfileUpdateForm}
      />
    </WrapperBox>
  )
}

export default UserProfile

const WrapperBox = styled(VStack)`
  .editIcon {
    position: absolute;
    top: -48px;
    left: 245px;
    font-size: 17px;
  }
`
