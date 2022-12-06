import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
const {
  useDisclosure,
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Icon,
  AlertDialog,
} = require('@chakra-ui/react')

function AlertDialogBox({ title, text, yesFunction }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  return (
    <>
      {/* <Button onClick={onOpen}>Discard</Button> */}
      <Icon
        mr="6px"
        cursor="pointer"
        color="red"
        ml="10px"
        as={MdDeleteForever}
        onClick={onOpen}
      />
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{title}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{text}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              onClick={() => {
                yesFunction()
                onClose()
              }}
              colorScheme="red"
              ml={3}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default AlertDialogBox
