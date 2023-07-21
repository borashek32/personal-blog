import styles from "./Videos.module.sass"

export const Videos = () => {

    return (
        <div className={styles.videos}>
            <div className={styles.video}>
                <div className="embed">
                    <iframe src="https://www.youtube.com/embed/dRF9_wdiFic"
                            title="YouTube videos player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className={styles.video}>
                <div className="embed">
                    <iframe src="https://www.youtube.com/embed/5va0BkQPql0"
                            title="YouTube videos player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className={styles.video}>
                <div className="embed">
                    <iframe src="https://www.youtube.com/embed/whdg7gNaiIw"
                            title="YouTube videos player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    )
}
