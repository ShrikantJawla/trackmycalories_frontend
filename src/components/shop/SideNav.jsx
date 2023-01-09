import React from 'react'
import { Box, CloseButton, HStack, Text, VStack } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'

const Links = [
  { name: 'Protein', link: 'protein' },
  { name: 'BCAA', link: 'bcaa' },
  { name: 'Vitamins', link: 'vitamins' },
  { name: 'Gainers', link: 'massgainer' },
  { name: 'Omega-3', link: 'omega3' },
  { name: 'Peanut-butter', link: 'peanutButter' },
  { name: 'Plant-protein', link: 'plantprotein' },
  { name: 'Recently-added', link: 'recentlyadded' },
]

const SideNav = ({ toggleVisiblity, isVisible }) => {
  return (
    <>
      <Box display={{ lg: 'none' }}>
        <GiHamburgerMenu
          fontSize={25}
          onClick={toggleVisiblity}
          cursor="pointer"
          color="white"
        />
      </Box>
      {isVisible && (
        <VStack
          bg="#222b3d"
          position="fixed"
          right={0}
          top={0}
          bottom={0}
          w="270px"
          py="10px"
          spacing={0}
        >
          <HStack w="full" justify="flex-end" px="15px" pb="15px">
            <CloseButton
              fontSize={18}
              color="white"
              onClick={toggleVisiblity}
            />
          </HStack>
          {Links.map((ele) => (
            <Link
              to={`/products/${ele.link}`}
              style={{ width: '100%' }}
              key={uuid()}
            >
              <HStack
                w="full"
                justify="left"
                borderColor="grey"
                px="40px"
                borderBottomWidth="1px"
                py="6px"
                _hover={{ bg: '#171e2b' }}
              >
                <Text color="white" fontSize={20}>
                  {ele.name}
                </Text>
              </HStack>
            </Link>
          ))}
        </VStack>
      )}
    </>
  )
}

export default SideNav
