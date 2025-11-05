import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
    return (
        <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] pt-[80px]'>
            <Title text1={'ABOUT'} text2={'US'} />
            <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

                <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
                    <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
                </div>
                <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]'>
                    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
                        OneCart brings you a seamless online shopping experience with top-quality products at unbeatable prices.
                        Discover the latest fashion, electronics, home essentials, and more—all in one place.
                        Enjoy fast delivery, secure payments, and dedicated customer support for a worry-free shopping journey.
                        Shop smart with exclusive deals, seasonal discounts, and exciting offers every day.
                    </p>
                    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
                        OneCart offers smart, fast, and affordable online shopping with all your favorite products in one place.
                        Experience secure payments, quick delivery, and unbeatable everyday deals—shop the smart way! 🛒✨
                    </p>
                    <p className='lg:w-[80%] w-[100%] text-[15px] text-[white] lg:text-[18px] mt-[10px] font-bold'>Our Mission</p>
                    <p className='lg:w-[80%] w-[100%] text-[white] md:text-[16px] text-[13px]'>
                        Our mission is to make online shopping simple, affordable, and accessible for everyone.
                        We strive to deliver top-quality products with fast service and complete customer satisfaction.
                        At OneCart, we aim to build trust by offering secure shopping, transparent pricing, and excellent support. ✅🛒
                    </p>
                </div>
            </div>
            <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
                <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px] gap-[15px]'>

                    <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                        <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
                        <p>We ensure every product meets high standards through strict quality checks and trusted sourcing.
                            OneCart is committed to delivering only genuine items to our customers. ✅</p>
                    </div>
                    <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                        <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
                        <p>
                            OneCart offers a smooth and hassle-free shopping experience with easy navigation, quick checkout, and fast delivery.
                            Shop anytime, anywhere, and get everything. 🛒✨
                        </p>
                    </div>
                    <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[white] backdrop-blur-[2px] bg-[#ffffff0b]'>
                        <b className='text-[20px] font-semibold text-[#bff1f9]'>Exceptional Customer Service</b>
                        <p>
                            We are dedicated to offering prompt, friendly, and reliable support to ensure every customer has a smooth shopping experience.
                            💬🤝
                        </p>
                    </div>
                </div>
            </div>
            <NewLetterBox />

        </div>
    )
}

export default About
