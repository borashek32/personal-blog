import arr from "common/assets/img/arr.svg"
import ph from "common/assets/img/ph.svg"
import styles from "./Form.module.sass"

export const Form = () => {

    return (
        <div className={styles.add_post}>
            <form className={styles.add_post__form}>
                <textarea name="desc" placeholder="Напишите что-нибудь" className={styles.add_post__textarea}></textarea>
                <input type="hidden" value="3" name="cat_id" />
                    <div className={styles.add_post__actions}>
                        <label htmlFor="file" className={styles.add_post__file}>
                            <img src={ph} alt="add_post" />
                        </label>
                        <button type="submit" className={styles.add_post__send}>
                            <img src={arr} alt="add_post" />
                        </button>
                    </div>
            </form>
        </div>
    )
}
