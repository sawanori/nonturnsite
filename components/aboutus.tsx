import { FC } from 'react'
import Products from './products'

const Aboutus: FC = () => {
    return (
        <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
            <div className='container mx-auto px-11'>
                <p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight'>
                    <strong>
                        ぷーりんぷーりんぷーりんぷーりんぷーりんぷーりんぷーりんぷーりん。
                    </strong>
                    ぽよヨヨヨよっヨヨヨヨヨヨよy
                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our product</h2>
                <div className="mt-2 ">testeste</div>
                <div className="mt-10 grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                    <Products id='1' title="movie1" description="texst" link="/" />
                    <Products id='2' title="movie1" description="texst" link="/" />
                    <Products id='1' title="movie1" description="texst" link="/" />
                    <Products id='2' title="movie1" description="texst" link="/" />
                    <Products id='1' title="movie1" description="texst" link="/" />
                    <Products id='2' title="movie1" description="texst" link="/" />
                    <Products id='1' title="movie1" description="texst" link="/" />
                    <Products id='2' title="movie1" description="texst" link="/" />
                </div>
            </div>
        </section>
    )
}

export default Aboutus