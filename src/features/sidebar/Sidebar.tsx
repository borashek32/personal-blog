import styles from "features/sidebar/Sidebar.module.sass";
import stylesProfile from "./../profile/Profile.module.sass";
import sidebarHeader from "common/assets/img/sidebar_header.jpg";
import stylesWriteMe from "./../writeMe/WriteMe.module.sass";
import me from "common/assets/img/me.jpg";
import ig from "common/assets/img/ig.svg";
import vk from "common/assets/img/vk.svg";
import pi from "common/assets/img/pi.svg";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const buttonRed = stylesWriteMe.buttons__button + " " + stylesWriteMe.button_red;
    const sidebar = styles.sidebar__content + " " + stylesProfile.profile;

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar__header}>
                <img src={sidebarHeader} alt="sidebar-header" />
            </div>

            <div className={sidebar}>
                <img src={me} alt="me" className={stylesProfile.profile__avatar} />

                <div className={stylesProfile.profile__name}>Baranova Nataly</div>

                <div className={stylesProfile.profile__profession}>fullstack developer блог</div>

                <ul className={stylesProfile.socials}>
                    <li className={stylesProfile.social__item}>
                        <a href="https://www.instagram.com/no.husky.jackie/" target="_blank">
                            <img src={ig} alt="ig" />
                        </a>
                    </li>

                    <li className={stylesProfile.social__item}>
                        <a href="https://vk.com/" target="_blank">
                            <img src={vk} alt="vk" />
                        </a>
                    </li>

                    <li className={stylesProfile.social__item}>
                        <a href="https://ru.pinterest.com/" target="_blank">
                            <img src={pi} alt="pi" />
                        </a>
                    </li>
                </ul>

                <div className={stylesProfile.profile__description}>
                    <p>
                        I'm a result oriented energetic front-end developer with experience in
                        building web interfaces using React/Redux/TypeScript. Every day I work on my
                        skills in this direction and expanding them with new knowledge. Currently
                        I'm learning React Native. I solve katas on codewars.com and learn English
                        in my free time on my own. I value my own time very hight, that's why it's
                        better for me to have a remote work. But I can consider an office job too,
                        depends on opportunities that it could provide me with.
                    </p>
                </div>
            </div>

            <div className={styles.sidebar__footer}>
                <button className={buttonRed} type="button">
                    <NavLink to={"/write-me"} className={styles.button__link}>
                        write me
                    </NavLink>
                </button>
            </div>
        </aside>
    );
};
