import {useGetCharactersQuery} from "common/api/rick-and-morty.api"
import {ResultResponseType} from "common/types/common.types"
import styles from "./Stories.module.sass"

export const Stories = () => {
    const {data, error, isLoading} = useGetCharactersQuery(undefined);
    const res = data ? data.results.slice(0, 6) : [];

    return (
        <>
            <div className={styles.stories} id="stories6">
                {res &&
                    res.map((res: ResultResponseType) => {
                        const date = new Date(res.created);

                        return (
                            <div className={styles.story}>
                                <img src={res.image} alt={res.name} className={styles.story__img}/>

                                <div className={styles.story__desc}>
                                    <p className={styles.story__title}>
                                        {res.name}
                                    </p>

                                    <p className={styles.story__date}>
                                        { date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear() }
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
