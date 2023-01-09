import { HStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import MiddleSectionContainer from '../../components/MiddleSection/MiddleSectionContainer'
import RightSidebar from '../../components/RightSidebar'
import Sidebar from '../../components/Sidebar'
import '../../index.css'
import { getUser } from '../../redux/auth/auth.actions'
import { getfoodProducts } from '../../redux/diary/diary.actions'
const Dashboard = () => {
  const dispatch = useDispatch()
  const { token } = useSelector((store) => store.auth)

  React.useEffect(() => {
    dispatch(getfoodProducts(token))
    dispatch(getUser())
  }, [token])

  return (
    <WrapperHStack
      bg="linear-gradient(to right top, #65dfc9, #6cdbeb)"
      w="full"
    >
      <Sidebar location="home" />
      <MiddleSectionContainer />
      <RightSidebar />
    </WrapperHStack>
  )
}

export default Dashboard

const WrapperHStack = styled(HStack)``
