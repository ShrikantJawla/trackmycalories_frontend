import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginApi } from '../redux/auth/auth.actions'

function Login() {
  const [loginCreds, setLoginCreds] = useState({})
  const toast = useToast()
  const dispatch = useDispatch()

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    if (!loginCreds.email || !loginCreds.password) {
      toast({
        position: 'top',
        title: 'Please fill all required inputs!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    } else {
      dispatch(LoginApi(loginCreds))
    }
  }

  return (
    <VStack w={{ base: '99%', md: '470px', lg: '470px' }} h="450px" p="25px">
      <Text
        fontSize={26}
        fontFamily={`'Poppins', sans-serif`}
        fontWeight="bold"
      >
        Log in
      </Text>
      <Divider />
      <VStack
        w="full"
        spacing="30px"
        style={{ marginTop: '40px' }}
        as="form"
        onSubmit={handleLoginSubmit}
      >
        <FormControl>
          <Input
            border="none"
            borderBottom="1px solid grey"
            variant="unstyled"
            placeholder="Email"
            rounded={0}
            value={loginCreds.email}
            onChange={({ target: { value } }) =>
              setLoginCreds({ ...loginCreds, email: value })
            }
            style={{ height: '40px', outline: 'none' }}
            px="5px"
          />
        </FormControl>
        <FormControl>
          <Input
            border="none"
            borderBottom="1px solid grey"
            variant="unstyled"
            placeholder="Password"
            rounded={0}
            type="password"
            value={loginCreds.password}
            onChange={({ target: { value } }) =>
              setLoginCreds({ ...loginCreds, password: value })
            }
            style={{ height: '40px', outline: 'none' }}
            px="5px"
          />
        </FormControl>
        <Button
          w="120px"
          fontSize={19}
          fontWeight="600"
          variant="solid"
          colorScheme="whatsapp"
          type="submit"
        >
          Login
        </Button>
      </VStack>
      <Box style={{ marginTop: '15px' }}>
        Already signed in?{' '}
        <Link to="/signup">
          <span
            style={{
              fontSize: '19px',
              fontWeight: '600',
              color: 'red',
              textDecoration: 'underline',
            }}
          >
            Sign up
          </span>
        </Link>
      </Box>
    </VStack>
  )
}

export default Login
