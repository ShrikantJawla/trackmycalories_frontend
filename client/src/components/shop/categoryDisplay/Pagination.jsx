import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({ pageNumber, changePage, length }) => {
  const pageButton = (pageNumber) => {
    let arr = []
    if (length < 15) {
      for (let i = pageNumber; i <= 1; i++) {
        arr.push(i)
      }
    } else if (length) {
      for (let i = pageNumber; i <= pageNumber + 5 && length / 15; i++) {
        arr.push(i)
      }
    } else {
      for (let i = pageNumber; i <= pageNumber + 5; i++) {
        arr.push(i)
      }
    }
    return arr
  }
  return (
    <HStack w={{ base: 'full', lg: '80%' }} h="60px" justify="center">
      <Button
        onClick={() => {
          changePage(pageNumber - 1)
        }}
      >
        Prev
      </Button>
      {pageButton(1).map((ele) => (
        <Button
          disabled={ele === pageNumber}
          onClick={() => changePage(ele)}
          key={ele * Math.random() * 1000 + Date.now()}
        >
          {ele}
        </Button>
      ))}
      <Button
        onClick={() => {
          changePage(pageNumber + 1)
        }}
      >
        Next
      </Button>
    </HStack>
  )
}

export default Pagination
