import {
  Avatar,
  Badge,
  Box,
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiTwotoneLike, AiTwotoneDislike } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../redux/auth/auth.actions'
import uuid from 'react-uuid'
import {
  addProductLikesOrDislike,
  addProductReview,
  getSingleShopProductReviews,
} from '../../../redux/shopProducts/shop.actions'
import Pagination from '../categoryDisplay/Pagination'

const ReviewOrComments = ({ product }) => {
  const dispatch = useDispatch()
  const [commentInput, setCommentInput] = useState('')
  const [ratingsInput, setRatingsInput] = useState(0)
  const [buttonColor, setButtonColor] = useState(0)
  const [page, setPage] = useState(1)
  const { userInfo } = useSelector((s) => s.auth)
  const { singleProductReviews } = useSelector((s) => s.shop)
  useEffect(() => {
    dispatch(getUser())
    if (product._id) dispatch(getSingleShopProductReviews(product._id, page))

    //users current rating stars
    if (singleProductReviews && userInfo) {
      singleProductReviews.forEach((review) => {
        if (review.user._id === userInfo._id) {
          setRatingsInput(+review.reviewStars)
          setButtonColor(+review.reviewStars)
        }
      })
    }
  }, [product._id, page])

  //This function is for changing page of comments
  const changePage = (newPage) => {
    setPage(newPage)
  }

  //This is to take rating input from clicking button
  const handleRating = (rating) => {
    setButtonColor(rating)
    setRatingsInput(rating)
  }

  //this is to handle comment input submit on enter
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addProductReview(
        {
          product: product._id,
          comment: commentInput,
          reviewStars: ratingsInput,
        },
        product._id,
      ),
    )
    setCommentInput('')
    setRatingsInput(0)
  }
  return (
    <VStack w="full" h="300px">
      {/* Title */}
      <VStack w="full" py="15px">
        <Text fontSize={18} fontWeight={600}>
          REVIEWS
        </Text>
        <Box w="full" h="1px" bg="grey" />
      </VStack>
      {/* Review Starts */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        w="full"
        justify="space-evenly"
        px="40px"
        py="20px"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          w={{ base: '', md: '400px' }}
        >
          <VStack w={{ base: 'full', lg: '40%' }}>
            <Text w="full" fontSize={25} fontWeight="bold">
              4.75/5
            </Text>
            <Box w="full" display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <Icon
                    as={AiFillStar}
                    fontSize={25}
                    key={uuid()}
                    color={'teal.500'}
                  />
                ))}
            </Box>
            <Box w="full" as="span" color="grey">
              {product && product['widget-lite-count']}Reviews
            </Box>
          </VStack>
          <VStack w={{ base: '80%', lg: '60%' }}>
            {[
              [2, 5],
              [4, 4],
              [6, 3],
              [8, 2],
              [10, 1],
            ].map((ele, ind) => (
              <HStack w="full" key={uuid()}>
                <Badge fontSize={14}>
                  {ele[1]}
                  <Icon as={AiFillStar} />
                </Badge>
                <Progress
                  value={
                    getReviews(product, `widget-lite-score-detailed ${ele[0]}`)
                      .reviewPercentageValue
                  }
                  w="full"
                  size="sm"
                />
                <Box as="span">
                  {
                    getReviews(product, `widget-lite-score-detailed ${ele[0]}`)
                      .reviewPercentageString
                  }
                </Box>
              </HStack>
            ))}
          </VStack>
        </Stack>
      </Stack>

      {/* Add a review */}
      <VStack w="full" justify="center" py="10px" px="5px">
        <HStack w="50%" justify="center">
          <Text mr="10px" fontSize={17} fontWeight={600}>
            Add rating
          </Text>
          {[1, 2, 3, 4, 5].map((ele) => (
            <Button
              onClick={(e) => handleRating(ele)}
              key={ele + `${uuid()}${Math.random()}`}
              w="40px"
              colorScheme={buttonColor === ele ? 'orange' : 'blackAlpha'}
              h="40px"
            >
              {ele}
            </Button>
          ))}
        </HStack>

        {/* Comment input text */}
        <HStack w="80%" align="center" justify="center" px="5px" py="15px">
          <Avatar
            border="1px solid grey"
            src={
              userInfo &&
              `http://localhost:8080/user/auth/profile/${userInfo?.img}`
            }
          ></Avatar>
          <FormControl
            as="form"
            onSubmit={handleSubmit}
            h="90px"
            border="1px solid gray"
            rounded="5px"
          >
            <Input
              w="full"
              h="40px"
              onChange={({ target: { value } }) => setCommentInput(value)}
              value={commentInput}
              placeholder="Add or update a comment here"
              p="5px"
              rounded="0"
              variant="unstyled"
              type="text"
            />
          </FormControl>
        </HStack>
      </VStack>

      {/* Populating reviews  */}
      <Box w="full" h="1px" bg="grey" />
      {singleProductReviews &&
        singleProductReviews.map((comment, ind) => (
          <VStack key={uuid()} w="full" px="70px" py="10px" spacing={4}>
            <HStack justify="space-between" w="full" pr="25px">
              <HStack>
                <Avatar
                  src={`http://localhost:8080/user/auth/profile/${comment?.user?.img}`}
                />
                <VStack>
                  <Text fontWeight={700}>Shrikant Jawla</Text>
                  <Box w="full" display="flex" mt="2" alignItems="center">
                    {Array(comment.reviewStars && +comment.reviewStars)
                      .fill('')
                      .map((_, i) => (
                        <Icon
                          as={AiFillStar}
                          fontSize={20}
                          key={uuid()}
                          color={'yellow.500'}
                        />
                      ))}
                  </Box>
                </VStack>
              </HStack>
              <HStack>
                <HStack>
                  <Box as="span">{comment?.likes?.length}</Box>
                  <Icon
                    as={AiTwotoneLike}
                    fontSize={20}
                    color={comment?.likes?.length > 0 ? 'red' : 'black'}
                    cursor="pointer"
                    onClick={() =>
                      dispatch(
                        addProductLikesOrDislike(
                          'like',
                          comment._id,
                          product._id,
                        ),
                      )
                    }
                  />
                </HStack>
                <HStack>
                  <Box as="span">{comment?.disLikes?.length}</Box>
                  <Icon
                    as={AiTwotoneDislike}
                    fontSize={20}
                    color={comment?.disLikes?.length > 0 ? 'red' : 'black'}
                    cursor="pointer"
                    onClick={() =>
                      dispatch(
                        addProductLikesOrDislike(
                          'dislike',
                          comment._id,
                          product._id,
                        ),
                      )
                    }
                  />
                </HStack>
              </HStack>
            </HStack>
            <Text w="full">{comment?.comment}</Text>
          </VStack>
        ))}
      <VStack w="full">
        <Pagination pageNumber={page} changePage={changePage} />
      </VStack>
    </VStack>
  )
}

export default ReviewOrComments

function getReviews(product, nameOfKey) {
  let reviewPercentageString = '',
    reviewPercentageValue = 0
  if (product[nameOfKey]) {
    reviewPercentageString = product[nameOfKey]
  } else {
    reviewPercentageString = '0%'
  }
  if (product[nameOfKey]) {
    reviewPercentageValue = product[nameOfKey].replace('%', '')
  } else {
    reviewPercentageValue = 0
  }
  return { reviewPercentageString, reviewPercentageValue }
}
