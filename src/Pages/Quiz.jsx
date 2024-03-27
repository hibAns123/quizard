import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Question from '../Components/Question';



function Quiz({name,score,questions,setQuestions,setScore}) {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    useEffect(()=>{
        
        setOptions(questions&&handleShuffle(
            [
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers
        ]))
    },[currQues,questions])
    console.log(questions);

    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
      };
      console.log(options);
  return (
    <>
    <h1>QuiZard</h1>
    <div className='quiz' style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <h3 style={{fontSize:'25px',border:'1px solid black',boxShadow:'4px 4px 2px black',
    padding:'5px 10px'}}>Welcome {name}</h3>
        {questions ? (
            <>
              <div className="quizInfo" style={{width:'100%',display:'flex', justifyContent:'space-between',textTransform:'uppercase', margin:'10px'}}>
                <span>{questions[currQues].category}</span>
                <span>
                
                  Score : {score}
                </span>
              </div>
              <Question
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            </>
          ) : (
            <CircularProgress
              style={{ margin: 100 }}
              color="inherit"
              size={150}
              thickness={1}
            />
          )}
    </div>
    </>
  )
}

export default Quiz