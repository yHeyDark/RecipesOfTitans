import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.menu}>
            <Link to="/">
                <span>Recipes Of Titans</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/receitas">Receitas</Link>
                <Link to="/dicas">Dicas</Link>
            </nav>
        </header>
    )
}

export default Header
