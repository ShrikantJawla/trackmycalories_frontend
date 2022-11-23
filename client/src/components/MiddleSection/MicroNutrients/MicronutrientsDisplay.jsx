import { Box, Progress } from '@chakra-ui/react'
import React from 'react'
import { TableWrapper } from './MicroNutrients.Styles'

const MicronutrientsDisplay = ({ wid, headTitle, dataArray }) => {
  return (
    <Box
      w={wid}
      bg="var(--cardBackground)"
      p={2}
      h="fit-content"
      rounded="10px"
      py="10px"
      boxShadow="var(--boxShadow)"
      color="#426696"
    >
      <Box
        w="full"
        textAlign="center"
        color="#54504c"
        bg="var(--cardBackground)"
        fontSize="13px"
        fontWeight="bold"
        p="2px"
        pb="10px"
      >
        {headTitle}
      </Box>
      <TableWrapper>
        <tbody>
          {dataArray &&
            dataArray.map(({ title, cal }, ind) => (
              <tr key={`${ind}+${Math.random()}`}>
                <td>{title}</td>
                <td style={{ textAlign: 'right' }}>
                  {((((cal / 1000) * 100) / 2400) * 100).toFixed(2)}
                </td>
                <td>kCal</td>
                <td
                  style={{
                    display: 'flex',
                    justifyContent: 'right',
                  }}
                >
                  <Progress
                    //   bg="#ffffff"
                    bg="var(--cardBackground)"
                    colorScheme="red"
                    height="18px"
                    w="87.5px"
                    value={(cal / 2400) * 100}
                    borderRadius="2px"
                    boxShadow="var(--boxShadow)"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </TableWrapper>
    </Box>
  )
}

export default MicronutrientsDisplay
