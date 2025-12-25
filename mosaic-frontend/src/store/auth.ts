export const saveTokens = (data: any) => {
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)
}

export const logoutLocal = () => {
    localStorage.clear()
}

export const isAuth = () => Boolean(localStorage.getItem('access'))