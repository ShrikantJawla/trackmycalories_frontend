import { FormControl, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import { useToggleVisiblity } from '../../hooks/useToggleVisiblity'
const Navbar = () => {
  const { isVisible, toggleVisiblity } = useToggleVisiblity()
  return (
    <VStack
      w="full"
      h={{ base: 'fit-content', lg: '110px' }}
      border="1px solid black"
      px="3px"
      pt="8px"
      bg="#222b3d"
      justify="space-between"
      py="10px"
      position="sticky"
      left={0}
      right={0}
      top={0}
    >
      <HStack w="full" spacing="15px" px={{ base: '20px', lg: '14px' }}>
        <HStack
          flex={{ lg: '0.2' }}
          color="white"
          fontWeight="bold"
          w="full"
          justifyContent="center"
        >
          <Text cursor="pointer" w={{ base: '240px', lg: 'fit-content' }}>
            Track-My-Calories
          </Text>
        </HStack>
        <HStack
          flex={{ lg: '1' }}
          bg="#4f5564"
          rounded="15px"
          p="7px"
          display={{ base: 'none', lg: 'flex' }}
        >
          <FormControl>
            <Input variant="unstyled" placeholder="Search products..." />
          </FormControl>
          <BsSearch color="white" />
        </HStack>
        <HStack flex={{ lg: '0.2' }}>
          <Text cursor="pointer" fontWeight="bold" color="white">
            LOGIN/REGISTER
          </Text>
          <Text fontWeight={100} color="grey">
            |
          </Text>
          <HStack
            fontWeight="bold"
            color="white"
            display={{ base: 'none', lg: 'flex' }}
          >
            <Text cursor="pointer">CART</Text>
            <AiOutlineShoppingCart />
          </HStack>
          <SideNav isVisible={isVisible} toggleVisiblity={toggleVisiblity} />
        </HStack>
      </HStack>
      <HStack w="full" px="15px">
        <HStack spacing={0} flex="0.2">
          <BiLeftArrowAlt color="white" />
          <Link to="">
            <Text color="white">Dashboard</Text>
          </Link>
        </HStack>
        <HStack
          color="white"
          flex="0.8"
          spacing="25px"
          fontWeight="bold"
          display={{ base: 'none', lg: 'flex' }}
        >
          <Link to="">
            <Text>Protein</Text>
          </Link>
          <Link to="">
            <Text>BCAA</Text>
          </Link>
          <Link to="">
            <Text>Vitamins</Text>
          </Link>
          <Link to="">
            <Text>Gainers</Text>
          </Link>
          <Link to="">
            <Text>Omega-3</Text>
          </Link>
          <Link to="">
            <Text>Peanut-butter</Text>
          </Link>
          <Link to="">
            <Text>Recently-added</Text>
          </Link>
          <Link to="">
            <Text>Plant-protein</Text>
          </Link>
        </HStack>
      </HStack>
    </VStack>
  )
}

export default Navbar
