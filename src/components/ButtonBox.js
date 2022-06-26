import React from 'react'
import styled from 'styled-components';

const BTNBOX = styled.div`
width: 100%;
height: calc(100% - 110px);
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-gap: 10px;
`;

function ButtonBox({children}) {
  return (
<BTNBOX>{children}</BTNBOX>
  )
}

export default ButtonBox