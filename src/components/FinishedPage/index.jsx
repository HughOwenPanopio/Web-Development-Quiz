import PropTypes from 'prop-types'
import './style.css'

function FinishedPage({ points, totalPoints, dispatch }) {
  const percentage = (points / totalPoints) * 100

  let emoji
  if (percentage === 100) {
    emoji = '🏆'
  } else if (percentage >= 80) {
    emoji = '🥇'
  } else if (percentage >= 70) {
    emoji = '👌🏻'
  } else if (percentage >= 50) {
    emoji = '🤦🏻‍♂️'
  } else {
    emoji = '😡'
  }

  return (
    <div>
      <p className="result">
        <strong>{emoji}</strong> You scored <strong>{points}</strong> out of{' '}
        <strong>{totalPoints}</strong>({Math.ceil(percentage)}%)
      </p>

      <button
        className="btn-restart"
        onClick={() => dispatch({ type: 'restartQuiz' })}
      >
        Restart Quiz
      </button>
    </div>
  )
}

FinishedPage.propTypes = {
  points: PropTypes.number,
  totalPoints: PropTypes.number,
  dispatch: PropTypes.func,
}

export default FinishedPage
