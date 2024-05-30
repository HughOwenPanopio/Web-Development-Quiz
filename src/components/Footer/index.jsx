import PropTypes from 'prop-types'
import './style.css'

function Footer({ children }) {
  return <footer>{children}</footer>
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
