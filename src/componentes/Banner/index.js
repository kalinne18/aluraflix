import styles from './Banner.module.css'

const Banner = ({ backgroundImage, title, text }) => {
    return (
        <div
            className={styles.banner}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.bannerContent}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
};
export default Banner