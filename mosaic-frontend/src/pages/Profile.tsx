import {useEffect, useState} from 'react'
import {me} from '../api/users.ts'
import Button from "../components/Button/Button.tsx";
import {useNavigate} from "react-router-dom";
import styles from "../components/PostGrid.module.css";
import PostCard from "../components/PostCard.tsx";
import {getPosts} from "../api/posts.ts";

export default function Profile() {
    const [user, setUser] = useState<any>()
     const navigate = useNavigate()

     const [posts, setPosts] = useState([])


    useEffect(() => {
        getPosts().then(r => setPosts(r.data))
        me().then(r => setUser(r.data))
    }, [])

    if (!user) return null

    return (
        <div>
            <h2>{user.username}</h2>
            <img src={user.avatar}/>
            <Button onClick={() => navigate("/create")}>Добавить пост</Button>
            <h2>Мои посты</h2>
            <div className={styles.container}>
                {posts.filter(value => value.author === user.id).map((p: any) => <PostCard key={p.id} post={p}/>)}
            </div>

        </div>
    )
}