import './style.css'
import PropTypes from 'prop-types'

function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null

  return (
    <>
      {index < numQuestions - 1 && (
        <button
          className="btn-next"
          onClick={() => dispatch({ type: 'nextQuestions', payload: 1 })}
        >
          Next
        </button>
      )}

      {index === numQuestions - 1 && (
        <button
          className="btn-next"
          onClick={() => dispatch({ type: 'finishedQuiz' })}
        >
          Finish
        </button>
      )}
    </>
  )
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.number,
  index: PropTypes.number,
  numQuestions: PropTypes.number,
}

export default NextButton
