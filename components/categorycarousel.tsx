import React from 'react'
import { Carousel } from './carousel'
import { CarouselItem } from './carousel-item'
import Products from './products'

export const CategoryCarousel = () => {
    return (
        <section className='mx-4 lg:mx-8 bg-white min-h-full  flex flex-col items-center'>
            <Carousel className="bg-gray-900 text-white py-10 lg:py-20">
                <CarouselItem index={0}>
                    <Products id='1' title="フロンティアハウス" description="texst" link="/" />
                </CarouselItem>
                <CarouselItem index={1}>
                    <Products id='2' title="はじめ" description="texst" link="/" />
                </CarouselItem>
                <CarouselItem index={2}>
                    <Products id='3' title="パンフォーユー" description="texst" link="/" />
                </CarouselItem>
                <CarouselItem index={3}>
                    <Products id='4' title="アートランド" description="texst" link="/" />
                </CarouselItem>
                <CarouselItem index={4}>
                    <Products id='5' title="真砂茶寮" description="texst" link="/" />
                </CarouselItem>
            </Carousel>
        </section >
    )
}
