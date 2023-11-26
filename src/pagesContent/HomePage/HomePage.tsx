import React, {FC} from 'react';
import type {Metadata} from 'next';

import styles from './styles.module.scss';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Awesome metadata',
};

type PageProps = {};

const HomePage: FC<PageProps> = () => (
    <div className={styles.wrapper}>
        Hello world
    </div>
);

export default HomePage;