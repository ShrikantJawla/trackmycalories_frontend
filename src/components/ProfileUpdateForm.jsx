import {
  Button,
  CloseButton,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../redux/auth/auth.actions'
let initialValue = {
  firstName: '',
  lastName: '',
  occupation: '',
  socialLinks: {
    facebook: '',
    email: '',
    twitter: '',
    linkedin: '',
  },
  measurement: {
    age: '',
    height: '',
    weight: '',
  },
}
const ProfileUpdateForm = ({ isVisible, toggleShowHide }) => {
  const { userInfo } = useSelector((state) => state.auth)
  const [profileInfo, setProfileInfo] = useState(initialValue)
  const dispatch = useDispatch()

  useEffect(() => {
    setProfileInfo({ ...profileInfo, ...userInfo })
  }, [isVisible])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateProfile(profileInfo))
    toggleShowHide()
  }

  if (isVisible)
    return (
      <VStack
        w="480px"
        h="500px"
        position="fixed"
        top="11%"
        left="35vw"
        rounded="10px"
        bg="linear-gradient(to right bottom,rgba(116, 200, 237, 1),rgba(100, 155, 186, 1))"
        borderTop="var(--borderTop)"
        borderBottom="var(--borderBottom)"
        boxShadow="var(--boxShadow3)"
        px="30px"
        py="20px"
        spacing="15px"
      >
        <CloseButton
          alignSelf="flex-end"
          fontSize={16}
          onClick={toggleShowHide}
        />
        <Text
          w="full"
          textAlign="center"
          fontSize={25}
          fontWeight="700"
          color="white"
          opacity="0.8"
        >
          Update Profile
        </Text>
        <StyledForm onSubmit={handleSubmit}>
          <HStack>
            <FormControl>
              <Input
                variant="filled"
                placeholder="FirstName"
                value={profileInfo.firstName}
                onChange={({ target: { value } }) =>
                  setProfileInfo({ ...profileInfo, firstName: value })
                }
              />
            </FormControl>
            <FormControl>
              <Input
                variant="filled"
                placeholder="LastName"
                value={profileInfo.lastName}
                onChange={({ target: { value } }) =>
                  setProfileInfo({ ...profileInfo, lastName: value })
                }
              />
            </FormControl>
          </HStack>
          <FormControl>
            <Input
              variant="filled"
              placeholder="occupation"
              value={profileInfo?.occupation}
              onChange={({ target: { value } }) =>
                setProfileInfo({ ...profileInfo, occupation: value })
              }
            />
          </FormControl>
          <HStack>
            <FormControl>
              <Input
                variant="filled"
                placeholder="facebook"
                value={profileInfo?.socialLinks?.facebook}
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    socialLinks: {
                      ...profileInfo?.socialLinks,
                      facebook: value,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl>
              <Input
                variant="filled"
                placeholder="email"
                value={profileInfo?.socialLinks?.email}
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    socialLinks: {
                      ...profileInfo?.socialLinks,
                      email: value,
                    },
                  })
                }
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <Input
                variant="filled"
                value={profileInfo?.socialLinks?.twitter}
                placeholder="twitter"
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    socialLinks: {
                      ...profileInfo?.socialLinks,
                      twitter: value,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl>
              <Input
                variant="filled"
                placeholder="linkedin"
                value={profileInfo?.socialLinks?.linkedin}
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    socialLinks: {
                      ...profileInfo?.socialLinks,
                      linkedin: value,
                    },
                  })
                }
              />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <Input
                variant="filled"
                value={profileInfo?.measurement?.age}
                type="number"
                placeholder="age in years"
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    measurement: {
                      ...profileInfo?.measurement,
                      age: value,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl>
              <Input
                variant="filled"
                value={profileInfo?.measurement?.height}
                type="number"
                placeholder="height in cm"
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    measurement: {
                      ...profileInfo?.measurement,
                      height: value,
                    },
                  })
                }
              />
            </FormControl>
            <FormControl>
              <Input
                variant="filled"
                value={profileInfo?.measurement?.weight}
                type="number"
                placeholder="weight in kg"
                onChange={({ target: { value } }) =>
                  setProfileInfo({
                    ...profileInfo,
                    measurement: {
                      ...profileInfo?.measurement,
                      weight: value,
                    },
                  })
                }
              />
            </FormControl>
          </HStack>
          <Button
            type="submit"
            w="40%"
            m="auto"
            fontSize={17}
            fontWeight={700}
            color="#0d6f98"
          >
            SUBMIT
          </Button>
        </StyledForm>
      </VStack>
    )
}

export default ProfileUpdateForm

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
