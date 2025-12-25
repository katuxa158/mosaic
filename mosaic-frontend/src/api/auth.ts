import api from './axios'

export const login = (username: string, password: string) =>
    api.post('/auth/login/', {username, password})

export const register = (data: any) =>
    api.post('/users/register/', data)

export const logout = () => api.post('/users/logout/')