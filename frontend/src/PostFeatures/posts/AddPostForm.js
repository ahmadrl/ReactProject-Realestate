import { useState } from "react";
import { useSelector } from "react-redux";

import { selectAllUsers } from "../users/usersSlice";
import { resolvePath, useNavigate } from "react-router-dom";
import { useAddNewPostMutation } from "./postsSlice";
import Layout from "../../PostComponents/Layout";
const AddPostForm = () => {
    const [addNewPost, { isLoading }] = useAddNewPostMutation()

    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("user")).logged_user.id)

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)


    const canSave = [title, content, userId].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (true) {
            if (!localStorage.getItem('user'))
            {
                alert('you must logged in')
            }
            else
            try {
                await addNewPost({ title, body: content, userId }).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                alert('post was added succesfully')
                
                navigate('/posts')
            } catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a question</h2><br/>
            <div style={{border:'1.5px solid',padding:'15px'}}>
                <label htmlFor="postTitle">Question Title:</label><br/>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /> <br/><br/>
                {/* <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                     {usersOptions}
                </select><br/><br/> */}
                <label htmlFor="postContent">Content:</label><br/>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                /> <br/>
                
                <button
                class="btn btn-primary text-capitalize"
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Post <i class="fa fa-plus-circle mr-1"></i></button>
            </div>
        </section>
    )
}
export default AddPostForm