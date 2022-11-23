import React from 'react'
import { HStack, Image, Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import Login from '../components/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const { isAuth } = useSelector((state) => state.auth)
  React.useEffect(() => {
    if (isAuth) navigate('/')
  }, [isAuth])
  return (
    <StyledWrapper w="full" h="100vh">
      <Image
        w="full"
        h="full"
        position="absolute"
        top="0"
        right={0}
        left={0}
        className="bg_img"
        src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        zIndex={1}
        w={{ base: '90%', md: 'fit-content' }}
        px={{ base: '20px', lg: '' }}
        py={{ base: '25px', lg: '' }}
        h="fit-content"
        bg="white"
        position={{ lg: 'absolute' }}
        right="8%"
        boxShadow="var(--boxShadow)"
        rounded="10px"
      >
        <Login />
      </Stack>
    </StyledWrapper>
  )
}

export default LoginPage

const StyledWrapper = styled(HStack)`
  justify-content: center;
  .bg_img {
    filter: blur(1px);
  }
`
