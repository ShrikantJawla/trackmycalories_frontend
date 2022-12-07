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
import { useSelector } from 'react-redux'

const InfoDisplayModal = ({ isOpen, toggleOpen }) => {
  const { singleProductToDisplay } = useSelector((s) => s.admin)
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
                src={
                  singleProductToDisplay['attachment-woocommerce_thumbnail src']
                }
              />
              <VStack>
                <Text fontWeight="bold">{singleProductToDisplay?.name}</Text>
                <HStack w="full">
                  <Text fontSize={20} fontWeight="bold" color="brown">
                    {singleProductToDisplay['woocommerce-Price-amount 2']}
                  </Text>
                  <Text fontSize={19} color="grey" textDecor="line-through">
                    {singleProductToDisplay['woocommerce-Price-amount']}
                  </Text>
                  <Text fontSize={17} color="grey">
                    {singleProductToDisplay?.onsale}
                  </Text>
                </HStack>
                <Text w="full" fontWeight={700}>
                  Quantity:{' '}
                  <Box as="span" fontWeight="normal">
                    {singleProductToDisplay?.Quantity}
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
