import './style.css'
import PropTypes from 'prop-types'

function NextButton({ dispatch, answer }) {
  if (answer === null) return null

  return (
    <>
      <button
        className="btn-next"
        onClick={() => dispatch({ type: 'nextQuestions', payload: 1 })}
      >
        Next
      </button>
    </>
  )
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
  answer: PropTypes.number,
}

export default NextButton
