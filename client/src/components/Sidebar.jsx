import React from 'react'
import { Link } from 'react-router-dom'
import { Spacer, VStack } from '@chakra-ui/react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsSearch, BsListTask } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoIosColorPalette } from 'react-icons/io'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LogOut } from '../redux/auth/auth.actions'

const links = [
  {
    to: '/',
    loc: 'home',
    icon: <AiOutlineHome className="icons" />,
  },
  {
    to: '/searchproducts',
    loc: 'searchproducts',
    icon: <BsSearch className="icons" />,
  },
  { to: '/tasks', loc: 'tasks', icon: <BsListTask className="icons" /> },
  {
    to: '/userprofile',
    loc: 'userprofile',
    icon: <CgProfile className="icons" />,
  },
]

const Sidebar = ({ location }) => {
  const dispatch = useDispatch()
  return (
    <StyledVStack
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      w="6%"
      bg="#1e1717"
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
        {links.map(({ to, loc, icon }, ind) => (
          <Link key={ind} to={to} style={{ width: '100%' }}>
            <VStack
              className="icon__container"
              id={location === loc ? 'active' : 'notActive'}
            >
              {icon}
            </VStack>
          </Link>
        ))}
      </VStack>
      <Spacer />
      <VStack w="full" py="15px" justify="center">
        <VStack className="icon__container">
          <IoIosColorPalette className="icons" color="#53d57a" fontSize={34} />
        </VStack>
        <VStack className="icon__container" onClick={() => dispatch(LogOut())}>
          <AiOutlineLogout className="icons" color="#ea4b2f" fontSize={34} />
        </VStack>
      </VStack>
    </StyledVStack>
  )
}

export default Sidebar

const StyledVStack = styled(VStack)`
  .icon__container {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin: 0;
    width: 100%;
    padding: 17px 0;
    &:hover {
      background-color: #fefafaf7;
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
      transform: scaleimport { useDispatch } from 'react-redux';
(1.2);
    }
  }
`
