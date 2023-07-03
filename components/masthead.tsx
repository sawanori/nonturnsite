import React, { FC, useRef, useState, useContext, useCallback } from 'react'
import Image from 'next/image'
import { ScrollContext } from '../utils/scroll-observer'
import { VerticalLine } from './verticalLine'

const Masthead: FC = () => {
    const [imageLoaded, setIMageLoaded] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setIMageLoaded(true)
    }, [])


    return (
        <div ref={refContainer}
            className="min-h-screen  flex flex-col items-center bg-gray-200 justify-center sticky top-0 -z-10"
            style={{
                transform: `translateY(-${progress * 20}vh)`
            }}
        >
            <video autoPlay loop muted playsInline className='  absolute w-full h-full object-cover'>
                <source src="/sample.mp4" type="video/mp4; codecs+hvc1" />
            </video>

            <div className="transform translate-y-20  p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                <h1 className='mb-6 text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Powering Business with Creative Solutions </h1>
                <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
                    <span>企業の課題解決にクリエイティブを</span>
                </h2>
            </div>
            <div className={`flex-grow-0 pb-30 md:pb-20 transition-all duration-1000

            `}>
                <VerticalLine />
            </div>
        </div >
    )
}

export default Masthead
