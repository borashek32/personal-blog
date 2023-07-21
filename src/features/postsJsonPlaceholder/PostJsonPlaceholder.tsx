import { useParams } from "react-router-dom";
import styles from "features/charactersRickAndMorty/CharacterRickAndMorty.module.sass";
import "./../../common/styles/index.sass";
import { useGetOnePostQuery } from "common/api/json-placeholder.api";

export const PostJsonPlaceholder = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useGetOnePostQuery(Number(id));

    return (
        <>
            {data && (
                <div className={styles.workWrapper}>
                    <h4 className={styles.work__title}>{data.title}</h4>

                    <p className={styles.post__desc}>{data.body}</p>
                </div>
            )}
        </>
    );
};
