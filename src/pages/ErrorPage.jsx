import { Link } from "react-router-dom"


const ErrorPage = () => {
  return (
   <section>
<div className="error-center">
  <h1>404 Error</h1>
  <p>Sorry, the page you are looking for does not exist.</p>
  <Link to={"/"} className="btn btn-primary">Go back to Homepage</Link>
</div>
   </section>
  )
}

export default ErrorPage;