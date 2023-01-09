import styled from 'styled-components'

export const TableWrapper = styled.table`
  font-family: 'Open Sans', sans-serif;
  background:var(--cardBackground);
  width: 100%;
  /* border-radius: 10px; */
  tbody {
    tr {
      font-size: 12px;
      /* background-color: #f4f2f2; */
      td {
        padding: 3px 8px;
      }
    }
    tr:nth-child(odd) {
      /* background-color: #f7f7f7; */
    }
  }
`
