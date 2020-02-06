import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'

const Sponsors = (props) => {

  const [sponsors, updateSponsors] = useState([])
  const [sponsorUrl, updateImg] = useState('')
  const [newSponsor, setNewSponsor] = useState('')

  useEffect(() => {
    const getSponsors = () => {
      axios
        .get('/api/sponsor')
        .then(res => {
          updateSponsors(res.data)
        })
        .catch(err => console.log(err))
    }
    getSponsors()
  }, [updateSponsors])

  const submitSponsor = () => {
    axios.post('/api/sponsor', {newSponsor})
    .then(res => {
      updateSponsors(res.data)
    })
    .catch(err => console.log(err)
    )
  }

  const removeSponsor = (id) => {
    axios
      .delete(`/api/sponsor/${id}`)
      .then(res => {
        updateSponsors(res.data)
      })
      .catch(err => console.log(err))
  }

  const submitImg = () => {
    axios
      .put('/api/home', { sponsorUrl })
      .then(res => {
        updateImg(res.data[0])
      })
      .catch(err => console.log(err))
  }

  return (
    <SponsorsBox>
      <h1>Our Sponsors</h1>
      {props.username && (
        <>
          <h2>Sponsors Image URL:</h2>
          <input
            value={sponsorUrl}
            onChange={e => updateImg(e.target.value)}
            type='text'
          /><button onClick={() => submitImg()}>Submit</button>
        </>
      )}
      <img
        className='sponsor-img'
        src={sponsorUrl}
        alt=''
      />
      {sponsors.map((e, i) => {
        return (
          <>
            <p key={e.sponsor_id}>{e.sponsor_text}</p>
            {props.username && (
              <button onClick={() => removeSponsor(e.sponsor_id)}>
                Delete
              </button>
            )}
          </>
        )
      })}
      {props.username && (
        <>
          <h2>Add New Sponsor:</h2>
          <input onChange={e => setNewSponsor(e.target.value)} type='text' />
          <button onClick={() => submitSponsor()}>Submit</button>
        </>
      )}
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
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  .sponsor-img {
    width: 350px;
    height: 350px;
  }
  input {
    width: 500px;
  }
`
