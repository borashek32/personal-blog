import styles from "features/nav/Nav.module.sass";
import { NavLink } from "react-router-dom";
import { ResultResponseType } from "common/types/common.types";
import { useGetCharactersQuery } from "common/api/rick-and-morty.api";
import { useClickOutside } from "common/hooks/useClickOutside";

export const LiRickAndMorty = () => {
    const { data, error, isLoading } = useGetCharactersQuery(undefined);

    const { ref, isShow, setIsShow } = useClickOutside({ initialVisibility: false });

    const headerLi = styles.header__li + " " + styles.header__li_subnav;
    const headerLiDownArrow = styles.header__link + " " + styles.header__link_down;
    return (
        <li
            className={headerLi}
            onClick={() => {
                setIsShow(!isShow);
            }}
        >
            <div className={styles.header__li_flex} ref={ref}>
                <NavLink to="#" className={headerLiDownArrow}>
                    my works
                </NavLink>
                <div className={styles.arrow}></div>
            </div>

            {isShow && (
                <ul className={styles.subnav}>
                    {data &&
                        data.results.map((res: ResultResponseType) => (
                            <li
                                className={styles.subnav__li}
                                key={res.id}
                                onClick={() => setIsShow(false)}
                            >
                                <NavLink to={`rick-and-morty/characters/${res.id}`}>
                                    <p className={styles.subnav__a}>{res.name}</p>
                                </NavLink>
                            </li>
                        ))}
                </ul>
            )}
        </li>
    );
};
