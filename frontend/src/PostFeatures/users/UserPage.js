import { useSelector } from 'react-redux'
import { selectUserById } from '../users/usersSlice'
import { Link, useParams } from 'react-router-dom'
import { useGetPostsByUserIdQuery } from '../posts/postsSlice'
const UserPage = () => {
    const { userId } = useParams()
    const user = useSelector(state => selectUserById(state, Number(userId)))

    const {
        data: postsForUser,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsByUserIdQuery(userId);

    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        const { ids, entities } = postsForUser
        content = ids.map(id => (
            <li key={id}>
                <Link to={`/posts/${id}`}>{entities[id].title}</Link>
            </li>
        ))
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return (                       

        <div style={{  textTransform: 'capitalize',border:'1px solid'}} >
             <figure>

<img style={{ height: '90px', width: '90px' }} src="https://i0.wp.com/betterthanblended.com/wp-content/uploads/2017/05/Icons-01.png?w=1080&ssl=1" alt="" class="img-fluid img-circle" />
</figure>
            <h2 style={{  textTransform: 'capitalize'}} >{user?.name}</h2> 

            <hr/>
            <span>review title: </span>
            <ol>{content}</ol>
        </div>
    )
}

export default UserPage