import styles from "common/components/button/Button.module.sass";

export const Button = () => {
    const buttonRed = styles.buttons__button + " " + styles.button_red;
    const buttonBlue = styles.buttons__button + " " + styles.button_blue;

    return (
        <button className={buttonRed} type="button">
            <a href="common/components/button/Button#" className={styles.button__link}>
                Мои работы
            </a>
        </button>
    );
};
