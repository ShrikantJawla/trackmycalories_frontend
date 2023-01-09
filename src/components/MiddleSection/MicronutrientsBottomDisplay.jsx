import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import MicronutrientsDisplay from './MicroNutrients/MicronutrientsDisplay'
import { data } from '../../assets/userProfileData.js'
import { useSelector } from 'react-redux'

const MicronutrientsBottomDisplay = () => {
  const { foodItemsInList, baseValue } = useSelector((store) => store.diary)

  const { main, micro, vitamins, Major, Fat } = data(foodItemsInList)

  return (
    <>
      <HStack style={{ marginTop: '40px' }} w="full" justify="space-between" align='flex-start'>
        <VStack w="45%">
          <MicronutrientsDisplay
            headTitle="Main Nutrients"
            dataArray={main}
            wid="100%"
          />
          <MicronutrientsDisplay
            headTitle="Major Nutrients"
            dataArray={Major}
            wid="100%"
          />
        </VStack>
        <MicronutrientsDisplay
          headTitle="Micro Nutrients"
          dataArray={micro}
          wid="55%"
        />
      </HStack>
      <HStack w="full" justify="space-between" align='flex-start'>
        <MicronutrientsDisplay headTitle="Fat" dataArray={Fat} wid="44%" />
        <MicronutrientsDisplay
          headTitle="Vitamins"
          dataArray={vitamins}
          wid="55%"
        />
      </HStack>
    </>
  )
}

export default MicronutrientsBottomDisplay
