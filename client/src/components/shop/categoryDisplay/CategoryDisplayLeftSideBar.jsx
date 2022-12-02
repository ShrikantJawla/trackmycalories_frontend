import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import CustomCheckbox from './CustomCheckBox'
import { useState } from 'react'
import { useEffect } from 'react'

const CategoryDisplayLeftSideBar = () => {
  const sidebarVisiblity = useBreakpointValue(
    {
      base: false,
      md: true,
    },
    {
      fallback: false,
    },
  )
  const [isVisible, setIsVisible] = useState(sidebarVisiblity)
  useEffect(() => {
    setIsVisible(sidebarVisiblity)
  }, [sidebarVisiblity])
  return (
    <>
      <HStack w="full" justifyContent="center">
        <Button
          onClick={() => setIsVisible((p) => (p = !p))}
          display={{ md: 'none' }}
          w="100px"
          variant="solid"
          colorScheme="blackAlpha"
        >
          Filter
        </Button>
      </HStack>
      {isVisible && (
        <Stack
          direction={{ base: 'row', md: 'column' }}
          w="full"
          px="10px"
          pt="20px"
        >
          <VStack w="full">
            <Text
              w="full"
              fontSize={{ base: '14', lg: 18 }}
              fontWeight={600}
              color="gray.600"
            >
              FILTER SUB-CATEGORY
            </Text>
            <Box
              h="2px"
              bg="gray"
              w="50px"
              display="flex"
              alignSelf="flex-start"
            />
            <VStack w="full">
              {new Array(8).fill(' ').map((ele) => (
                <CustomCheckbox text="Protein" />
              ))}
            </VStack>
          </VStack>
          <VStack w="full">
            <Text
              w="full"
              fontSize={{ base: '14', lg: 18 }}
              fontWeight={600}
              color="gray.600"
            >
              FILTER BRANDS
            </Text>
            <Box
              h="2px"
              bg="gray"
              w="50px"
              display="flex"
              alignSelf="flex-start"
            />
            <VStack w="full">
              {new Array(4).fill(' ').map((ele) => (
                <CustomCheckbox text="Protein" />
              ))}
            </VStack>
          </VStack>
        </Stack>
      )}
    </>
  )
}

export default CategoryDisplayLeftSideBar
