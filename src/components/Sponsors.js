import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useState } from 'react'

const Sponsors = (props) => {

  const [sponsors, updateSponsors] = useState([])

  return (
    <SponsorsBox>
      <h1>Our Sponsors</h1>
      <h2>Sponsors Image URL:</h2>
      <img className='sponsor-img' src='' alt='' />
      {sponsors.map((sponsorText, i) => {
        return (
        <p key={i} >{sponsorText}</p>
        )
      })}
      {props.username && <input type='text' />}
    </SponsorsBox>
  )
}
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(Sponsors)

const SponsorsBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  .sponsor-img {
    width: 550px;
    height: 650px;
  }
`
