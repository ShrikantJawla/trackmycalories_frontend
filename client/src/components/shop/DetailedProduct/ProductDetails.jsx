import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ProductDetails = () => {
  return (
    <VStack w="full" py="15px" px="25px" spacing={5}>
      <VStack w="full">
        <Text w="full" fontSize={18} fontWeight={600}>
          Optimum Nutrition (ON) Gold Standard 100 Whey Protein Powder
        </Text>
        <Box display="flex" mt="2" alignItems="center" w="full">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <Icon as={AiFillStar} key={i} color={'yellow.500'} />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm" fontWeight={700}>
            {'(' + 20 + ')'}
          </Box>
        </Box>
      </VStack>
      <VStack w="full" p="20px" bg="#f4f5f5" boxShadow="var(--boxShadow3)">
        <VStack w="full" spacing={0}>
          <Text w="full" fontWeight={600}>
            Sold and fulfilled by
          </Text>
          <Text fontSize={12.5} w="full">
            {' '}
            TrackMyCalories.com - ✓ Brand Authorized
          </Text>
        </VStack>
        <VStack w="full" spacing={0}>
          <Text w="full" fontWeight={600}>
            Free & Fast Delivery
          </Text>
          <Text fontSize={12.5} w="full">
            {' '}
            Shipped within 1 day. Free shipping on orders above ₹350.d
          </Text>
        </VStack>
        <VStack w="full" spacing={0}>
          <Text w="full" fontWeight={600}>
            Genuine Products
          </Text>
          <Text fontSize={12.5} w="full">
            {' '}
            All our products are far from expiry, and procured directly from the
            brand or authorized importers of the brand.
          </Text>
        </VStack>
      </VStack>
      <VStack w="full" p="20px" bg="#f4f5f5" boxShadow="var(--boxShadow3)">
        <VStack w="full" spacing={0}>
          <Text w="full" fontWeight={600}>
            Brand
          </Text>
          <Text fontSize={12.5} w="full">
            {' '}
            Glanbia Performance Nutrition: <br /> 502 504 stat hub bldg no 2,
            Sahar road, Andheri East Mumbai 400059 India <br /> FSSAI Lic. No.
            10017011004358 <br />
            indiacustomercare@glanbia.com, (11) 49594959
          </Text>
        </VStack>
        <VStack w="full" spacing={0}>
          <Text w="full" fontWeight={600}>
            Importer / Manufacturer
          </Text>
          <Text fontSize={12.5} w="full">
            {' '}
            May be imported or locally manufactured: <br />
            {'1)'} Optimum Nutrition, 3500 Lacey Road, Suite 1200, Downers
            Grove, IL 60515 Country of Origin: USA <br />
            <br />
            {'2)'} Tirupati Wellness, SurajPur, Nahan Road, Paonta Sahib,
            Sirmaur HP - 173001 Country of Origin: India
          </Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default ProductDetails
