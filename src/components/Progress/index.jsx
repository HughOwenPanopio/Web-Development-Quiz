import PropTypes from 'prop-types'
import './style.css'

function Progress({ numQuestions, points, answer, index, totalPoints }) {
  return (
    <div className="progress-container">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <div className="questions-points">
        <p>
          <strong>
            {index + 1}/{numQuestions}
          </strong>{' '}
          Questions
        </p>

        <p>
          <strong>
            {points}/{totalPoints}
          </strong>{' '}
          Points
        </p>
      </div>
    </div>
  )
}

Progress.propTypes = {
  numQuestions: PropTypes.number,
  points: PropTypes.number,
  answer: PropTypes.number,
  index: PropTypes.number,
  totalPoints: PropTypes.number,
}

export default Progress
