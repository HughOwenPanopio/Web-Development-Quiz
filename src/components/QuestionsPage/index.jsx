import PropTypes from 'prop-types'
import OptionsPage from '../OptionsPage'
function QuestionsPage({ question, dispatch, answer }) {
  return (
    <div>
      <h1>{question.question}</h1>
      <OptionsPage question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}

QuestionsPage.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.number,
}

export default QuestionsPage
