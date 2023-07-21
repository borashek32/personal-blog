import styles from "features/nav/Nav.module.sass";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "common/hooks/useClickOutside";

export const LiAuth = () => {
    const { ref, isShow, setIsShow } = useClickOutside({ initialVisibility: false });

    const headerLiDownArrow = styles.header__link + " " + styles.header__link_down;
    const headerLi = styles.header__li + " " + styles.header__li_subnav;
    return (
        <ul className={styles.header__right}>
            <li
                className={headerLi}
                onClick={() => {
                    setIsShow(!isShow);
                }}
            >
                <div className={styles.header__li_flex} ref={ref}>
                    <NavLink to="#" className={headerLiDownArrow}>
                        admin
                    </NavLink>
                    <div className={styles.arrow}></div>
                </div>

                {isShow && (
                    <ul className={styles.subnav}>
                        <li className={styles.subnav__li}>
                            <NavLink to="#">
                                <p className={styles.subnav__a}>profile</p>
                            </NavLink>
                        </li>

                        <li className={styles.subnav__li}>
                            <NavLink to="#">
                                <p className={styles.subnav__a}>my works</p>
                            </NavLink>
                        </li>

                        <li className={styles.subnav__li}>
                            <NavLink to="#">
                                <p className={styles.subnav__a}>articles</p>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </li>
        </ul>
    );
};
