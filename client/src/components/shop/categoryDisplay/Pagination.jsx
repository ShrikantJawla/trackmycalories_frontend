import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ pageNumber, changePage }) => {
  const pageButton = (pageNumber) => {
    let arr = []
    for (let i = pageNumber; i <= pageNumber + 5; i++) {
      arr.push(i)
    }
    return arr
  }
  return (
    <HStack w={{ base: 'full', lg: '80%' }} h="60px" justify="center">
      <Button onClick={() => {}}>Prev</Button>
      {pageButton(1).map((ele) => (
        <Button key={ele * Math.random() * 1000 + Date.now()}>{ele}</Button>
      ))}
      <Button onClick={() => {}}>Next</Button>
    </HStack>
  )
}

export default Pagination
