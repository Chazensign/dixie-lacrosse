import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { clearUser } from '../ducks/reducer'
import axios from 'axios'


const Home = (props) => {
  const [homeURL, updateImgURL] = useState('')
  const [homeText, updateText] = useState('')
  const [showEdit, updateEdit] = useState(false)

  useEffect(() => {
    const getInfo = () => {
      axios
        .get('/api/home')
        .then(res => {
          updateText(res.data.home_text)
          updateImgURL(res.data.home_img)
        })
        .catch(err => console.log(err))
    }
    getInfo()
  }, [homeText, updateImgURL])

  const saveHome = () => {
    axios.put('/api/home', { homeURL, homeText })
    .then(res => {
      updateText(res.home_text)
      updateImgURL(res.home_img)
      updateEdit(false)
    })
  }

  return (
    <AboutSection image={homeURL} >
      <h2>OUTPLAY, OUTWORK, OUTLAST!</h2>
      <div className='team-pic'></div>
      {showEdit ? 
        <>
        <h3>Image URL:</h3>
          <input
            type='text'
            className='imgUrl'
            value={homeURL}
            onChange={e => updateImgURL(e.target.value)}
          />
          <h3>About Text:</h3>
          <textarea name="home-text" value={homeText} id="" cols="30" rows="10"></textarea>
          <div className='button-cont'>
          <button onClick={() => saveHome()}>Submit</button>
          <button onClick={() => updateEdit(false)} >Cancel</button>
          </div>
        </> :
      homeText && <p className='about'>{homeText}{(props.username && !showEdit) && <button className='edit-button' onClick={() => updateEdit(true)} >Edit</button>}</p>}
      
    </AboutSection>
  )
}
 
function mapStateToProps(reduxState) {
  return {
    userId: reduxState.userId,
    username: reduxState.username
  }
}
export default connect(mapStateToProps, { clearUser })(Home)

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  width: 600px;
  padding: 30px;
  background: white;
  .team-pic {
    width: 500px;
    height: 300px;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
  }
  h2 {
    font-family: 'Sport Font';
    font-size: 30px;
    margin: 0 0 20px 0;
  }
  h3 {
  }
  .imgUrl {
    width: 400px;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 50%;
  }
  .about {
    position: relative;
    width: 400px;
    background: #3c68b9;
    color: white;
    padding: 10px;
    margin: 20px;
  }
  textarea {
    width: 400px;
    height: 100px;
  }
  .button-cont {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
  }
  button {
    position: absolute;
    bottom: 5px;
    right: 5px;
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
    padding: 4px 0;
    width: 60px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #aade7c;
    margin: 0 10px;
  }
  button:hover {
    background: linear-gradient(to bottom, #5cb811 5%, #77d42a 100%);
    background-color: #5cb811;
  }
`
