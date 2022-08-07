import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const users = useSelector(selectAllUsers)

    const renderedUsers = users.map(user => (
        <li key={user.id}>
            <Link to={`/posts/user/${user.id}`}>{user.name}</Link>
        </li>
    ))

    return (

        <div style={{border:'1px solid'}}>
            <h4>Choose a user</h4>
            <hr/>

            <ul style={{  textTransform: 'capitalize'}}>{renderedUsers}</ul>
        </div>
    )
}

export default UsersList