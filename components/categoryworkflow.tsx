import React, { FC } from 'react'

import { CategoryWorkFlowBox } from './categoryworkflowbox';

interface props {
    image: string
    worktitle: string
    readtime: string
    flow1: string
    flow2: string
    section1: string
    section2: string
    section3: string
    section4: string
    section5: string
    section6: string
    textcolor1: string
    textcolor2: string
    toColor: string
}

export const CategoryWorkflow: FC<props> = ({ image, worktitle, flow1, flow2, readtime, section1, section2, section3, section4, section5, section6, textcolor1, textcolor2, toColor }) => {
    return (
        <section className='mx-4 lg:mx-8 bg-white min-h-full pb-32'>

            <section className={`bg-gradient-to-b from-white via-white  ${toColor} py-6 sm:py-8 lg:py-12 rounded-3xl mx-8 md:mx-12 lg:mx-30 `} >
                <span className='flex flex-col sm:flex-row items-center justify-start'>
                    <h1 className={`${textcolor1} text-4xl md:text-[70px] ml-0 md:-ml-21 font-extrabold`}>Frow</h1>
                    <h1 className={`ml-0  sm:ml-4 transition translate-y-2 border-b-4 ${textcolor2} `}>フローについて</h1>
                </span>
                <CategoryWorkFlowBox
                    image={image}
                    worktitle={worktitle}
                    readtime={readtime}
                    flow1={flow1}
                    flow2={flow2}
                    section1={section1}
                    section2={section2}
                    section3={section3}
                    section4={section4}
                    section5={section5}
                    section6={section6}
                />
                <CategoryWorkFlowBox
                    image='flow2.png'
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
                />
                <CategoryWorkFlowBox
                    image='flow3.png'
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
                />

            </section >



        </section >
    )
}
