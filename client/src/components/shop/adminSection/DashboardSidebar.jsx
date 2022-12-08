import React from 'react'
import { Link } from 'react-router-dom'
import { HStack, Spacer, Text, VStack } from '@chakra-ui/react'
import { AiOutlineLogout } from 'react-icons/ai'
import { BsListTask } from 'react-icons/bs'
import { IoIosColorPalette } from 'react-icons/io'
import { MdSpaceDashboard, MdPersonSearch } from 'react-icons/md'
import { FaProductHunt } from 'react-icons/fa'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LogOut } from '../../../redux/auth/auth.actions'

const links = [
  {
    to: '/admin-home',
    loc: 'adminHome',
    text: 'Dashboard',
    icon: <MdSpaceDashboard className="icons" />,
  },
  {
    to: '/admin-products',
    loc: 'adminProducts',
    text: 'Products',
    icon: <FaProductHunt className="icons" />,
  },
  {
    to: '/admin-categories',
    loc: 'adminSectionCategories',
    text: 'Categories',
    icon: <BsListTask className="icons" />,
  },
  // {
  //   to: '/customers',
  //   loc: 'adminCustomers',
  //   text: 'Customers',
  //   icon: <MdPersonSearch className="icons" />,
  // },
]

const DashboardSidebar = ({ location }) => {
  const dispatch = useDispatch()
  return (
    <StyledVStack
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      w="15%"
      bg="#222b3d"
      spacing={5}
      display={{ base: 'none', lg: 'flex' }}
    >
      <VStack
        w="full"
        py="15px"
        pt={{ lg: '30px' }}
        color="#fbfcfd"
        fontSize={30}
        justify="center"
        spacing={0}
      >
        {links.map(({ to, loc, icon, text }, ind) => (
          <Link key={ind} to={to} style={{ width: '100%' }}>
            <HStack
              className="icon__container"
              id={location === loc ? 'active' : 'notActive'}
            >
              {icon}
              <Text id="text" fontSize={17}>
                {text}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
      <Spacer />
      <VStack w="full" py="15px" justify="center">
        <VStack className="icon__container">
          <IoIosColorPalette className="icons" color="#53d57a" fontSize={34} />
        </VStack>
        <VStack className="icon__container">
          <AiOutlineLogout
            onClick={() => dispatch(LogOut())}
            className="icons"
            color="#ea4b2f"
            fontSize={34}
          />
        </VStack>
      </VStack>
    </StyledVStack>
  )
}

export default DashboardSidebar

const StyledVStack = styled(VStack)`
  .icon__container {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 0;
    width: 100%;
    padding: 17px 20px;
    justify-content: left;
    &:hover {
      background-color: #fefafaf7;
      p {
        color: #2e75d9 !important;
      }
    }
  }
  .icon__container:hover .icons {
    transition: all 0.2s ease-in-out;
    color: #2e75d9 !important;
    transform: scale(1.2);
  }
  #active {
    background-color: #fefafaf7;
    .icons {
      transition: all 0.2s ease-in-out;
      color: #2e75d9 !important;
      transform: scale(1.2);
    }
    #text {
      color: #2e75d9 !important;
    }
  }
`
