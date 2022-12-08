import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react'
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
    >
      <Text fontWeight={700} color="white">
        Hey!{' '}
        <Box as="span" fontFamily="mono" fontSize={20}>
          {' '}
          ADMIN
        </Box>
      </Text>
      <Spacer />
      <ButtonGroup variant="ghost" spacing={0} color="white">
        <Link to="/admin-home">
          <Button fontSize={16}>Dashboard</Button>
        </Link>
        <Link to="/admin-products">
          <Button fontSize={16}>Products</Button>
        </Link>
        <Link to="/admin-categories">
          <Button fontSize={16}>Categories</Button>
        </Link>
      </ButtonGroup>
    </HStack>
  )
}

export default NavbarAdmin
