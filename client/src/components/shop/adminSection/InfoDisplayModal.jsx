import {
  Box,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'

const InfoDisplayModal = ({ isOpen, toggleOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Info</ModalHeader>
          <ModalCloseButton onClick={toggleOpen} />
          <ModalBody py="20px">
            <VStack w="full">
              <Image
                w="150px"
                src="https://cdn.nutrabay.com/wp-content/uploads/2022/11/NB-NUT-1015-02-01-247x247.jpg"
              />
              <VStack>
                <Text fontWeight="bold">
                  Nutrabay Gold BCAA 4:1:1 with Electrolytes
                </Text>
                <HStack w="full">
                  <Text fontSize={20} fontWeight="bold" color="brown">
                    1,003
                  </Text>
                  <Text fontSize={19} color="grey" textDecor="line-through">
                    1,003
                  </Text>
                  <Text fontSize={17} color="grey">
                    -(27%)
                  </Text>
                </HStack>
                <Text w="full" fontWeight={700}>
                  Quantity:{' '}
                  <Box as="span" fontWeight="normal">
                    4
                  </Box>
                </Text>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default InfoDisplayModal
