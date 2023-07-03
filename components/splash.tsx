import { FC } from 'react'
import s from '../styles/splash.module.scss'

export const Splash: FC = () => {
    return (

        <section className={`${s.splash}`}>
            <h1 className={`${s.fadeIn}`}>Welcome To my Splash Page</h1>
        </section>
    )
}
