import React, { useState } from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Spacer,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import { FaRegComments } from 'react-icons/fa'
import { BiRepost } from 'react-icons/bi'
import { IoIosSend } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import {
  addAComment,
  deleteAPost,
  getSingleFeed,
  likeAPost,
} from '../../../../redux/feeds/feeds.actions'
import DisplayBoxOfCommentsAndLikes from './DisplayBoxOfCommentsAndLikes'
import DialogBoxToEditPost from './DialogBoxToEditPost'
import {
  makeFollowRequest,
  makeUnFollowRequest,
} from '../../../../redux/connectAndFollow/connectAndFollow.actions'

const SinglePost = ({
  _id: postId,
  user: { firstName, lastName, img, _id },
  image,
  feedText,
  comments,
  likes,
}) => {
  const [commentText, setCommentText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [dialogBoxVisiblity, setDialogBoxVisiblity] = useState(false)
  const { userInfo } = useSelector((s) => s.auth)
  const toast = useToast()
  const dispatch = useDispatch()
  const [choise, setChoise] = useState('')
  const [
    editPostDialogBoxVisibility,
    setEditPostDialogBoxVisibility,
  ] = useState(false)

  const SubmitComment = (e, id) => {
    e.preventDefault()
    if (commentText === '') {
      return toast({
        position: 'top',
        title: 'Input error!',
        description: 'Please input your comment!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
    dispatch(addAComment(id, { comment: commentText }))
    setCommentText('')
    setIsVisible(true)
  }

  return (
    <>
      <VStack
        boxShadow={'lg'}
        width={'540px'}
        h={'fit-content'}
        bg={'var(--cardBackground)'}
        rounded={'13px'}
        py="10px"
      >
        {/* Top Section including Avatar and name */}
        <HStack w="full" px="7px" pr="9px" h="90px">
          <HStack w="88%">
            <Avatar src={img && img} />
            <VStack spacing={0} w="90%">
              <Text h="fit-content" fontWeight={'bold'} w="full">
                {firstName && firstName} {lastName && lastName}
              </Text>
              <Text h="fit-content" w={'99%'} m="auto" fontSize={14}>
                {feedText && feedText}
              </Text>
            </VStack>
          </HStack>
          {/* Follow button */}
          {userInfo._id !== _id ? (
            followOrUnFollowBtns(userInfo, _id, dispatch)
          ) : (
            <HStack w={'fit-content'}>
              <Icon
                onClick={() => setEditPostDialogBoxVisibility(true)}
                cursor={'pointer'}
                as={CiEdit}
                fontSize={25}
              />
              <Icon
                color={'red'}
                cursor={'pointer'}
                as={MdDelete}
                fontSize={25}
                onClick={() => dispatch(deleteAPost(postId))}
                _hover={{
                  transform: 'scale(1.2)',
                  transition: 'all 0.3s linear',
                }}
              />
            </HStack>
          )}
        </HStack>
        {/* Post Image Section  */}
        <Box h="420px" w="full">
          <Image h="full" w="full" objectFit={'cover'} src={image && image} />
        </Box>
        {/* Avatar, Like and comment Section */}
        <VStack w="full" px="7px" h="80px">
          {/* Avatar stack and text */}
          <HStack w="full">
            <HStack>
              <AvatarGroup size="xs" max={2}>
                {likes &&
                  likes.map((ele) => (
                    <Avatar name={ele.firstName} src={ele.img} />
                  ))}
              </AvatarGroup>
              <Text
                onClick={() => {
                  dispatch(getSingleFeed(postId))
                  setDialogBoxVisiblity(true)
                  if (choise === 'isComments' || choise === '')
                    setChoise('isLikes')
                }}
                fontSize={12}
                _hover={{ textDecor: 'underline', cursor: 'pointer' }}
              >
                {namesOfPeopleWhoLiked(likes)}
              </Text>
            </HStack>
            <Spacer />
            {/* Comments text */}
            <Text
              onClick={() => {
                dispatch(getSingleFeed(postId))
                setDialogBoxVisiblity(true)
                if (choise === 'isLikes' || choise === '')
                  setChoise('isComments')
              }}
              fontSize={12}
              _hover={{ textDecor: 'underline', cursor: 'pointer' }}
            >
              Comments
            </Text>
          </HStack>
          <Box width={'520px'} h="0.3px" bg="black" />
          {/* Like and comment Section */}
          <HStack justify={'space-between'} w="full" px="10px">
            <HStack
              onClick={() => dispatch(likeAPost(postId))}
              spacing={1}
              cursor="pointer"
            >
              <Icon
                fontSize={21}
                color={checkLoginedUser(userInfo._id, likes) ? 'red' : 'black'}
                as={
                  checkLoginedUser(userInfo._id, likes)
                    ? AiFillLike
                    : AiOutlineLike
                }
              />
              <Text fontWeight={'bold'}>
                {checkLoginedUser(userInfo._id, likes) ? 'Liked' : 'Like'}
              </Text>
            </HStack>
            <HStack
              onClick={() => setIsVisible(true)}
              spacing={1}
              cursor="pointer"
            >
              <Icon fontSize={21} as={FaRegComments} />
              <Text fontWeight={'bold'}>Comment</Text>
            </HStack>
            <HStack spacing={1} cursor="pointer">
              <Icon fontSize={21} as={BiRepost} />
              <Text fontWeight={'bold'}>Repost</Text>
            </HStack>
            <HStack spacing={1} cursor="pointer">
              <Icon fontSize={21} as={IoIosSend} />
              <Text fontWeight={'bold'}>Send</Text>
            </HStack>
          </HStack>
        </VStack>
        {/* Detailed comment section  */}
        <VStack w="full">
          <HStack
            as={'form'}
            onSubmit={(e) => SubmitComment(e, postId)}
            w="92%"
            m={'auto'}
            h={'fit-content'}
          >
            <Avatar src={userInfo.img} size="sm" alignSelf={'flex-start'} />
            <Input
              variant={'outline'}
              h="40px"
              outline={'1px solid teal'}
              value={commentText}
              onChange={({ target: { value } }) => setCommentText(value)}
            />
            <Button
              type="submit"
              w={'100px'}
              rounded={'10px'}
              colorScheme="teal"
              fontSize={'14px'}
              fontWeight="bold"
            >
              Comment
            </Button>
          </HStack>
          {isVisible &&
            comments &&
            comments.map((ele) => (
              <HStack w={'full'} px="12px" key={ele._id}>
                <Avatar size={'sm'} src={ele.user.img} />
                <VStack
                  spacing={0}
                  bg="gray.200"
                  w="90%"
                  p="10px"
                  rounded={'10px'}
                >
                  <Text h="fit-content" fontWeight={'bold'} w="full">
                    {ele.user.firstName} {ele.user.lastName}
                  </Text>
                  <Text
                    h="fit-content"
                    fontSize={12}
                    w="full"
                    textColor={'gray.700'}
                    style={{ marginBottom: '8px' }}
                  >
                    {ele.user.occupation}
                  </Text>
                  <Text h="fit-content" fontSize={14} w="full">
                    {ele.comment}
                  </Text>
                </VStack>
              </HStack>
            ))}
        </VStack>
      </VStack>
      {/* Display box to display List of comments and likes */}
      {dialogBoxVisiblity && (
        <DisplayBoxOfCommentsAndLikes
          isVisible={dialogBoxVisiblity}
          toggleVisiblity={() => setDialogBoxVisiblity(false)}
          choise={choise}
        />
      )}

      {/* Display box to edit any feed */}
      {editPostDialogBoxVisibility && (
        <DialogBoxToEditPost
          postId={postId}
          toggleVisibilty={() => setEditPostDialogBoxVisibility(false)}
        />
      )}
    </>
  )
}

export default SinglePost

function checkLoginedUser(userId, searchedIdArray) {
  let flag = false
  searchedIdArray.forEach((ele) => {
    if (ele._id === userId) flag = true
  })
  return flag
}


function namesOfPeopleWhoLiked(likesArray) {
  if (likesArray.length > 1) {
    return `${likesArray[0].firstName} and ${likesArray.length - 1} others`
  } else if (likesArray.length === 0) {
    return `0 Likes`
  } else {
    return `${likesArray[0].firstName} liked this post`
  }
}

//Buttons to identify whether follow or unfollow which button will come with dispatch

function followOrUnFollowBtns(user, postEditorId, dispatch) {
  let followStatus = false
  user?.following?.forEach((element) => {
    if (element?._id === postEditorId) followStatus = true
  })
  if (followStatus) {
    return (
      <Button
        size="sm"
        onClick={() => dispatch(makeUnFollowRequest({ userId: postEditorId }))}
        variant="ghost"
        fontWeight={700}
      >
        Unfollow
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        onClick={() => dispatch(makeFollowRequest({ userId: postEditorId }))}
        variant="ghost"
        fontWeight={700}
      >
        +Follow
      </Button>
    )
  }
}
