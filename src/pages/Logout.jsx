import { Link } from "react-router-dom"

const Logout = () => {
  return (
<section>
<div className="error-center">
  <h1>Logout</h1>
  <Link to={"/"} className="btn btn-primary">Go back to Homepage</Link>
</div>
   </section>
  )
}

export default Logout