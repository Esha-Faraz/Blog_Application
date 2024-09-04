import React from 'react'
import { Link } from 'react-router-dom'
import AuthorImage from '../assets/a7.jpg'
const PostAuthor = () => {
  return (
 <><Link to={`/post/user/:id`} className='post-author'>
   <div className='post-author-image'>
 <img src={AuthorImage} alt='' />  </div>
 <div className="post-author-info">
    <h5>
        Lana White
    </h5>
    <small className='sm'>Just Now</small>
 </div>
 </Link>

      </>
  )
}

export default PostAuthor;