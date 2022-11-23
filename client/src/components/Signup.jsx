import {
  Box,
  Button,
  Divider,
  FormControl,
  HStack,
  Input,
  Text,
  useToast,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupApi } from '../redux/auth/auth.actions'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [signupCreds, setSignupCreds] = useState({})
  const toast = useToast()
  const dispatch = useDispatch()
  const { signupError } = useSelector((store) => store.auth)
  const navigate = useNavigate()

  const handleSignupSubmit = () => {
    if (
      signupCreds.firstName === '' ||
      signupCreds.email === '' ||
      signupCreds.password === ''
    ) {
      toast({
        position: 'top',
        title: 'Please fill all required inputs!',
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    } else {
      dispatch(SignupApi(signupCreds))
      if (signupError === false) navigate('/login')
    }
  }
  return (
    <VStack
      w={{ base: '99%', md: '500px', lg: '500px' }}
      h="fit-content"
      p={{ base: '10px', lg: '25px' }}
    >
      <VStack>
        <Text fontSize={17} color="red">
          New here?
        </Text>
        <Text
          fontSize={26}
          fontFamily={`'Poppins', sans-serif`}
          fontWeight="bold"
        >
          Sign up
        </Text>
      </VStack>
      <Divider />
      <VStack w="full" spacing="25px" style={{ marginTop: '40px' }}>
        <HStack w="full">
          <FormControl>
            <Input
              borderBottom="1px solid grey"
              variant="unstyled"
              placeholder="First Name"
              value={signupCreds.firstName}
              onChange={({ target }) =>
                setSignupCreds({ ...signupCreds, firstName: target.value })
              }
              rounded={0}
              style={{ height: '40px', outline: 'none' }}
              px="5px"
            />
          </FormControl>
          <FormControl>
            <Input
              border="none"
              borderBottom="1px solid grey"
              variant="unstyled"
              placeholder="Last Name"
              value={signupCreds.lastName}
              onChange={({ target }) =>
                setSignupCreds({ ...signupCreds, lastName: target.value })
              }
              rounded={0}
              style={{ height: '40px', outline: 'none' }}
              px="5px"
            />
          </FormControl>
        </HStack>
        <FormControl>
          <Input
            border="none"
            borderBottom="1px solid grey"
            variant="unstyled"
            placeholder="Email"
            value={signupCreds.email}
            onChange={({ target }) =>
              setSignupCreds({ ...signupCreds, email: target.value })
            }
            rounded={0}
            style={{ height: '40px', outline: 'none' }}
            px="5px"
          />
        </FormControl>
        <FormControl>
          <Input
            border="none"
            borderBottom="1px solid grey"
            variant="unstyled"
            placeholder="Enter your age"
            type="number"
            value={signupCreds.age}
            onChange={({ target }) =>
              setSignupCreds({ ...signupCreds, age: target.value })
            }
            rounded={0}
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
            type="password"
            value={signupCreds.password}
            onChange={({ target }) =>
              setSignupCreds({ ...signupCreds, password: target.value })
            }
            rounded={0}
            style={{ height: '40px', outline: 'none' }}
            px="5px"
          />
        </FormControl>
        <Button
          onClick={handleSignupSubmit}
          w="120px"
          fontSize={19}
          fontWeight="600"
          variant="solid"
          colorScheme="whatsapp"
        >
          Signup
        </Button>
      </VStack>
      <Box>
        Already signed in?{' '}
        <Link to="/login">
          <span
            style={{
              fontSize: '19px',
              fontWeight: '600',
              color: 'red',
              textDecoration: 'underline',
            }}
          >
            Log in
          </span>
        </Link>
      </Box>
    </VStack>
  )
}

export default Signup
