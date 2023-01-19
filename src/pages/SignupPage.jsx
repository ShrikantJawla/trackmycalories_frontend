import React from 'react'
import { HStack, Image, Stack } from '@chakra-ui/react'
import styled from 'styled-components'
import Signup from '../components/Signup'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { runServer } from '../redux/auth/auth.actions'

const SignupPage = () => {
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
        src="/image1.jpg"
      />
      <Stack
        zIndex={1}
        w={{ base: '93%', md: 'fit-content' }}
        px={{ base: '20px', lg: '' }}
        py={{ base: '25px', lg: '' }}
        h="fit-content"
        bg="white"
        boxShadow="var(--boxShadow)"
        rounded="10px"
        position={{ lg: 'absolute' }}
        right="8%"
        justifyContent="flex-end"
        spacing="30px"
      >
        <Signup />
      </Stack>
    </StyledWrapper>
  )
}

export default SignupPage

const StyledWrapper = styled(HStack)`
  justify-content: center;
  .bg_img {
    filter: blur(1px);
  }
`
