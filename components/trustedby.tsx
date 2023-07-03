import { FC } from 'react'
import { ClientLogs } from './client-logs'
import { Testimonials } from './testimonials'
import s from '../styles/trustedby.module.css'

export const TrustedBy: FC = () => {
    return (
        <section className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}>
            <div className="flex-1"></div>
            <div className="flex flex-col justify-center items-center">
                <h3>
                    <span className='whitespace-nowrap'>取引企業様</span>{''}
                    <span className='whitespace-nowrap'>一覧</span>
                </h3>
                <ClientLogs />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="container mx-auto lg:max-w-[70%] lg:px-10">

                </div>
            </div>
            <div className="flex-1 bg-gray-900"></div>
        </section>
    )
}
