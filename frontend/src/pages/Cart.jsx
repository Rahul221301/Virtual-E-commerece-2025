import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItem]);

    return (
        <div className='w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]'>
            <div className='h-[8%] w-full text-center mt-[80px]'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div className='w-full h-auto flex flex-col gap-4'>
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div key={index} className='w-full border-t border-b'>
                                <div className='w-full flex items-start gap-4 bg-[#51808048] p-4 rounded-2xl relative'>

                                    {/* Product Image */}
                                    <img className='w-[90px] h-[90px] rounded-md' src={productData.image1} alt="" />

                                    {/* Name + Price */}
                                    <div className='flex flex-col gap-[6px] text-white'>
                                        <p className='md:text-[25px] text-[18px]'>{productData.name}</p>

                                        <p className='text-[18px] text-[#aaf4e7]'>{currency} {productData.price}</p>

                                        {/* SIZE + QUANTITY - Mobile flex || Desktop absolute */}
                                        <div className="flex md:flex-none items-center gap-3">

                                            <p className='w-[40px] h-[40px] text-[16px] text-white bg-[#518080b4] rounded-md flex items-center justify-center border border-[#9ff9f9]'>
                                                {item.size}
                                            </p>

                                            <input
                                                type="number"
                                                min={1}
                                                defaultValue={item.quantity}
                                                className='w-[45px] h-[40px] px-2 text-white text-[16px] font-semibold bg-[#518080b4] border border-[#9ff9f9] rounded-md'
                                                onChange={(e) =>
                                                    (e.target.value === '' || e.target.value === '0')
                                                        ? null
                                                        : updateQuantity(item._id, item.size, Number(e.target.value))
                                                }
                                            />
                                        </div>
                                    </div>

                                    {/* Delete Icon */}
                                    <RiDeleteBin6Line
                                        className='text-[#9ff9f9] w-[28px] h-[28px] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                                        onClick={() => updateQuantity(item._id, item.size, 0)}
                                    />

                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Checkout Section */}
            <div className='flex justify-start items-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal />
                    <button className='text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px]  border-[1px] border-[#80808049] ml-[30px] mt-[20px]' onClick={() => {
                        if (cartData.length > 0) {
                            navigate("/placeorder");
                        } else {
                            console.log("Your cart is empty!");
                        }
                    }}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;


