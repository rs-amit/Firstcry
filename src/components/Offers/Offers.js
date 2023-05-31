import React from 'react'
import styled from "styled-components"

const AnnouncementContainer = styled.div`
  display:flex;
  justify-content:center;
  background-color: #FFD81C;
  padding: 15px;
`

function Offers() {
  return (
    <AnnouncementContainer> Super Deal! Free Shopping on Order Over $100 </AnnouncementContainer>
  )
}

export default Offers
