import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Result from './Pages/Result'
import { useState } from 'react'
import axios from 'axios'
import Header from './Components/Header'


function App() {
  const [name,setName]=useState()
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
const fetchQuestions=async(category='',difficulty='')=>{
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );
  setQuestions(data.results)

}
  return (
    <>
    <Header/>
    <Routes>
      <Route path={'/'} element={<LandingPage/>}></Route>
      <Route path={'/home'} element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
<Route path={'/quiz'}element={<Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}/>}></Route>
<Route path={'/result'}element={<Result name={name} score={score}/>}></Route>

    </Routes>
    </>
  )
}

export default App
