import { Grid, VStack } from '@chakra-ui/react'
import React from 'react'
import InformationBox from './InformationBox'
import OrdersList from './OrdersList'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

const DashboardMain = ({ orderDetails, toggleOpen }) => {
  return (
    <VStack w="full" spacing={10}>
      <Grid
        w="full"
        justifyContent="space-evenly"
        alignItems="center"
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
      >
        <InformationBox
          text="Order pendings"
          bg="red"
          value={orderDetails?.pendingOrders?.length} //Array
        />
        <InformationBox
          text="delevered"
          bg="green"
          icon={IoCheckmarkDoneCircle}
          value={orderDetails?.deleveredOrders?.length} //Array
        />
        <InformationBox
          text="Total revenue"
          bg="purple"
          icon={RiMoneyDollarCircleFill}
          value={orderDetails?.totalRevenue} //number
        />
      </Grid>
      <OrdersList toggleOpen={toggleOpen} orderDetails={orderDetails} />
    </VStack>
  )
}

export default DashboardMain
