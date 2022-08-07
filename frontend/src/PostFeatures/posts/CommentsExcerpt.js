import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";
import { selectcommentById } from "./postsSlice";
const CommentsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectcommentById(state, postId))
    console.log(post);
    // const comm = useSelector(state => selectcommentById(state, postId))

    return (
        // <article>
        //     <h2>{post.title}</h2>
        //     <p className="excerpt">{post.body}...</p>
        //     <p className="postCredit">
        //         <Link to={`post/${post.id}`}>View Post</Link>
        //         <PostAuthor userId={post.userId} />
        //         <TimeAgo timestamp={post.date} />
        //     </p>
        //     <ReactionButtons post={post} />
        // </article>
        <>
            <div style={{ border: '1px inset' }}>
                <div class="wrap__profile-author">

                    <figure>

                        <img style={{ height: '53px', width: '53px' }} src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1" alt="" class="img-fluid img-circle" />
                    </figure>
                    <div class="wrap__profile-author-detail">

                        <div class="wrap__profile-author-detail-name">
                            <span style={{ textTransform: 'capitalize' }}><PostAuthor userId={post.userId} /> </span>
                            <p style={{ fontWeight: 'bold', fontSize: '8px' }}><TimeAgo timestamp={post.date} /></p>
                            <p className="excerpt">{post.body}</p>
                            <Link to={`/posts/editcomm/${post.id}`}><span  className='editID' >Edit </span></Link>

                        </div>



                        <span style={{ display: 'flex', }}>
                            {/* <ul  class="list-inline">
                  <p  style={{backgroundColor:'beige'}}><ReactionButtons post={post} /></p>  
                </ul> */}
                            {/* &nbsp;&nbsp; <Link to={`/posts/${post.id}`}><span style={{backgroundColor:'beige',padding: '1px'}} >Replies</span></Link> */}
                            {/* &nbsp;&nbsp; <Link to={`/posts/${post.id}`}><span style={{backgroundColor:'beige',padding: '1px'}} >View</span></Link> */}

                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CommentsExcerpt

