import styles from './Button.module.css'


type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'outline' | 'ghost'
}


export default function Button({variant = 'primary', ...props}: Props) {
    return (
        <button
            {...props}
            className={`${styles.button} ${styles[variant]}`}
        />
    )
}