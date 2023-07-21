import { useParams } from "react-router-dom";
import styles from "features/charactersRickAndMorty/CharacterRickAndMorty.module.sass";
import "./../../common/styles/index.sass";
import { useGetOneCharacterQuery } from "common/api/rick-and-morty.api";

export const CharacterRickAndMorty = () => {
    const { id } = useParams();

    const { data, error, isLoading } = useGetOneCharacterQuery(Number(id));

    return (
        <>
            {data && (
                <div className={styles.workWrapper}>
                    <h4 className={styles.work__title}>{data.name}</h4>

                    <img src={data.image} alt="alt" className={styles.work__img} />

                    <a href="#" className={styles.desc}>
                        <p className={styles.post__desc}>{data.gender}</p>
                    </a>

                    <p className={styles.post__desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolore enim
                        minima nisi pariatur quae quod repellendus repudiandae tenetur totam! Ad
                        deserunt eos molestias omnis quaerat quia, quos vitae voluptatum.50
                    </p>
                </div>
            )}
        </>
    );
};
