import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <Link to="/" className="title" style={{fontSize:'50px',cursor:'pointer' ,color:'grey', textDecoration:'none'}}>
        Qui<span style={{color:'orange'}}>Zard</span>
      </Link>
      <hr className="divider" style={{margin:"10px",width:'100%',backgroundColor:'gray'}} />
    </div>
  )
}

export default Header