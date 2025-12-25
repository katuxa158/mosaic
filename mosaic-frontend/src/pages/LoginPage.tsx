import {login} from '../api/auth'
import {saveTokens} from '../store/auth'
import styles from './Register.module.css'
import Button from "../components/Button/Button.tsx";
import Input from "../components/Input/Input.tsx";
import Card from "../components/Card/Card.tsx";

import layout from '../styles/layout.module.css'
import typography from '../styles/typography.module.css'
import {NavLink, useNavigate} from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const submit = (e: any) => {
        e.preventDefault()
        login(e.target.username.value, e.target.password.value)
            .then(r => {
                saveTokens(r.data)
                navigate('/')
            })
    }


    return (
        <div className={styles.wrapper}>
            <Card>
                <h1 className={typography.h1}>Добро пожаловать!</h1>
                <form onSubmit={submit} className={layout.form}>
                    <Input name="username" placeholder="Логин"/>
                    <Input name="password" placeholder="Пароль" type="password"/>
                    <Button>Войти</Button>
                    <span>Нет профиля? <NavLink to="/register">Создайте</NavLink></span>
                </form>
            </Card>
        </div>
    )
}