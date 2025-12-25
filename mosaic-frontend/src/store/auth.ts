export const saveTokens = (data: any) => {
    localStorage.setItem('access', data.access)
    localStorage.setItem('refresh', data.refresh)
}

export const saveRole = (data: any) => {
    localStorage.setItem('roleId', data.role)
}

export const logoutLocal = () => {
    localStorage.clear()
}

export const isAuth = () => Boolean(localStorage.getItem('access'))
export const isAdministrator = () => Boolean(localStorage.getItem('roleId') === '2')