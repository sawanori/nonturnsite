import React from 'react'
import Link from 'next/link'

export const CategoryButton = () => {
    return (
        <section className='mx-4 lg:mx-8 bg-white min-h-full pb-20 flex flex-col items-center'>

            <div className="bg-blue-800 text-white w-64 h-20 bold flex justify-center items-center rounded-[117px] font-extrabold">
                <Link href=''><a>お問合せはこちらから</a></Link>
            </div>
        </section >

    )
}
