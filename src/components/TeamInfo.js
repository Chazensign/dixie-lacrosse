import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios'

const TeamInfo = props => {
  const [editing, changeEditing] = useState(false)
  const [documentId, setId] = useState()
  const [documents, setDocuments] = useState([])
  const [docName, setName] = useState()
  const [docLink, setLink] = useState()
  const [donateUrl, setDonate] = useState()

  useEffect(() => {
    const getInfo = () => {
      axios
        .get('/api/document')
        .then(res => {
          setDocuments(res.data.docs)
          setDonate(res.data.wishlist[0].wishlist)
        })
        .catch(err => console.log(err))
    }
    getInfo()
  }, [setDocuments])

  const handleChange = (text) => {
    setDonate(text)
  }
  const showEdit = (docObj, show) => {
    setName(docObj.doc_name)
    setLink(docObj.doc_link)
    setId(docObj.doc_id)
    changeEditing(show)
  }

  const updateWishlist = () => {
    axios.post('/api/wishlist', {url: donateUrl})
    .then(() => {
      alert('Link Updated')
  })
    .catch(err => console.log(err))
  }

  const submitDoc = () => {
    if (!documentId) {
      axios
        .post('/api/document', { docName, docLink })
        .then(res => {
          setDocuments(res.data)
          showEdit({}, false)

        })
        .catch(err => console.log(err))
    } else {
      axios
        .put('/api/document', { docName, docLink, documentId })
        .then(res => {
          setDocuments(res.data)
          showEdit({}, false)
        })
        .catch(err => console.log(err))
    }
  }

  const deleteDocument = () => {
    axios
      .delete(`/api/document/${documentId}`)
      .then(res => {
        setDocuments(res.data)
        showEdit({}, false)
      })
      .catch(err => console.log(err))
  }

  return (
    <TeamInfoBox>
      <p>
        Since our team is functioning off of donations and sponsors, our team is
        still in need of some items for our season. We have made an Amazon
        wishlist for these items, and would greatly appreciate anything that can
        be donated.
        <br />
        <a href={donateUrl} target='_blank' rel='noopener noreferrer'>
          Click Here To Donate
        </a>
      </p>
      {props.username && (
        <div className='edit-wishlist'>
          <h2>Wishlist URL:</h2>
          <input
            type='text'
            onChange={e => handleChange(e.target.value)}
          />
          <button onClick={() => updateWishlist()}>Submit</button>
        </div>
      )}
      {documents.map((doc, i) => {
        return (
          <div key={doc.doc_id} className='pdf-cont'>
            <a href={doc.doc_link} target='_blank' rel='noopener noreferrer'>
              <h2>{doc.doc_name}</h2>
            </a>
            <embed src={`${doc.doc_link}#toolbar=0`} alt={doc.doc_name} />
            {props.username && (
              <button
                className='edit-button'
                onClick={() => showEdit(doc, true)}>
                Edit
              </button>
            )}
          </div>
        )
      })}
      {editing ? (
        <div className='doc-input'>
          <h3>Document Name:</h3>
          <input value={docName} onChange={e => setName(e.target.value)} />
          <h3>Document URL:</h3>
          <input value={docLink} onChange={e => setLink(e.target.value)} />
          <div className='button-cont'>
            <button onClick={() => submitDoc()}>Submit</button>
            <button onClick={() => showEdit({}, false)}>Cancel</button>
          </div>
          {documentId && (
            <button onClick={() => deleteDocument()}>Delete</button>
          )}
        </div>
      ) : (
        props.username && (
          <button onClick={() => showEdit({}, true)}>Add New</button>
        )
      )}
    </TeamInfoBox>
  )
}

function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps)(TeamInfo)

const TeamInfoBox = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: white;
  overflow: scroll;
  .edit-wishlist {
    width: 100%;
    display: flex;
    align-items: center;
    h2 {
      font-weight: bold;
    }
  }
  p {
    height: fit-content;
    background: #3c68b9;
    color: white;
    padding: 5px;
    a {
      color: blue;
      font-size: 20px;
      font-weight: bold;
    }
    a:hover {
      color: grey;
      cursor: pointer;
    }
  }
  .doc-input {
    height: 258px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 200px;
      height: 18px;
    }
  }
  a {
    h2 {
      margin-bottom: 5px;
      color: #444;
      font-weight: bold;
    }
    h2:hover {
      color: blue;
    }
  }

  input {
    width: 400px;
  }
  embed {
    width: 200px;
    height: 258px;
    border: 1px solid grey;
    cursor: pointer;
    z-index: 4;
  }
  .pdf-cont {
    position: relative;
    z-index: 5;
  }
  .button-cont {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
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
    font-size: 12px;
    font-weight: bold;
    padding: 2px 5px;
    max-height: 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
  }
  button:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }
  .edit-button {
    position: absolute;
    bottom: 15px;
    right: 12px;
  }
`
