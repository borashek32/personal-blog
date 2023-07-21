import stylesProfile from "./../profile/Profile.module.sass";
import styles from "./AboutMe.module.sass";
import me from "common/assets/img/me.jpg";

export const AboutMe = () => {
    return (
        <>
            <h2 className={styles.aboutMe__header}>Обо мне</h2>
            <div className={stylesProfile.profile_page}>
                <div className={stylesProfile.profile_page__info}>
                    <p>
                        Front-end разработчик. Практик верстки сайтов. Созданием сайтов занимаюсь с
                        2012 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов
                        в создании сайтов различной сложности.
                    </p>
                </div>
                <div className={stylesProfile.profile_page__photo}>
                    <img src={me} alt="me" />
                </div>
            </div>
        </>
    );
};
