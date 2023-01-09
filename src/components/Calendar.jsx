import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styled from 'styled-components'

const CalendarDiv = ({ wid }) => {
  const [value, onChange] = useState(new Date())
  return (
    <Wrapper w={wid} bg="var(--cardBackground)">
      <Calendar className="calend" onChange={onChange} value={value} />
    </Wrapper>
  )
}

export default CalendarDiv

const Wrapper = styled(Box)`
  max-height: 42vh;
  .calend {
    /* background-color: var(--color2); */
    background: var(--cardBackground);
    font-family: 'Poppins', sans-serif;
    padding: 1px;
    font-size: 12px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`
