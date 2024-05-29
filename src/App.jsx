import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <>
      <Header />

      <Main>
        <WelcomePage />
      </Main>
    </>
  )
}

export default App
