import styles from "common/components/layouts/Layout.module.sass";
import { FC, ReactNode } from "react";
import {Footer} from "features/footer/Footer"

type PropsType = {
    children: ReactNode;
};

export const Layout: FC<PropsType> = ({ children }) => {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className={styles.container}>{children}</div>
            </main>
        </div>
    );
};
