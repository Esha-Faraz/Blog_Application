import HeadPostImage from '../assets/1.jpg'
import { Link } from "react-router-dom";
import { HeadPosts } from '../data/data';

const HeadPost = () => {
  return (
<article className="head-post">
    {
        HeadPosts.map(({id,Image,authorId,title,desc},index) => {
            return(
                <div key={index} className='container headpost-container'>
              
    <div className="post-content">
        <Link to={`post/${authorId}`}>
        <h1>{title}</h1>
        </Link>
        <p>{desc}</p>
    </div>
    <div className="post-image">
        <img src={Image} alt="" width={400} />
    </div> 
                </div>
            )
    })
}
    

 </article>
  )
}

export default HeadPost