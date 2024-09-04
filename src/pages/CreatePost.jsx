import { useState } from "react";
const CreatePost = () => {
  const [title , setTitle] = useState('');
  const [category , setCategory] = useState('Uncategorised')
  const [description , setDescription] = useState('')
  const [thumbImage , setThumbImage] = useState('')
  const PostCategories =[ 'Education' , 'Discovery' ,'Art' , 'Sports' , 'Business' ,'Science' ,
     'Fashion' , 'Entertainment' , 'Agriculture',
    'Weather' , 'Investment' , 'Music'
  ]
  return (
  <section className="createPosts">
    <div className="container form-container createPosts-container">
    <h2>Create Posts</h2>
      <form action="" className="form create-posts-form">
        <p className="form-msg">This is Invalid Message</p>

        <input type="text" placeholder="Title" name="title" value={title} onChange={e =>setTitle(e.target.value)} autoFocus />
       <select name="category" value={category}  onChange={e =>setCategory(e.target.value)}>
        {
        PostCategories.map(cat => <option key={cat}>{cat}</option>)}
       </select>
       <input type="file" value={thumbImage} onChange={e =>setThumbImage(e.target.value)} autoFocus accept="jpg ,jpeg,png"/>
<textarea cols={"5"} rows={"2"}></textarea>
      <button type="submit" className="btn btn-primary">Create Post</button>
      </form>
    </div>
  </section>
  )
}

export default CreatePost