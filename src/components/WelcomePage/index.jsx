import './style.css'
import PropTypes from 'prop-types'

function WelcomePage({ dispatch, numQuestions }) {
  return (
    <div className="welcome-page">
      <h2>Welcome to the Web Development Quiz!</h2>
      <h3>
        <strong>{numQuestions}</strong> questions to test your web development
        mastery
      </h3>
      <button
        className="btn-welcome"
        onClick={() => dispatch({ type: 'startQuiz' })}
      >
        Start Quiz!
      </button>
    </div>
  )
}

WelcomePage.propTypes = {
  dispatch: PropTypes.func,
  numQuestions: PropTypes.number,
}

export default WelcomePage
