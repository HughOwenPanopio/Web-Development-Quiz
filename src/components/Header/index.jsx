import logo from '../../assets/logo.png'
import './style.css'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Web Development Quiz!</h1>
    </header>
  )
}

export default Header
