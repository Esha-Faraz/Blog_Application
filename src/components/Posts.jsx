import { DummyPosts } from "../data/data"
import { useState } from "react"
import PostItem from "./PostItem"
import HeadPost from "./HeadPost"
const Posts = () => {
  const [posts , setPosts] =useState(DummyPosts);
  return (
    <section className="posts">
<div className="header-posts-area">
<HeadPost />
</div>
      {posts.length > 0 ?
    
   <div className="container posts-container">
   {
   posts.map(({ id, authorId , category ,Image,title,desc},index) => 
  <PostItem key={index} Image={Image} category={category}  authorId ={authorId} title={title} desc={desc} postId={id}/>)
  }
    
   </div> : <h2 className="error-center">No Posts Found</h2>
  }
    </section>
  )
}

export default Posts;