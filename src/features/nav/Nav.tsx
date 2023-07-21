import styles from "./Nav.module.sass";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LiRickAndMorty } from "features/nav/dropdown/li/LiRickAndMorty";
import { LiJsonPlaceholder } from "features/nav/dropdown/li/LiJsonPlaceholder";
import { LiAuth } from "features/nav/dropdown/li/LiAuth";

export const Nav = () => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

    const headerLi = styles.header__li + " " + styles.header__li_subnav;
    const headerSendMeLetter = styles.header__link;

    return (
        <header className={styles.header}>
            <div
                className={styles.header__burger}
                onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
            >
                <span></span>
            </div>

            <div className={styles.header__nav}>
                <nav className={styles.header__menu_big}>
                    <ul className={styles.header__left}>
                        <li className={headerLi}>
                            <div className={styles.header__li_flex}>
                                <NavLink
                                    to="/"
                                    className={styles.header__link}
                                    style={{ marginTop: "2px" }}
                                >
                                    main
                                </NavLink>
                            </div>
                        </li>

                        {<LiRickAndMorty />}

                        {<LiJsonPlaceholder />}

                        <li className="">
                            <NavLink to="/about-me" className={styles.header__link}>
                                <div className={styles.header__li} style={{ paddingTop: "15px" }}>
                                    about me
                                </div>
                            </NavLink>
                        </li>

                        <li className="">
                            <NavLink to="/write-me" className={headerSendMeLetter}>
                                <div className={styles.header__li} style={{ paddingTop: "15px" }}>
                                    write me
                                </div>
                            </NavLink>
                        </li>
                    </ul>

                    {<LiAuth />}
                </nav>

                <div className={styles.header__search}>
                    <form action="#" method="get">
                        <input
                            type="text"
                            name="search"
                            className={styles.header__search_placeholder}
                            placeholder="Search"
                        />
                    </form>
                </div>
            </div>
        </header>
    );
};
