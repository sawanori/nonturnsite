import Head from 'next/head';
import { ReactNode, FC } from 'react'
import { Footer } from './footer';
import { Header } from './header';

interface props {
    children: ReactNode
    title: string
}

export const Layout: FC<props> = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content="Movie creater NORITAKA"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
