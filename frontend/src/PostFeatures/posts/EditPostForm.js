import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import { useParams, useNavigate } from 'react-router-dom'

import { selectAllUsers } from "../users/usersSlice";
import { useUpdatePostMutation, useDeletePostMutation } from "./postsSlice";

const EditPostForm = () => {
    const { postId } = useParams()
    const navigate = useNavigate()

    const [updatePost, { isLoading }] = useUpdatePostMutation()
    const [deletePost] = useDeletePostMutation()

    const post = useSelector((state) => selectPostById(state, Number(postId)))
    const users = useSelector(selectAllUsers)

    const [title, setTitle] = useState(post?.title)
    const [content, setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(Number(e.target.value))

    const canSave = [title, content, userId].every(Boolean) && !isLoading;

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                if (JSON.parse(localStorage.getItem("user")).logged_user.id != userId)
                {      
                      alert('you can only edit or delete your posts')
                } 
                   else{
                await updatePost({ id: post.id, title, body: content, userId }).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
                navigate(`/posts/${postId}`)
                alert('post was edited succesfully')
            }} catch (err) {
                console.error('Failed to save the post', err)
            }
        }
    }

    const usersOptions = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >{user.name}</option>
    ))

    const onDeletePostClicked = async () => {
          // console.log()
          let uid=JSON.parse(localStorage.getItem("user")).logged_user.id;
         

        try {
            if (JSON.parse(localStorage.getItem("user")).logged_user.id !==userId)
            {      
                  alert('you can only edit or delete your posts ')
            } 
               else{
            await deletePost({ id: post.id }).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate('/posts')
            alert('post was deleted succesfully')
               }
        } catch (err) {
            console.error('Failed to delete the post', err)
        }
    }

    return (
        <section>
            {/* if */}
            <h2>Edit Post</h2>
            <form style={{border:'1px solid',padding:'15px'}}>
                <label htmlFor="postTitle">Post Title:</label><br/>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                /><br/><br/>
                {/* <label htmlFor="postAuthor">Author:</label><br/>
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
                /><br/><br/>
                <button 
                   class=" btn-primary"

                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button> &nbsp; 
                <button className=" btn-danger deleteButton"
                    type="button"
                    onClick={onDeletePostClicked}
                >
                    Delete Post
                </button>
            </form>
        </section>
    )   
}

export default EditPostForm