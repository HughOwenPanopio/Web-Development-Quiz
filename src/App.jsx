import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import WelcomePage from './components/WelcomePage'
import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'

const initialState = {
  questions: [],
  status: 'loading',
}

function reducer(state, action) {
  switch (action.type) {
    case 'questionReceived':
      return { ...state, question: action.payload, status: 'ready' }
    case 'dataError':
      return { ...state, status: 'error' }
    default:
      throw new Error('Unknown')
  }
}

function App() {
  const [{ question, status }, dispatch] = useReducer(reducer, initialState)

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
        {status === 'ready' && <WelcomePage />}
      </Main>
    </>
  )
}

export default App
