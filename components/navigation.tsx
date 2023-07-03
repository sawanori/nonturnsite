import { FC, useState } from 'react'
import Link from 'next/link'
import n from '../styles/navigation.module.scss'

export const Navigation: FC = () => {
    return (
        <>
            <div className={`${n.navigation}`}>
                <input type="checkbox" className={`${n.navigation__checkbox}`} id="navi-toggle"></input>
                <label htmlFor="navi-toggle" className={`${n.navigation__button}`} >
                    <span className={`${n.navigation__icon}`}>&nbsp;</span>
                </label>
                <div className={`${n.navigation__background}`}>&nbsp;</div>
                <nav className={`${n.navigation__nav}`}>
                    <ul className={`${n.navigation__list}`}>
                        <li className={`${n.navigation__item}`}><Link href="/"><a className={`${n.navigation__link}`}><span>01</span>top page</a></Link></li>
                        <li className={`${n.navigation__item}`}><Link href="./movie"><a className={`${n.navigation__link}`}><span>02</span>movie(準備中)</a></Link></li>
                        <li className={`${n.navigation__item}`}><Link href="./photo"><a className={`${n.navigation__link}`}><span>03</span>Photo(準備中)</a></Link></li>
                        <li className={`${n.navigation__item}`}><Link href="./webproduct"><a className={`${n.navigation__link}`}><span>04</span>WebCreate(準備中)</a></Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
