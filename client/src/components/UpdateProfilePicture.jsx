import { Button, CloseButton, HStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfilePicture } from '../redux/auth/auth.actions'

const UpdateProfilePicture = ({ uploadImgVisible, toggleBox }) => {
  const { updateProfileError } = useSelector((state) => state.auth)
  const toast = useToast()
  const [profilePhoto, setProfilePhoto] = useState(null)
  const dispatch = useDispatch()
  const formData = new FormData()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (profilePhoto === null) {
      return
    }
    formData.append('avatar', profilePhoto)
    dispatch(updateProfilePicture(formData))
    if (updateProfileError === false) {
      toast({
        position: 'top',
        title: 'Image has uploaded successfully!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      toggleBox()
    }
    setProfilePhoto(null)
  }

  if (uploadImgVisible)
    return (
      <Button
        variant="outline"
        // boxShadow="var(--boxShadow3)"
        position="absolute"
        top="72%"
        left="11.3%"
        color="#1b4d62"
        fontSize={13}
        fontWeight={700}
        onClick={toggleBox}
      >
        Upload image
      </Button>
    )
  else
    return (
      <HStack
        bg="linear-gradient(to right bottom,rgba(116, 200, 237, 1),rgba(100, 155, 186, 1))"
        borderTop="var(--borderTop)"
        borderBottom="var(--borderBottom)"
        boxShadow="var(--boxShadow3)"
        position="absolute"
        rounded="10px"
        top="70%"
        left="-70%"
      >
        <form onSubmit={handleSubmit} style={{ padding: '6px', width:'390px' }}>
          <input
            type="file"
            name="avatar"
            onChange={({ target: { files } }) => setProfilePhoto(files[0])}
          />
          <Button type="submit">upload</Button>
        </form>
        <CloseButton onClick={toggleBox} />
      </HStack>
    )
}

export default UpdateProfilePicture
