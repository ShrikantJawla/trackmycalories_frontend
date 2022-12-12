import React from 'react'
import { VStack, HStack, Box } from '@chakra-ui/react'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import FeedsRightSideSearchBar from '../../components/Feeds/rightSidebar/Feeds.RightSide.SearchBar'
import FeedsUsersSuggestionsList from '../../components/Feeds/rightSidebar/Feeds.UsersSuggestionsList'
import FeedConnectionsList from '../../components/Feeds/rightSidebar/Feed.ConnectionsList'

const Feeds = () => {
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
        <VStack w="67%" h="full" bg="var(--cardBackground)"></VStack>

        {/* RightSidebar */}
        <VStack
          w="26%"
          h="full"
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
