import { FormControl, HStack, Input, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'
import { useToggleVisiblity } from '../../hooks/useToggleVisiblity'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/auth/auth.actions'

const Links = [
  { name: 'Protein', link: 'protein' },
  { name: 'BCAA', link: 'bcaa' },
  { name: 'Vitamins', link: 'vitamins' },
  { name: 'Gainers', link: 'massgainer' },
  { name: 'Omega-3', link: 'omega3' },
  { name: 'Peanut-butter', link: 'peanutButter' },
  { name: 'Plant-protein', link: 'plantprotein' },
  { name: 'Recently-added', link: 'recentlyadded' },
]

const Navbar = () => {
  const dispatch = useDispatch()
  const { isVisible, toggleVisiblity } = useToggleVisiblity()
  const { isAuth, userInfo } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getUser())
  }, [])
  return (
    <VStack
      zIndex={200}
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
      <HStack
        w="full"
        spacing={{ base: 'none', lg: '15px' }}
        px={{ base: '20px', lg: '14px' }}
        pr={{ base: '140px', md: '40px' }}
      >
        <HStack
          flex={{ lg: '0.2' }}
          color="white"
          fontWeight="bold"
          w="full"
          justifyContent={{ lg: 'center' }}
        >
          <Link to="/tmc-shop">
            <Text cursor="pointer" w={{ base: '240px', lg: 'fit-content' }}>
              Track-My-Calories
            </Text>
          </Link>
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
          <Text
            cursor="pointer"
            fontWeight="bold"
            color="white"
            fontSize={{ base: '13px', lg: '16px' }}
          >
            {isAuth ? `Hi ${userInfo?.firstName}` : 'LOGIN/REGISTER'}
          </Text>
          <Text fontWeight={100} color="grey">
            |
          </Text>
          <Link to="/cart">
            <HStack
              fontWeight="bold"
              color="white"
              display={{ base: 'none', lg: 'flex' }}
            >
              <Text cursor="pointer">CART</Text>
              <AiOutlineShoppingCart />
            </HStack>
          </Link>
        </HStack>
        <SideNav isVisible={isVisible} toggleVisiblity={toggleVisiblity} />
      </HStack>
      <HStack w="full" px="15px">
        <HStack spacing={0} flex="0.2">
          <BiLeftArrowAlt color="white" />
          <Link to="/">
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
          {Links.map((ele, ind) => (
            <Link
              to={`/products/${ele.link}`}
              key={`${ind}+${Date.now().toString()}`}
            >
              <Text>{ele.name}</Text>
            </Link>
          ))}
        </HStack>
      </HStack>
    </VStack>
  )
}

export default Navbar
