import styles from "features/nav/Nav.module.sass";
import { NavLink } from "react-router-dom";
import { useClickOutside } from "common/hooks/useClickOutside";
import { useGetPostsQuery } from "common/api/json-placeholder.api";
import { PostResponseType } from "common/types/common.types";

export const LiJsonPlaceholder = () => {
    const { data, error, isLoading } = useGetPostsQuery(undefined);

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
                    articles
                </NavLink>
                <div className={styles.arrow}></div>
            </div>

            {isShow && (
                <ul className={styles.subnav}>
                    {data &&
                        data.map((res: PostResponseType) => (
                            <li
                                className={styles.subnav__li}
                                key={res.id}
                                onClick={() => setIsShow(false)}
                            >
                                <NavLink to={`json-placeholder/posts/${res.id}`}>
                                    <p className={styles.subnav__a}>{res.title}</p>
                                </NavLink>
                            </li>
                        ))}
                </ul>
            )}
        </li>
    );
};
