import React from 'react'
import { Button, ButtonGroup, HStack, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
  return (
    <HStack
      bg="#222b3d"
      position="sticky"
      top="0"
      left="0"
      right="0"
      h="80px"
      display={{ base: 'flex', lg: 'none' }}
      align="center"
      px={{ base: '5px', lg: '20px' }}
      zIndex={5}
      justify="space-between"
    >
      <Stack direction={{ base: 'column', md: 'row' }}>
        <Text color="white">Hey!</Text>
        <Text fontWeight={700} color="white" fontFamily="mono" fontSize={20}>
          ADMIN
        </Text>
      </Stack>
      <HStack color="white" spacing={-5}>
        <Link to="/admin-home">
          <Button variant="ghost" colorScheme="blue" fontSize={14}>
            Dashboard
          </Button>
        </Link>
        <Link to="/admin-products">
          <Button variant="ghost" colorScheme="blue" fontSize={14}>
            Products
          </Button>
        </Link>
        <Link to="/admin-categories">
          <Button variant="ghost" colorScheme="blue" fontSize={14}>
            Categories
          </Button>
        </Link>
      </HStack>
    </HStack>
  )
}

export default NavbarAdmin
