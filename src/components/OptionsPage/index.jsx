import PropTypes from 'prop-types'
import './style.css'

function OptionsPage({ question, dispatch, answer }) {
  const hasAnswer = answer !== null

  return (
    <div className="option-container">
      {question.options.map((option, index) => (
        <button
          className={`btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswer
              ? index === question.correctAnswer
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswer}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

OptionsPage.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.number,
}

export default OptionsPage
