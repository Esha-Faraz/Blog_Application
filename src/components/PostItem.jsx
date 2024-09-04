import { Link } from "react-router-dom";
import Posts from "./Posts"
import PostAuthor from "./PostAuthor";
 

const PostItem = ({Image ,authorId , category,title,desc,postId}) => {
const shortTitle = title.lenght > 30 ? title.substr(0 , 30) + '...' : title;
const shortDesc = desc.lenght > 145 ? desc.substr(0 , 145) + '...' : desc;

  return (
 <article className="post">
    <div className="post-image">
        <img src={Image} alt="" width={400} />
    </div>
    <div className="post-content">
        <Link to={`/post/${postId}`}>
        <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className="post-footer">
            <PostAuthor />
            <Link to={`/posts/categories/${category}`} className="btn btn-category">
            {category}
            </Link>

        </div>

    </div>

 </article>
  )
}

export default PostItem;