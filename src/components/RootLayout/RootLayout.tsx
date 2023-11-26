import React, {FC} from 'react';
import styles from './styles.module.scss';

type RootLayoutProps = {
    children: React.ReactNode
};

const RootLayout: FC<RootLayoutProps> = ({children}) => (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
);

export default RootLayout;