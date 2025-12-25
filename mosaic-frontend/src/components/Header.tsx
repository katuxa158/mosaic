import {Link} from 'react-router-dom'
import {isAuth, logoutLocal} from '../store/auth'
import styles from './Header.module.css'
import Input from "./Input/Input.tsx";

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <Link to="/">Mosaic</Link>
                {isAuth() && <Link to="/profile">Профиль</Link>}
                <Input placeholder="Поиск..."></Input>
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