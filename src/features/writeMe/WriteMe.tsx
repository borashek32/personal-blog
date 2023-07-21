import styles from "./WriteMe.module.sass";
import { useNavigate } from "react-router-dom";

export const WriteMe = () => {
    const buttonStyles =
        styles.buttons__button + " " + styles.button_send__comment + " " + styles.button_site;
    const contactsStyles = styles.modal__contacts + " " + styles.contacts;

    const navigate = useNavigate();

    return (
        <div className={styles.modal}>
            <div className={styles.cross} onClick={() => navigate(-1)}>
                <span className={styles.cross__line}></span>
            </div>

            <div className={styles.modal__content}>
                <div>
                    <input
                        type="text"
                        id="nameInput"
                        placeholder={"Your name"}
                        className={styles.discussion__input}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        id="emailInput"
                        placeholder={"Your email"}
                        className={styles.discussion__input}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        id="messageInput"
                        placeholder={"Your message"}
                        className={styles.discussion__input}
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        className={buttonStyles}
                        value="Отправить"
                        onClick={() => navigate(-1)}
                    />
                </div>
            </div>

            <div className={contactsStyles}>
                <p>
                    <a href="mailto:nfo@mywebsite.ru" className="contacts__email">
                        info@mywebsite.ru
                    </a>
                </p>
                <p>
                    <a href="tel:+94323285622" className="contacts__phone">
                        +943-232-856-22
                    </a>
                </p>
            </div>
        </div>
    );
};
