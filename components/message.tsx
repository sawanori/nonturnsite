import React from 'react'
import Image from 'next/image'
import { VerticalLine } from './verticalLine'

const Message = () => {
    return (

        <section className='flex flex-col  bg-gradient-to-l from-indigo-900 to-black '>
            <div className='text-center text-white'>
                <VerticalLine />
            </div>
            <div className="flex text-white flex-col md:flex-row  justify-around items-center min-h-screen ">
                <div className="flex flex-col">
                    <h3 className=' text-2xl  md:text-3xl lg:text-4xl xl:text-5xl my-6　'>ビジネスを革新する<br/>クリエイティブソリューション</h3>
                    <div className='text-xs' >
                        <p className="my-4"><br />
                            NonTurnは、神奈川県横浜市および東京都心を拠点に</p>
                        <p className="my-4">像撮影・編集、写真撮影、WEBコンテンツ制作・開発のサービスを提供しています。<br />
                            のサービスを外食などのサービス業から外資系企業に対して<br />
                            私たちは革新的なクリエイティブソリューションを通じて、<br/>ビジネスの可能性を広げます。</p>

                        <p className="my-4">私たちのクリエイティブソリューションは、<br />
                            ビジネスを革新する力を持っています。<br />
                            飲食業界から外資系企業まで、お客様のニーズに合わせた革新的なアプローチで<br />
                            ブランディングやマーケティング、デジタルプレゼンスを強化します！
                        </p>
                        <p className="my-4">私たちはお客様のビジネスに新たな可能性をもたらすため、</p>
                        <p className="my-4">クリエイティビティ、マーケティング、テクノロジーを<br/>
                          組み合わせて最適なソリューションを提供します。　<br />
                          一緒にビジネスを革新し、成功への道を切り拓きましょう。<br />
                        </p>
                        <p className="my-4">NonTurnは、ビジネスを革新するクリエイティブソリューションのパートナーです。<br />
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl my-6'>Innovative Creative Solutions <br/>for Business Transformation </h3>
                    <div className='text-xs' >
                        <p className="my-4">NonTurn is a provider of video shooting and editing,</p>
                        <p className="my-4">photography, and web content creation and development <br />
                            services, based in Yokohama, Kanagawa Prefecture, and the <br />
                            heart of Tokyo. We offer innovative creative solutions to <br/>
                            transform businesses.
                        </p>
                        <p className="my-4">Our creative solutions possess the power to revolutionize <br />
                            businesses. From the food service industry to multinational <br />
                            corporations, we employ innovative approaches tailored to meet <br />
                            digital presence.</p>


                        <p className="my-4">With a blend of creativity, marketing, and technology, we deliver  <br />
                            businesses. Let us join forces to innovate your business and pave <br/>
                            the way to success.
                        </p>

                        <p className="my-4">With a blend of creativity, marketing, and technology, we deliver  <br />
                          NonTurn is your partner in providing innovative creative solutions <br/>for business transformation.
                        </p>



                    </div>
                </div>
            </div>
            <VerticalLine />
        </section>
    )
}

export default Message
