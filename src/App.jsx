import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import WelcomePage from './components/WelcomePage'
import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'
import QuestionsPage from './components/QuestionsPage'

const initialState = {
  questions: [],
  // loading, ready, error, active, finish
  status: 'loading',
  index: 0,
}

function reducer(state, action) {
  switch (action.type) {
    case 'questionReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataError':
      return { ...state, status: 'error' }
    case 'startQuiz':
      return { ...state, status: 'active' }
    default:
      throw new Error('Unknown')
  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const numQuestions = questions.length

  useEffect(function () {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'questionReceived', payload: data }))
      .catch((error) => dispatch({ type: 'dataError', payload: error }))
  }, [])

  return (
    <>
      <Header />

      <Main>
        {status === 'loading' && <LoadingPage />}
        {status === 'error' && <ErrorPage />}
        {status === 'ready' && (
          <WelcomePage dispatch={dispatch} numQuestions={numQuestions} />
        )}
        {status === 'active' && <QuestionsPage questions={questions[index]} />}
      </Main>
    </>
  )
}

export default App
