import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Login from './Login'
import AddAdmin from './AddAdmin'
import { connect } from 'react-redux'
import { clearUser } from '../ducks/reducer'
import axios from 'axios'

const Contact = props => {
  const [loginHidden, setLogin] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [newMom, showNewMom] = useState(false)
  const [contacts, setContacts] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cell, setCell] = useState('')

  useEffect(() => {
    const getMoms = () => {
      axios
      .get('/api/contact')
      .then(res => setContacts(res.data))
      .catch(err => console.log(err))
    }
    getMoms()
  }, [setContacts])

  const adminLogout = () => {
    axios
      .delete('/api/login')
      .then(res => {
        this.props.clearUser()
      })
      .catch(err => {console.log(err)})
  }

const addMom = () => {
  axios
  .post('/api/contact', {name, email, cell})
  .then(res => {
    setContacts(res.data)
    showNewMom(false)
    setName('')
    setEmail('')
    setCell('')
  })
}

  const removeMom = (id) => {
    axios
    .delete(`/api/contact/${id}`)
    .then(res => setContacts(res.data))
    .catch(err => console.log(err))
  }

  return (
    <>
      <ContactBox>
        <div>
          Dixie Lacrosse Club email:
          <br />
          <a className='email' href='mailto:dhslacrosseclub@gmail.com'>
            dhslacrosseclub@gmail.com
          </a>
        </div>
        <div className='moms-div'>
          {contacts.map(mom => {
            return (
              <div className='mom-info' key={mom.mom_id}>
                {mom.name}
                <br />
                Email:{' '}
                <a className='email' href={`mailto:${mom.email}`}>
                  {mom.email}
                </a>
                <br />
                Cell: {mom.cell}<br/>
                {props.username && (
                  <button onClick={() => removeMom(mom.mom_id)}>Delete</button>
                )}
              </div>
            )
          })}
        </div>
        {props.username && (
          <button onClick={() => showNewMom(true)}>Add Contact</button>
        )}
        {newMom && (
          <div>
            <h3>Name:</h3>
            <input type='text' onChange={e => setName(e.target.value)} />
            <h3>Email:</h3>
            <input type='text' onChange={e => setEmail(e.target.value)} />
            <h3>Cell:</h3>
            <input type='text' onChange={e => setCell(e.target.value)} />
            <div className='button-cont'>
              <button onClick={() => addMom()}>Submit</button>
              <button onClick={() => showNewMom(false)}>Cancel</button>
            </div>
          </div>
        )}
        {!props.username ? (
          <button onClick={() => setLogin(true)}>Admin Login</button>
        ) : (
          <div className='button-cont'>
            <button onClick={() => setShowAdd()}>Add Admin</button>
            <button onClick={() => adminLogout()}>Logout</button>
          </div>
        )}
      </ContactBox>
      {loginHidden && <Login setLogin={setLogin} />}
      {showAdd && <AddAdmin setShowAdd={setShowAdd} />}
    </>
  )
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, { clearUser })(Contact)

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  .email {
    color: blue;
    text-decoration: underline;
  }
  .mom-info {
    margin-top: 10px;
    line-height: 23px;
  }
  .button-cont {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  button {
    box-shadow: inset 0px 1px 0px 0px #caefab;
    background: linear-gradient(to bottom, #77d42a 5%, #5cb811 100%);
    background-color: #77d42a;
    border-radius: 6px;
    border: 1px solid #268a16;
    display: inline-block;
    cursor: pointer;
    color: black;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 4px 0;
    width: 120px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
  }
  button:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }
  button:active {
    position: relative;
    top: 1px;
  }
`
