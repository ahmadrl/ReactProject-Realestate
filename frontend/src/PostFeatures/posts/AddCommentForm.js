import { useState } from "react";
import { useSelector } from "react-redux";
import CommentsList from './CommentsList';

import { selectAllUsers } from "../users/usersSlice";
import { resolvePath, useNavigate, useParams } from "react-router-dom";
import { useAddNewCommentMutation } from "./postsSlice";
import Layout from "../../PostComponents/Layout";
const AddCommentForm = () => {
    const [addNewPost, { isLoading }] = useAddNewCommentMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("user")).logged_user.id)
    const [PostId, setPostId] = useState(useParams())
    const users = useSelector(selectAllUsers)

    // const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

  
    const canSave = [content, userId,PostId].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (true) {
            if (!localStorage.getItem('user'))
            {
                alert('you must logged in')
            }
           
            try {

                await addNewPost({  body: content, userId,PostId }).unwrap()

                // setTitle('')
                setContent('')
                setUserId('')
                alert('Comment was added succesfully')
                
                navigate('')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    // const usersOptions = users.map(user => (
    //     <option key={user.id} value={user.id}>
    //         {user.name}
    //     </option>
    // ))

    return (
        <section>
            <div>
                {/* <label htmlFor="postTitle">Question Title:</label><br/> */}
                {/* <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /> <br/><br/> */}
                {/* <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                     {usersOptions}
                </select><br/><br/> */}
                {/* <label htmlFor="postContent">Comment:</label><br/> */}
                <input
                style={{width:'450px',height:'50px'}} 
                placeholder="Add a comment.."
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /> <br/>
                
                <button
                class=" btn-primary text-capitalize"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Add <i class="fa fa-plus-circle mr-1"></i></button>
                        <CommentsList />

            </div>

        </section>
    )
}
export default AddCommentForm