import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

export default function MenuLink({ children, to}){
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.buttonLink}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}
