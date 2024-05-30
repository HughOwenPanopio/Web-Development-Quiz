import './style.css'
import PropTypes from 'prop-types'

function NextButton({ dispatch }) {
  return (
    <button
      className="btn-next"
      onClick={() => dispatch({ type: 'nextQuestions', payload: 1 })}
    >
      Next
    </button>
  )
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
}

export default NextButton
