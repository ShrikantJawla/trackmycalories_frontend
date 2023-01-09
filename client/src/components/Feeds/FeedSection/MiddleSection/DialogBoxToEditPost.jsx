import {
  Avatar,
  Button,
  CloseButton,
  Divider,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editAPost } from '../../../../redux/feeds/feeds.actions'

const DialogBoxToEditPost = ({ postId, toggleVisibilty }) => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { loading, error } = useSelector((s) => s.feeds)
  const [text, setText] = useState('')
  //   const [picture, setPicture] = useState('')
  const { userInfo } = useSelector((s) => s.auth)
  const handleSubmit = () => {
    if (text === '') {
      return toast({
        title: 'Input error!',
        description: 'Any of the inputs is empty!',
        isClosable: true,
        duration: 4000,
        position: 'top',
        status: 'warning',
      })
    }
    const formData = new FormData()
    formData.append('feedText', text)
    // formData.append('image', picture)
    setText('')
    dispatch(editAPost(postId, text))
    toggleVisibilty()
    if (error !== '') {
      return toast({
        title: 'Error!',
        description: error,
        isClosable: true,
        duration: 4000,
        position: 'top',
        status: 'error',
      })
    }
  }
  return (
    <VStack
      width={'540px'}
      pos="fixed"
      top={'25%'}
      left={'50%'}
      transform={'translate(-50%, -25%)'}
      spacing={0}
      h={'150px'}
      px="14px"
      bg={'white'}
      rounded={'13px'}
    >
      <HStack w={'full'} py="10px">
        <Text w={'full'} fontSize={16} fontWeight="bold">
          Edit Post
        </Text>
        <CloseButton fontSize={17} onClick={toggleVisibilty} />
      </HStack>
      <Divider />
      <HStack h="62%" w={'full'}>
        <Avatar size={'md'} src={userInfo.img} />
        <Input
          type={'text'}
          rounded="200"
          height={'40px'}
          variant={'unstyled'}
          outline={'1px solid black'}
          px={'10px'}
          onChange={({ target: { value } }) => setText(value)}
        />
        <Button
          variant={'outline'}
          w="70px"
          colorScheme={'teal'}
          rounded="18px"
          onClick={handleSubmit}
          isLoading={loading}
        >
          Post
        </Button>
      </HStack>

      {/* Image update feature is yet to added in backend */}

      {/* <HStack h="38%" w={'full'} align={'center'} justify="center">
        <HStack
          display="flex"
          justifyContent={'center'}
          alignItems="center"
          h="full"
        >
          <FormLabel
            mt="8px"
            cursor={'pointer'}
            fontSize={14}
            gap={'5px'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
          >
            <Icon as={FcPicture} fontSize={30} />
            <Input
              display={'none'}
              id="inputTag"
              type={'file'}
              onChange={({ target }) => setPicture(target.files[0])}
            />
            Image
          </FormLabel>
          <HStack justifyContent={'center'} alignItems="center">
            <Icon
              as={MdOutlineVideoCameraBack}
              cursor={'pointer'}
              fontSize={25}
              color="green"
            />
            <Text fontWeight={600} fontSize={15}>
              Video
            </Text>
          </HStack>
        </HStack>
      </HStack> */}
    </VStack>
  )
}

export default DialogBoxToEditPost
