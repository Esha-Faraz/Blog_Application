import { Link } from "react-router-dom";
import { DummyPosts } from "../data/data"
import { useState } from "react"
const Dashboard = () => {
  const [posts, setPosts] = useState(DummyPosts);
  return (
<section className='dashboard'>
{posts.length > 0 ?<div className="container dashboard-container">
 {
 posts.map(({ id, authorId , category ,Image,title,desc},index)=>{
return(
  <article key={index} className="dashboard-posts">
<div className="dashboard-post-info">
<div className="dashboard-post-image">
<img src={Image} alt={title} />
</div>
<h5>{title}</h5>
</div>
<div className="dashboard-post-action">
<Link to={`/post/${authorId}`} className="btn-v btn-sm">View</Link>
<Link to={`/post/${authorId}/edit`} className="btn-e btn-sm btn-primary">Edit</Link>
<Link to={`/post/${authorId}/delete`} className="btn-d btn-sm btn-danger">Delete</Link>
</div>
  </article>
)
 })
}
    </div> : <h2 className="error-center">You Dont Have any Posts.</h2>
};
</section>
)
}


export default Dashboard