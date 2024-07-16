import styles from './Menu.module.css';
import MenuLink from './MenuLink';

function Menu() {

    return (
        <nav className={styles.menu}>
            <img className={styles.logo} src='./img/aluraflix.png' alt='Logo Aluraflix' />

            <div className={styles.botoes}>
                <MenuLink to="/">
                    Home
                </MenuLink>
                <MenuLink to="/novovideo">
                    Novo Video
                </MenuLink>

            </div>
        </nav>
    )
}

export default Menu