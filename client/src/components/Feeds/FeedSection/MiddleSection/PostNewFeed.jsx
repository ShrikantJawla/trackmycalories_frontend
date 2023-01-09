import React, { useState } from 'react'
import { FcPicture } from 'react-icons/fc'
import { MdOutlineVideoCameraBack } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {
  Avatar,
  Button,
  FormLabel,
  HStack,
  Icon,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { makeAPost } from '../../../../redux/feeds/feeds.actions'

const PostNewFeed = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const { loading, error } = useSelector((s) => s.feeds)
  const [text, setText] = useState('')
  const [picture, setPicture] = useState('')
  const { userInfo } = useSelector((s) => s.auth)

  const handleSubmit = () => {
    if (text === '' || picture === '') {
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
    formData.append('image', picture)
    setText('')
    dispatch(makeAPost(formData))
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
      spacing={0}
      h={'100px'}
      px="14px"
      bg={'var(--cardBackground)'}
      rounded={'13px'}
    >
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
      <HStack h="38%" w={'full'} align={'center'} justify="center">
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
      </HStack>
    </VStack>
  )
}

export default PostNewFeed
