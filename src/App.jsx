import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import WelcomePage from './components/WelcomePage'
import LoadingPage from './components/LoadingPage'

function App() {
  useEffect(function () {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('Error fetching data', error))
  }, [])

  return (
    <>
      <Header />

      <Main>
        <LoadingPage />
        <WelcomePage />
      </Main>
    </>
  )
}

export default App
