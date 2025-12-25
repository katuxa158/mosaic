import styles from './Register.module.css'
import {register} from '../api/auth'
import Button from "../components/Button/Button.tsx";
import Input from "../components/Input/Input.tsx";
import Card from "../components/Card/Card.tsx";

import layout from '../styles/layout.module.css'
import typography from '../styles/typography.module.css'
import {NavLink} from "react-router-dom";

export default function Register() {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget


        register({
            username: form.username.value,
            full_name: form.full_name.value,
            password: form.password.value,
        }).then(value => console.log(value))
            .catch(error => console.log(error));
    }


    return (
        <div className={styles.wrapper}>
            <Card>
                <h1 className={typography.h1}>Регистрация на сайте</h1>
                <form onSubmit={submit} className={layout.form}>
                    <Input name="full_name" placeholder="Имя"/>
                    <Input name="username" placeholder="Логин"/>
                    <Input name="password" placeholder="Пароль" type="password"/>
                    <Button>Зарегистрироваться</Button>
                    <span>Уже есть профиль? <NavLink to="/login">Войдите</NavLink></span>
                </form>
            </Card>
        </div>
    )
}