import styles from './styles.module.css'

export function Footer() {
    return <footer className={styles.footer}> 
        <a href="#" target="_blank">Entenda como funciona a Técnica Pomodoro 🍅</a>
        <a href="https://meu-portfolio-red-alpha.vercel.app/" target="_blank">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Oliveto Vinicius</a>
    </footer>
}
