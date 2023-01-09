import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateQuantityInCart } from '../../../redux/cart/cart.actions'

function QuantityChangeStepper({ product }) {
  const dispatch = useDispatch()
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
  } = useNumberInput({
    step: 1,
    defaultValue: product.quantity,
    min: 1,
    max: 10,
    precision: 0,
  })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW="180px">
      <Button
        disabled={product.quantity === 10}
        onClick={() => dispatch(updateQuantityInCart(product._id, 'add'))}
        {...inc}
      >
        +
      </Button>
      <Input {...input} />
      <Button
        onClick={() => dispatch(updateQuantityInCart(product._id, 'remove'))}
        {...dec}
      >
        -
      </Button>
    </HStack>
  )
}

export default QuantityChangeStepper
