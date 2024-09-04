import { useState } from "react"
import { Link } from "react-router-dom"
const Login = () => {
  const [userData , setUserData] = useState(
    {

      email: "",
      password: "",

    })
    const changeInputHandle =(e) =>
    {
      setUserData(prevState => {
        return{...prevState,[e.target.name] : e.target.value}
      })
    }
  return (
 <section className='login'>
   <div className="container register-container form-container">
      <h2>Login</h2>
      <form action="" className="form register-form">
        <p className="form-msg">This is Invalid Message</p>

        <input type="email" placeholder="Email" name="email" value={userData.email} onChange={changeInputHandle} />
        <input type="password" placeholder="Password" name="name" value={userData.password} onChange={changeInputHandle} />
       
      <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <small>Don't Have an Account? <Link to ={'/register'}>Register</Link></small>
    </div>
 </section>
  )
}

export default Login