
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <div>
        <img src="" alt="" />
        <h1 style={{textAlign:'center',color:'grey',fontSize:'50px'}}>welcome to <span style={{color:'orange'}}>QuiZard!!</span></h1>
        <h3 style={{width:'85%',textAlign:'center',marginTop:'100px',fontFamily:'sans-serif',letterSpacing:'1px',fontSize:'20px',color:'#343a40',textAlignLast:'center'}}>Are you ready to challenge your knowledge and have some fun? Look no further! QuiZard is your go-to destination for exciting quizzes on a wide range of topics.</h3>
       <Link to={'/home'} style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center',textDecoration:'none',paddingTop:'30px'}}> <Button style={{color:'white',fontWeight:'bolder',backgroundColor:'orange',padding:'10px',borger:'0px',borderRadius:'5px'}}>Let the fun begin!</Button></Link>
    </div>
    </>
  )
}

export default LandingPage