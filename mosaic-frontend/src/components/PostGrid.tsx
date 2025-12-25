import PostCard from './PostCard'
import styles from './PostGrid.module.css'
import {useMatch} from "react-router-dom";

export default function PostGrid({posts}: any) {

    const showPostsByAuthor = useMatch("/profile");

    return (

        <div className={styles.container}>
            {posts.map((p: any) => <PostCard key={p.id} post={p}/>)}
        </div>
    )
}