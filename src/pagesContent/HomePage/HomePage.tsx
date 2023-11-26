"use client"

import React, {FC, useEffect, useState} from 'react';
import type {Metadata} from 'next';
import axios from 'axios';

import styles from './styles.module.scss';

export const metadata: Metadata = {
    title: 'Home page',
    description: 'Awesome metadata',
};

type PageProps = {};

const HomePage: FC<PageProps> = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.post('/api/chat/send-message', {
            body: {
                message: 'Hello! Could you help me?'
            }
        }).then((response) => {
            console.log(response);
            setMessage('fetched')
        })
    }, []);

    return (
        <div className={styles.wrapper}>
            {message}
        </div>
    )
};

export default HomePage;