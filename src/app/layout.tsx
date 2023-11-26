import React, {FC} from 'react';
import type {Metadata} from 'next';
import RootLayoutComponent from '@/components/RootLayout';

import '@/themes/default/index.scss';
import './globals.css';

export const metadata: Metadata = {
    title: 'GPT Widget',
    description: 'GPT-based chat widget',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({children}) => (
    <html lang="en">
    <body>
    <RootLayoutComponent>
        {children}
    </RootLayoutComponent>
    </body>
    </html>
);

export default RootLayout;