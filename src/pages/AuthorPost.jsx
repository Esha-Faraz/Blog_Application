import { DummyPosts } from "../data/data";
import PostItem from "../components/PostItem";
import { useState } from "react";
const AuthorPost = () => {
  const [posts , setPosts] =useState(DummyPosts);
  return (
    <section className="authorPosts">
      <h1 className="page-title">Author Posts</h1>
    {posts.length > 0 ?
  
 <div className="container authorPosts-container">
 {
      posts.map(({ id, authorId , category ,Image,title,desc},index) => 
      <PostItem key={index} Image={Image} category={category}  authorId ={authorId} title={title} desc={desc} postId={id}/>)
    }
  
 </div> : <h2 className="error-center">No Posts Found</h2>
}
  </section>
  )
}

export default AuthorPost;