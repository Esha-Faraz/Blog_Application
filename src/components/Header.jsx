import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<nav>
    <div className='container nav-container'>
        <Link className='nav-logo' to = {''}>
        <h3>Stellar <span>Stories</span></h3>
        </Link>
<ul className='nav-menu'>
    <li><Link to = {'/profile/id'}>John Ben</Link></li>
    <li><Link to = {'/create'}>Create Posts</Link></li>
    <li><Link to = {'/authors'}>Authors</Link></li>
    <li><Link to = {'/logout'}>Logout</Link></li>

</ul>
<button className='nav-toggle-button'>
    <FaBars />
    <AiOutlineClose />
</button>
    </div>
</nav>
  )
}

export default Header