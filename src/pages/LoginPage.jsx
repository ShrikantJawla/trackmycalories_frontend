import React from 'react'
import { HStack, Image, Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import Login from '../components/Login'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { runServer } from '../redux/auth/auth.actions'

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.auth)

  React.useEffect(() => {
    dispatch(runServer())
  }, [])

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
        style={{ objectFit: 'cover' }}
        src="/image2.jpg"
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
