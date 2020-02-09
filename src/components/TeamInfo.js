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

  useEffect(() => {
    const getEvents = () => {
      axios
        .get('/api/document')
        .then(res => {
          setDocuments(res.data)
        })
        .catch(err => console.log(err))
    }
    getEvents()
  }, [setDocuments])

  const showEdit = (docObj, show) => {
    setName(docObj.doc_name)
    setLink(docObj.doc_link)
    setId(docObj.doc_id)
    changeEditing(show)
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
      {documents.map((doc, i) => {
        return (
          <a href={doc.doc_link} target='_blank'rel="noopener noreferrer">
            <div className='pdf-cont' key={doc.doc_id}>
              <h2>{doc.doc_name}</h2>
              <embed src={`${doc.doc_link}#toolbar=0`} alt={doc.doc_name} />
              {props.username && (
                <button
                  className='edit-button'
                  onClick={() => showEdit(doc, true)}>
                  Edit
                </button>
              )}
            </div>
          </a>
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
      ) : 
        props.username && <button onClick={() => showEdit({}, true)}>Add New</button>
      }
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
  button:active {
    position: relative;
    top: 1px;
  }
  .edit-button {
    position: absolute;
    bottom: 15px;
    right: 12px;
  }
`
