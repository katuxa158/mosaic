import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {getPost, likePost, dislikePost} from '../api/posts.ts'

export default function PostPage() {
    const {id} = useParams()
    const [post, setPost] = useState<any>()

    useEffect(() => {
        getPost(Number(id)).then(r => setPost(r.data))
    }, [id])

    if (!post) return null

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image}/>
            <p>{post.content}</p>
            <button onClick={() => likePost(post.id)}>👍 {post.likes_count}</button>
            <button onClick={() => dislikePost(post.id)}>👎 {post.dislikes_count}</button>
        </div>
    )
}