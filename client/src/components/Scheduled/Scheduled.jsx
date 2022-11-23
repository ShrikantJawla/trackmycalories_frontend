import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import Task from './Task'

const Scheduled = () => {
  return (
    <Wrapper w="full" >
      <HStack w="full" justify="space-between">
        <Text fontSize="17px" fontWeight={600}>
          Scheduled
        </Text>
        <Text
          _hover={{ cursor: 'pointer', color: '#095b10' }}
          fontWeight={400}
          fontSize="14"
          color="#1e9a28"
        >
          View more
        </Text>
      </HStack>
      <VStack className="tasks" w="full" overflow="scroll" h="full">
        {new Array(4).fill(0).map((ele, ind) => (
          <Task key={ind} />
        ))}
      </VStack>
    </Wrapper>
  )
}

export default Scheduled

const Wrapper = styled(VStack)`
  min-height: 26vh;
  margin-top: 10px !important;
  margin-bottom: 10px !important;
  font-family: 'Poppins', sans-serif;
  .tasks {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`
