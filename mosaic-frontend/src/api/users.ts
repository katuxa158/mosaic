import api from './axios'

export const me = () => api.get('/users/me/')
export const searchUsers = (q: string) => api.get(`/users/search/?q=${q}`)
export const adminUsers = () => api.get('/users/admin/')