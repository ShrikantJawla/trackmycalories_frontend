import { VStack } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import CalendarDiv from './Calendar'
import ProfileSection from './ProfileSection'
import Scheduled from './Scheduled/Scheduled'

const RightSidebar = () => {
  return (
    <WrapperVStack
      position="fixed"
      right={0}
      top="0"
      bottom="0"
      w="22%"
      pr="5px"
      box-shadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      spacing={2}
      display={{ base: 'none', lg: 'flex' }}
      h="100vh"
    >
      <ProfileSection />
      <CalendarDiv wid="full" />
      <Scheduled />
    </WrapperVStack>
  )
}

export default RightSidebar

const WrapperVStack = styled(VStack)`
  ::-webkit-scrollbar {
    display: none;
  }
`
