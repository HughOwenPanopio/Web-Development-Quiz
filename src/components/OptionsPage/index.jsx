import PropTypes from 'prop-types'
import './style.css'

function OptionsPage({ questions }) {
  return (
    <div className="option-container">
      {questions.options.map((option) => (
        <button className="btn-option" key={option}>
          {option}
        </button>
      ))}
    </div>
  )
}

OptionsPage.propTypes = {
  questions: PropTypes.object,
}

export default OptionsPage
