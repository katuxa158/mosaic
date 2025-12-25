import {useNavigate} from 'react-router-dom'
import styles from './PostCard.module.css'

export default function PostCard({post}: any) {

    const navigate = useNavigate()
    return (
        <img onClick={() => navigate(`/posts/${post.id}`)} src={post.image} className={styles.cover} alt={"Post"}/>
    )
}