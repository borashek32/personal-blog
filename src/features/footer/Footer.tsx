import styles from "./Footer.module.sass"

export const Footer = () => {

    return (
        <div className={styles.footer}>
            <p className={styles.footer__text}>
                Baranova Nataly
            </p>
            <p className={styles.footer__text}>
                NextJs | ReactJs | Redux-Toolkit | Thunk | REST API
            </p>
            <p className={styles.footer__text}>
                Copyright © { new Date().getFullYear() }
            </p>
        </div>
    )
}
