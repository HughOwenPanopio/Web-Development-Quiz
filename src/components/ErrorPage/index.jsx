import error from '../../assets/error.png'
import './style.css'

function ErrorPage() {
  return (
    <div className="error">
      <img src={error} alt="error image" />
      <h1>Error fetching questions</h1>
    </div>
  )
}

export default ErrorPage
