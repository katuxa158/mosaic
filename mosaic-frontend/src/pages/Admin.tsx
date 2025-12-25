import {useEffect, useState} from 'react'
import {adminUsers} from '../api/users'

export default function Admin() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        adminUsers().then(r => setUsers(r.data))
    }, [])

    return (
        <ul>
            {users.map((u: any) => (
                <li key={u.id}>{u.username} | {u.posts_count} | {String(u.is_online)}</li>
            ))}
        </ul>
    )
}