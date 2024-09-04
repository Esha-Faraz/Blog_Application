import { Link } from 'react-router-dom'
import PostAuthor from '../components/PostAuthor'
import PostDtailImage from '../../src/assets/1.jpg'
const PostDetail = () => {
  return (
  <section>
    <div className='container PostDtail-container'>
      <div className="postdtail-top">
<PostAuthor />
  <div className="post-dtail-buttons">
    <Link to={'/post/123/edit'}className='btn btn-sm btn-primary'>Edit</Link>
    <Link to={'/post/123/delete'}className='btn btn-sm btn-danger'>Delete</Link>

</div>
</div>
<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
<div className="postdtail-image">
<img src={PostDtailImage} />
</div>
 
    <div className="postdtail-para">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maiores illo, laudantium quisquam deleniti rerum modi minus aut incidunt molestiae reprehenderit animi error perferendis esse ratione suscipit et dolorem voluptatibus!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit explicabo modi quaerat reiciendis enim sed nulla doloremque repellat? Voluptas optio sed placeat deleniti magni expedita architecto perspiciatis ullam facilis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt explicabo delectus molestias aperiam illo non harum. Repellat, totam quasi.</p>
    
    </div>
    </div>
  </section>
  )
}

export default PostDetail;