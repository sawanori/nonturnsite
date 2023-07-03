import React from 'react'
import { CategoryButton } from '../components/categorybutton'
import { CategoryCarousel } from '../components/categorycarousel'
import { Categoryhead } from '../components/categoryhead'
import { CategoryWorkflow } from '../components/categoryworkflow'
import { Layout } from '../components/layout'

const WebProduct = () => {
    return (
        < Layout title="movie">
            <section className="bg-green-900">
                <Categoryhead
                    id='3'
                    photo="shoot.jpg"
                    title="WEBコンテンツ製作"
                    content="自社サービス・商品PRから、企業グランド、イメージ動画製作まで、"
                    service1="サービス.商品PR"
                    service2="企業ブランディング"
                    service3="アニメーション"
                />
                <CategoryWorkflow
                    image='flow1.png'
                    worktitle="test"
                    readtime="1ヶ月"
                    flow1='part1'
                    flow2='part2'
                    section1='その１'
                    section2='その２'
                    section3='その３'
                    section4='その１'
                    section5='その２'
                    section6='その３'
                    textcolor1='text-green-900'
                    textcolor2='text-green-200'
                    toColor='to-green-500'
                />
                <CategoryButton />
                <CategoryCarousel />
            </section>
        </Layout>
    )
}

export default WebProduct