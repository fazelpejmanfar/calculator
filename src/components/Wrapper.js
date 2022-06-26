import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
width: 340px;
height: 540px;
padding: 10px;
border-radius: 10px;
background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;


function Wrapper( {children} ) {
  return (
    <Wrap>{children}</Wrap>
  )
}

export default Wrapper