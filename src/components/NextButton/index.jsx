import './style.css'
import PropTypes from 'prop-types'

function NextButton({ dispatch }) {
  return <button className="btn-next">Next</button>
}

NextButton.propTypes = {
  dispatch: PropTypes.func,
}

export default NextButton