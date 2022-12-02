import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  useNumberInput,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const boxShadow =
  'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'

const QuantityOrConfirmSection = () => {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: 1,
    min: 1,
    max: 6,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()
  console.log(input.value)

  return (
    <VStack
      w="full"
      px="13px"
      py="15px"
      boxShadow={boxShadow}
      h="440px"
      rounded="10px"
    >
      <VStack w="full" my="10px">
        <Text w="full" fontSize={11} fontWeight={600}>
          Weight
        </Text>
        <HStack w="full">
          <Box
            h="26px"
            w="50px"
            rounded="6px"
            border="1px solid gray"
            fontSize={13}
            fontWeight={600}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            1kg
          </Box>
        </HStack>
      </VStack>
      <Box w="full" h="1px" bg="gray" />
      <VStack w="full" style={{ marginTop: '20px', marginBottom: '10px' }}>
        <Text w="full">
          MRP:{' '}
          <Box as="span" color="gray" textDecor="line-through">
            Rs.2205
          </Box>
        </Text>
        <Text w="full">
          Selling Price:{' '}
          <Box as="span" color="brown" fontWeight={700} fontSize={20}>
            Rs.2205
          </Box>
        </Text>
        <Text w="full">
          You Save:{' '}
          <Box as="span" color="gray">
            Rs.2205
          </Box>
        </Text>
        <Text fontSize={13} w="full">
          Inclusive of all taxes
        </Text>
      </VStack>
      <VStack w="full">
        <Text w="full" color="green" fontWeight={700} fontSize={17}>
          In Stock
        </Text>
        <HStack w="full">
          <HStack w="35%" spacing="1px">
            <Button variant="solid" colorScheme="blackAlpha" size="sm" {...inc}>
              +
            </Button>
            <Input {...input} />
            <Button variant="solid" colorScheme="blackAlpha" size="sm" {...dec}>
              -
            </Button>
          </HStack>
          <Button variant="solid" colorScheme="blue" w="65%">
            ADD TO CART
          </Button>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default QuantityOrConfirmSection
