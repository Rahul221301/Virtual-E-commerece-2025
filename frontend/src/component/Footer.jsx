import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
    return (
        <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
            <div className='w-[100%] md:h-[30vh] h-[15vh]  md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]'>
                <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]  '>
                    <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                        <img src={logo} alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]' />
                        <p className='text-[19px] md:text-[20px] text-[black] '>OneCart</p>

                    </div>
                    <p className='text-[15px] text-[#1e2223] hidden md:block'>OneCart is your one-stop online shopping destination for everyday essentials and trendy products.
                        From fashion and electronics to groceries and home needs — everything delivered to your doorstep.
                        Easy navigation, secure payments, and fast delivery for a smooth shopping experience.
                    </p>

                </div>
                <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>COMPANY</p>

                    </div>
                    <ul>
                        <li className='text-[15px] text-[#1e2223]  cursor-pointer'>Rahul</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer '>Global</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer'>Pvt.</li>
                        <li className='text-[15px] text-[#1e2223] cursor-pointer'>Ltd.</li>
                    </ul>
                </div>

                <div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center '>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>GET IN CONTACT</p>

                    </div>
                    <ul>
                        <li className='text-[15px] text-[#1e2223] '>+91-8840475497</li>
                        <li className='text-[15px] text-[#1e2223] '>rahul100jrs@gmail.com</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>+1-884-047-5497</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>kumar100jrs@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div className='w-[100%] h-[1px] bg-slate-400'></div>
            <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>rahul100jrs@gmail.com-All USERS</div>

        </div>
    )
}

export default Footer
