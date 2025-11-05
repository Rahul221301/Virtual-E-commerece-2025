import React, { useEffect, useState } from 'react'
import Backgound from '../component/Backgound'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'


function Home() {
    let heroData = [
        { text1: "Hurry! Get 30% OFF Before It's Gone!", text2: "Style Match" },
        { text1: "Step Into Fearless Fashion Trends", text2: "Limited Time Only!" },
        { text1: "Shop Our Premium Collection Today ", text2: "Shop Now!" },
        { text1: "Choose Style That Speaks Your Personality", text2: "Now on Sale!" }
    ]

    let [heroCount, setHeroCount] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1));
        }, 3000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='overflow-x-hidden relative top-[70px]'>
            <div className=' w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh]   bg-gradient-to-l from-[#141414] to-[#0c2025] '>

                <Backgound heroCount={heroCount} />
                <Hero
                    heroCount={heroCount}
                    setHeroCount={setHeroCount}
                    heroData={heroData[heroCount]}
                />



            </div>
            <Product />
            <OurPolicy />
            <NewLetterBox />
            <Footer />
        </div>
    )
}

export default Home
