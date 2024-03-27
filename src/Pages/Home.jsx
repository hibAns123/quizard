import { TextField, MenuItem, Button } from '@mui/material'
import React, { useState } from 'react'


import Categories from '../Data/Categories';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../Data/ErrorMessage';

function Home({name,setName,fetchQuestions,history}) {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            navigate("/quiz");
        }
    };

    return (
        <>
            
            <div className='content' style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                
                    <div className='settings' style={{width:'100%', padding:'10px',display:'flex',flexDirection:'column',alignItems:'center',fontWeight:'300px'}}>
                        <h2 style={{ fontSize: '30px' }}>Quiz settings</h2>
                        <div className='select' >
                {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
                        
                       <div style={{display:'flex',flexDirection:'column',width:'100%',paddingLeft:'-200px'}}>
                           
                                <TextField
                                    style={{ marginBottom: 25 }}
                                    label="Enter Your Name"
                                    variant="outlined"
                                    onChange={(e)=>setName(e.target.value)}
                                    
                                />
                                <TextField
                                    select
                                    label="Select Category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    variant="outlined"
                                    style={{ marginBottom: 30 }}
                                >
                                    {Categories.map((cat) => (
                                        <MenuItem key={cat.category} value={cat.value}>
                                            {cat.category}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    label="Select Difficulty"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                    variant="outlined"
                                    style={{ marginBottom: 30 }}
                                >
                                    <MenuItem key="Easy" value="easy">
                                        Easy
                                    </MenuItem>
                                    <MenuItem key="Medium" value="medium">
                                        Medium
                                    </MenuItem>
                                    <MenuItem key="Hard" value="hard">
                                        Hard
                                    </MenuItem>
                                </TextField>
                       </div>
                            </div>
    
                        
                        <Button onClick={handleSubmit}variant="contained"
            color="primary"
            size="large"
            >Start Quiz</Button></div>
    
                    <div>
                </div>
                    
                    <img style={{marginRight:'200px'}} height={'500px'} src="2.png" alt="" />
            </div>
        </>
    )
}

export default Home