import {Link, useNavigate} from 'react-router-dom'
import {isAuth, logoutLocal} from '../store/auth'
import styles from './Header.module.css'
import Input from "./Input/Input.tsx";
import {useEffect, useState} from "react";
import {getPosts} from "../api/posts.ts";
import {me} from "../api/users.ts";

export default function Header() {

    const [isAdministrator, setAdministrator] = useState<boolean>()


    useEffect(() => {
        me().then(res => setAdministrator(res.data.role === 2))
    }, []);

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link to="/">Mosaic</Link>
                {isAuth() && <Link to="/profile">Профиль</Link>}
                {isAdministrator && <Link to="/admin">Панель администратора</Link>}
            </div>
            <div className={styles.end}>
                {!isAuth() && <Link to="/login">Войти</Link>}
                {isAuth() && <Link to="/" onClick={() => {
                    logoutLocal();
                    window.location.reload();
                }}>Выйти</Link>}
            </div>
        </header>
    )
}