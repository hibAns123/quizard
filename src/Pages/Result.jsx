import { Button } from '@mui/material';
import React, { useEffect } from 'react'

import {  useNavigate } from 'react-router-dom'

function Result({name,score}) {
  const navigate=useNavigate()
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
    return (
    <>
<div className='result' style={{display:'flex',flexDirection:'column',justifyContent:'center',height:'60vh',textAlign:'center'}}>
        <h1>Quizard</h1>
        <h1>Final Score: {score}</h1>
        <Button variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/">Go To Home</Button>
    
</div>        </>
  )
}

export default Result