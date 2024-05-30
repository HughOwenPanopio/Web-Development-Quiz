import PropTypes from 'prop-types'
import OptionsPage from '../OptionsPage'
function QuestionsPage({ questions }) {
  return (
    <div>
      <h1>{questions.question}</h1>
      <OptionsPage questions={questions} />
    </div>
  )
}

QuestionsPage.propTypes = {
  questions: PropTypes.object,
}

export default QuestionsPage
