import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import okImage from '../../../assets/images/OK-300x300.png.crdownload.png'

const PurchaseSuccessfulModel = ({ oldIsOpen, toggleOldIsopen }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (oldIsOpen) {
      var id = setTimeout(() => {
        navigate('/tmc-shop')
        toggleOldIsopen()
      }, 5000)
    }
    return () => {
      clearTimeout(id)
    }
  }, [oldIsOpen])
  return (
    <>
      <Modal scrollBehavior="inside" isOpen={oldIsOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Status</ModalHeader>
          <ModalBody>
            <VStack>
              <Image w="80%" h="200px" src={okImage} />
              <Text
                w="full"
                textAlign="center"
                color="Highlight"
                fontWeight={600}
                fontSize="18"
              >
                Order has been placed successfully!
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => navigate('/tmc-shop')}>
              Continue Shopping
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PurchaseSuccessfulModel
