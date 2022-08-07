import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useEffect, useState } from 'react';
import AddCommentForm from './AddCommentForm';
const SinglePostPage = () => {
    const [visible, setVisible] = useState('none');
   

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem("user")))   
        setVisible('none')
        else if (JSON.parse(localStorage.getItem("user"))) 
        { 
            setVisible('block')
        }  
          
    }, []);
      
    

    const { postId } = useParams()
    const post = useSelector((state) => selectPostById(state, Number(postId)));
              

    if (!post) {
        return (

            <section>

                <h2>Post not found!</h2>
            </section>
        )
    }
    else
    return ( 
<>

    <div class="wrap__profile">

    <div class="wrap__profile-author">
    <figure>

                <img style={{height:'90px'}} src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1" alt="" class="img-fluid img-circle" />
            </figure>
        <article class="wrap__profile-author-detail" >
        <p style={{fontWeight:'bold',float:'right'}} className="postCredit">
            
            {/* if statment will be here */}
            
        &nbsp;&nbsp;  . <Link to={`/posts/edit/${post.id}`}><span style={{display:visible}} className='editID' >Edit Post</span></Link>
            </p>   
            <span style={{  textTransform: 'capitalize'}}><PostAuthor userId={post.userId} /> </span>
              <TimeAgo timestamp={post.date} /> 
            <h5>About {post.title}</h5>
            <h6>{post.body}</h6>
            
            <ReactionButtons post={post} />



            {/* <Comments
         commentsUrl="http://localhost:8000/comments"
        currentUserId="1"
      /> */}
                   <AddCommentForm />

        </article>
        </div>
        

        </div>

        </>
    )
    
}
export default SinglePostPage

