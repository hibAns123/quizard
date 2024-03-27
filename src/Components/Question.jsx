import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from '../Data/ErrorMessage';
import { Button } from '@mui/material';
import './Question.css'
function Question({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
  }) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate=useNavigate()

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "selects";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "selects";
      };

      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score +1);
        setError(false);
      };
    
      const handleNext = () => {
        if (currQues > 8) {
          navigate("/result");
        } else if (selected) {
          setCurrQues(currQues + 1);
          setSelected();
        } else setError("Please select an option first");
      };
    
      const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
      };

  return (
    <div className="question" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
    <h1>Question {currQues + 1} :</h1>

    <div className="singleQuestion" style={{width:"95%",minHeight:'350px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',border:'5px solid grery',padding:'20px',marginTop:'10px'}}>
      <h2>{questions[currQues].question}</h2>
      <div className="options" style={{width:'100%', display:'flex',flexWrap:'wrap',flex:"1",alignItems:'center',justifyContent:'space-around',margin:'10px'}}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {options &&
          options.map((i) => (
            <button
              className={`singleOption  ${selected && handleSelect(i)}`}
              key={i}
              onClick={() => handleCheck(i)}
              disabled={selected} style={{width:'46%',height:'50px',padding:'15px 20px',margin:'10px', boxShadow:'0 0 2px black'}}
            >
              {i}
            </button>
          ))}
      </div>
      <div className="controls" style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ width: 185 }}
          href="/"
          onClick={() => handleQuit()}
        >
          Quit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={handleNext}
        >
          {currQues > 20 ? "Submit" : "Next Question"}
        </Button>
      </div>
    </div>
  </div>
  )
}

export default Question