import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import WelcomePage from './components/WelcomePage'
import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'
import QuestionsPage from './components/QuestionsPage'
import Footer from './components/Footer'
import NextButton from './components/NextButton'
import Progress from './components/Progress'

const initialState = {
  questions: [],
  // loading, ready, error, active, finish
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
}

function reducer(state, action) {
  const question = state.questions.at(state.index)

  switch (action.type) {
    case 'questionReceived':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'dataError':
      return { ...state, status: 'error' }
    case 'startQuiz':
      return { ...state, status: 'active' }
    case 'newAnswer':
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      }
    case 'nextQuestions':
      return { ...state, index: state.index + action.payload, answer: null }
    default:
      throw new Error('Unknown')
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  )

  const numQuestions = questions.length
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0)

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
        {status === 'active' && (
          <>
            <Progress
              numQuestions={numQuestions}
              points={points}
              answer={answer}
              index={index}
              totalPoints={totalPoints}
            />
            <QuestionsPage
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          </>
        )}
      </Main>

      <Footer>
        <NextButton dispatch={dispatch} answer={answer} />
      </Footer>
    </>
  )
}

export default App
