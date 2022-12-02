import { Grid, VStack } from '@chakra-ui/react'
import React from 'react'
import InformationBox from './InformationBox'
import OrdersList from './OrdersList'

const DashboardMain = () => {
  return (
    <VStack w="full" spacing={10}>
      <Grid
        w="full"
        justifyContent="space-between"
        alignItems="center"
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(4,1fr)',
        }}
      >
        <InformationBox />
        <InformationBox />
        <InformationBox />
        <InformationBox />
      </Grid>
      <OrdersList />
    </VStack>
  )
}

export default DashboardMain
