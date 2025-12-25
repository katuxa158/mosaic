import {useEffect, useState} from 'react'
import {adminUsers} from '../api/users'

export default function Admin() {
    const [users, setUsers] = useState([])
    const [access, setAccess] = useState<boolean>(false);

    useEffect(() => {
        adminUsers().then(r => {
            if (r.status === 200) {
                setUsers(r.data)
            }
            if (r.status === 403) {
                setAccess(false)
            }
        })
    }, [])

    return (
        <ul>
            {
                !access && <div>
                    <h2>Вы должны иметь роль администратора</h2>
                </div>
            }
            {users.map((u: any) => (
                <li key={u.id}>{u.username} | {u.posts_count} | {String(u.is_online)}</li>
            ))}
        </ul>
    )
}