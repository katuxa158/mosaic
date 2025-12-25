import {useEffect, useState} from 'react'
import {getPosts} from '../api/posts.ts'
import PostGrid from '../components/PostGrid.tsx'

export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(r => setPosts(r.data))
    }, [])

    return (
        <>
            <PostGrid posts={posts}/>
        </>
    )
}