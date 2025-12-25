import api from './axios'

export const getPosts = () => api.get('/posts/')
export const getPost = (id: number) => api.get(`/posts/${id}/`)
export const createPost = (data: FormData) => api.post('/posts/', data)
export const deletePost = (id: number) => api.delete(`/posts/${id}/`)
export const likePost = (id: number) => api.post(`/posts/${id}/like/`)
export const dislikePost = (id: number) => api.post(`/posts/${id}/dislike/`)