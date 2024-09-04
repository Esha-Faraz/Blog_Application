import { useState } from "react";
const EditPost = () => {
  const [title , setTitle] = useState('');
  const [category , setCategory] = useState('Uncategorised')
  const [description , setDescription] = useState('')
  const [thumbImage , setThumbImage] = useState('')
  const PostCategories =[ 'Education' , 'Discovery' ,'Art' , 'Sports' , 'Business' ,'Science' ,
     'Fashion' , 'Entertainment' , 'Agriculture',
    'Weather' , 'Investment' , 'Music'
  ]
  return (
  <section className='editPost'>
    <div className="container form-container editPosts-container">
    <h2>Edit Posts</h2>
      <form action="" className="form edit-posts-form">
        <p className="form-msg">This is Invalid Message</p>

        <input type="text" placeholder="Title" name="title" value={title} onChange={e =>setTitle(e.target.value)} autoFocus />
       <select name="category" value={category}  onChange={e =>setCategory(e.target.value)}>
        {
        PostCategories.map(cat => <option key={cat}>{cat}</option>)}
       </select>
       <input type="file" value={thumbImage} onChange={e =>setThumbImage(e.target.value)} autoFocus accept="jpg ,jpeg,png"/>
       <textarea  name="description" value={description} rows="4" cols="50"  onChange={e =>setDescription(e.target.value)}/>
      <button type="submit" className="btn btn-primary">Update Post</button>
      </form>
    </div>
  </section>
  )
}

export default EditPost