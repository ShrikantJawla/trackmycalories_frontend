import {
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const CaloriesDisplayer = ({ valOfCircle, totalCal, title }) => {
  return (
    <HStack
      spacing={0}
      w="full"
      boxShadow="var(--boxShadow)"
      bg="var(--cardBackground)"
      backdropFilter="blur(2rem)"
      rounded="10px"
      borderTop="var(--borderTop)"
      borderLeft="var(--borderLeft)"
      h="fit-content"
      p="2"
      justify="space-evenly"
      color="#426696"
    >
      <VStack>
        <Text fontSize="14px" fontWeight="bold" >
          {title}
        </Text>
      </VStack>
      <CircularProgress
        size="125px"
        thickness="4px"
        value={valOfCircle}
        color="green"
      >
        <CircularProgressLabel
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p style={{ fontSize: '15px', fontWeight: 'bold' }}>{totalCal}</p>
          <p style={{ fontSize: '11px', color: 'gray' }}>kcal</p>
        </CircularProgressLabel>
      </CircularProgress>
    </HStack>
  )
}

export default CaloriesDisplayer
