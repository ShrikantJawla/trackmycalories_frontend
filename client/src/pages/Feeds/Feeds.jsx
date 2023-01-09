import React, { useEffect, useState } from 'react'
import { VStack, HStack, Box } from '@chakra-ui/react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import FeedsRightSideSearchBar from '../../components/Feeds/rightSidebar/Feeds.RightSide.SearchBar'
import FeedsUsersSuggestionsList from '../../components/Feeds/rightSidebar/Feeds.UsersSuggestionsList'
import FeedConnectionsList from '../../components/Feeds/rightSidebar/Feed.ConnectionsList'
import PostNewFeed from '../../components/Feeds/FeedSection/MiddleSection/PostNewFeed'
import SinglePost from '../../components/Feeds/FeedSection/MiddleSection/SinglePost'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFeeds } from '../../redux/feeds/feeds.actions'
import { getUser } from '../../redux/auth/auth.actions'

const Feeds = () => {
  const dispatch = useDispatch()
  const { loading, error, allPosts } = useSelector((s) => s.feeds)

  useEffect(() => {
    dispatch(getAllFeeds())
  }, [])

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <>
      <Sidebar location="users-feeds" />
      <StyledHStack
        p="5px"
        w={{ lg: '94%' }}
        h="100vh"
        justifyContent="center"
        gap="5px"
        bg="linear-gradient(to right top, #65dfc9, #6cdbeb)"
      >
        <VStack
          w="67%"
          h="full"
          bg="var(--cardBackground)"
          overflowY="scroll"
          className="hidden_scrollbar"
          pt="10px"
        >
          <PostNewFeed />
          <Box width={'520px'} h="0.3px" bg="black" />
          {allPosts &&
            allPosts.map((feed) => <SinglePost key={feed._id} {...feed} />)}
        </VStack>

        {/* RightSidebar */}
        <VStack
          w="26%"
          h="100vh"
          p="5px"
          bg="var(--cardBackground)"
          py="10px"
          spacing={3}
        >
          <FeedsRightSideSearchBar />
          <FeedsUsersSuggestionsList />
          <Box as="hr" bg="gray.400" h="0.5px" w="90%" />
          <FeedConnectionsList />
        </VStack>
      </StyledHStack>
    </>
  )
}

export default Feeds

const StyledHStack = styled(HStack)`
  margin-left: 6%;
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`
