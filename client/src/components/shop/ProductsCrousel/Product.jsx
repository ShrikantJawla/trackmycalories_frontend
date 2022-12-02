import { Box, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import React from 'react'
import DiscountCircle from './DiscountCircle'

const Product = () => {
  return (
    <VStack bg="white" p="14px" position="relative" cursor="pointer">
      <Box h="80%">
        <Image
          src="https://cdn.nutrabay.com/wp-content/uploads/2022/08/NB-NUT-1065-01-01-1-247x247.jpg"
          alt="img"
        />
      </Box>
      <VStack w="90%">
        <Text w="full" textAlign="center" color="blue" fontSize="15">
          Nutrabay Gold 100% Whey Protein Concentrate
        </Text>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon as={AiFillStar} key={i} color={'teal.500'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" fontWeight={700}>
            {'(' + 20 + ')'}
          </Box>
        </Box>
        <Box as="p">
          From:{' '}
          <Box as="span" textDecoration="line-through" color="gray">
            1999{' '}
          </Box>
          <Box as="span" fontWeight="bold">
            1199
          </Box>
        </Box>
      </VStack>
      <DiscountCircle />
    </VStack>
  )
}

export default Product
