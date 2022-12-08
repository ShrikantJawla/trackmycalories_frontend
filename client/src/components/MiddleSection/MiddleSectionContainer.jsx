import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import CaloriesDisplayer from './CaloryProcessbars/CaloriesDisplayer'
import LineChart from './Charts/LineChart'
import SomeMacroNutrients from './MacronutrientsDisplay/SomeMacroNutrients'
import DisplayProducts from './ProductsDisplay/DisplayProducts'
import { useSelector } from 'react-redux'
import { getTotalEnergy, macroTargets } from '../../assets/userProfileData.js'

const MiddleSectionContainer = () => {
  const { foodItemsInList, baseValue } = useSelector((store) => store.diary)

  return (
    <VStack
      style={{ marginLeft: '7.5%', marginTop: '4px' }}
      w="69%"
      spacing="20px"
    >
      <HStack w="full" justify="space-between">
        <LineChart title="Daywise Calorie cunsumption" wid="60%" />
        <VStack w="38%">
          <CaloriesDisplayer
            totalCal={getTotalEnergy(foodItemsInList, baseValue).total.toFixed(
              0,
            )}
            valOfCircle={getTotalEnergy(foodItemsInList, baseValue).per}
            title="CONSUMED"
          />
          <CaloriesDisplayer
            totalCal={getTotalEnergy(
              foodItemsInList,
              baseValue,
            ).remaining.toFixed(0)}
            valOfCircle={getTotalEnergy(foodItemsInList, baseValue).remPer}
            title={`TODAY's TARGET`}
          />
        </VStack>
      </HStack>
      <HStack w="full" justify="space-between" h="400px">
        <VStack w="28%" justifyContent="space-between" h="full">
          {macroTargets(
            foodItemsInList,
            getTotalEnergy(foodItemsInList, baseValue).per,
          ).targets.map((ele, ind) => (
            <SomeMacroNutrients
              key={ind + Math.random() * Math.random()}
              {...ele}
            />
          ))}
        </VStack>
        <DisplayProducts />
      </HStack>
      
    </VStack>
  )
}

export default MiddleSectionContainer
