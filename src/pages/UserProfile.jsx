import { Link } from "react-router-dom"
import ProfileImage from '../assets/a1.jpg'
import { FaCheckCircle, FaEdit } from "react-icons/fa"
import { useState } from "react"
const UserProfile = () => {
  const [profileImage , setProfileImage] =useState('');
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [ currentpassword, setCurrentpassword] = useState();
  const [ newpassword, setNewPassword] = useState();
  const [ confirmnewpassword, ConfirmsetNewPassword] = useState();
    
  return (
    <section className='profile'>

      <div className='container profile-container'>
<Link to={'/myposts/id'}>My Posts</Link>
<div className="profile-details form-container">
  <div className="profile-wrapper">
    <div className="profile-image">
      <img src={ProfileImage } alt="" />
    </div>
    </div>
    <form className="profile-image-form">
      <input type="file" name="profile-image" id="profile-image" accept="png , jpeg ,jpg" 
      onChange={e => setProfileImage(e.target.files[0])}/>
      {/* <label htmlFor="profile-image">
        <FaEdit />

        
      </label> */}
    </form>
  
    <h2>Sarah John</h2>
    <form action="" className="form profile-data-form">
        <p className="form-msg">This is Invalid Message</p>
        <input type="text" placeholder="Full name" name="name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="currentpassword" name="name" value={currentpassword} onChange={e => setCurrentPassword(e.target.value)} />
        <input type="password" placeholder="New Passwordd" name="newpassword" value={newpassword} onChange={e => setNewPassword(e.target.value)} />
        <input type="password" placeholder="Confirm New Password" name="confirmnewpassword" value={confirmnewpassword} onChange={e => setNewPassword(e.target.value)}/>
      <button type="submit" className="btn btn-primary">Update</button>
      </form>
  </div>
</div>

  </section>
  )
}

export default UserProfile