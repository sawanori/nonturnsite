import { FC, useRef, useContext } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'

interface categoryhead {
    id: string
    photo: string
    title: string
    content: string
    service1: string
    service2: string
    service3: string
}


export const Categoryhead: FC<categoryhead> = ({ id, photo, title, content, service1, service2, service3 }) => {



    return (
        <div className='text-white flex  flex-col justify-end lg:justify-center items-center lg:items-start lg:px-36 bg-cover bg-center  jusrify-center  min-h-screen ' style={{
            backgroundImage: `url("/${photo}")`
        }} >
            <section className='px-5 '>
                <h3 className=''>Service 0{id}</h3>
                <h1 className="text-5xl py-5 font-bold">{title}</h1>
                <p className='leading-9 '>{content}</p>
                <section className='flex trac flex-col justify-center items-center py-12'>
                    <h3 className="py-3 px-24 m-3  border-2 ">{service1}</h3>
                    <h3 className="py-3 px-20 m-3  border-2 ">{service2}</h3>
                    <h3 className="py-3 px-24 m-3  border-2 ">{service3}</h3>
                </section>
            </section>
        </div>
    )
}
