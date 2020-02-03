import React from 'react'
import styled from 'styled-components'

const TeamInfo = () => {
  return (
    <TeamInfoBox>
      <a
        href='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/EQUIPMENT+CHECKOUT+AGREEMENT.pdf'
        target='_blank'>
        <h2>Equipment Checkout Agreement</h2>
        <img
          src='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/EQUIPMENT+CHECKOUT+AGREEMENT.pdf'
          alt='Equipment Checkout Agreement'
        />
      </a>
      <a
        href='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/PLAYER+INFORMATION+FORM.pdf'
        target='_blank'>
        <h2>Player Information Form</h2>
        <img
          src='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/PLAYER+INFORMATION+FORM.pdf'
          alt='Player Information Form'
        />
      </a>
      <a
        href='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/Parent_player+info+for+lacrosse+club.pdf'
        target='_blank'>
          <h2>Program Information</h2>
        <img
          src='https://activsocial-project.s3-us-west-1.amazonaws.com/Dixie/Parent_player+info+for+lacrosse+club.pdf'
          alt='Program Info'
        />
      </a>
    </TeamInfoBox>
  )
}

export default TeamInfo

const TeamInfoBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: white;
  a {
    color: grey;
    img {
      width: 225px;
      height: auto;
      border: 1px solid grey;
    }
  }
  `