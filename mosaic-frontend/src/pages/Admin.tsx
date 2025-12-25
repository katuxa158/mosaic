import {useEffect, useState} from 'react'
import {adminUsers} from '../api/users'
import styles from './Admin.module.css'

interface User {
    id: number;
    username: string;
    posts_count: number;
    is_online: boolean;
}

export default function Admin() {
    const [users, setUsers] = useState<User[] | undefined>()
    const [access, setAccess] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        adminUsers().then(r => {
            if (r.status === 200) {
                setUsers(r.data)
                setAccess(true)
            } else if (r.status === 403) {
                setAccess(false)
            }
            setLoading(false);
        })
    }, [])

    if (!access) {
        return (
            <div className={styles.alert}>
                Требуются права администратора
            </div>
        )
    }

    if (loading) {
        return <div className={styles.loader}>Загрузка...</div>;
    }

    return (
        <div className={styles.tableContainer}>
            <table className={styles.customTable}>
                <thead className={styles.thead}>
                <tr>
                    <th className={styles.th}>Пользователь</th>
                    <th className={styles.th}>Посты</th>
                    <th className={styles.th}>Статус</th>
                </tr>
                </thead>
                <tbody>
                {!access ? (
                    <tr>
                        <td colSpan={3} className={styles.noAccess}>
                            <div className={styles.alert}>
                                Требуются права администратора
                            </div>
                        </td>
                    </tr>
                ) : (
                    users?.map((u) => (
                        <tr key={u.id} className={styles.row}>
                            <td className={styles.td}>
                                <div className={styles.userCell}>
                                    {u.username}
                                </div>
                            </td>
                            <td className={styles.td}>{u.posts_count}</td>
                            <td className={styles.td}>
                                    <span className={`
                                        ${styles.statusBadge} 
                                        ${u.is_online ? styles.online : styles.offline}
                                    `}>
                                        {u.is_online ? "В сети" : "Оффлайн"}
                                    </span>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}