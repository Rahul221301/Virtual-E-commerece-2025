import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';
import Loading from '../component/Loading';

function ProductDetail() {
    let { productId } = useParams();
    let { products, currency, addtoCart, loading } = useContext(shopDataContext);
    let [productData, setProductData] = useState(false);

    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage1(item.image1);
                setImage2(item.image2);
                setImage3(item.image3);
                setImage4(item.image4);
                setImage(item.image1);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className="bg-gradient-to-l from-[#141414] to-[#0c2025] w-full">

            {/* Top Section */}
            <div className="w-full min-h-[100vh] flex flex-col lg:flex-row justify-start items-center gap-6 pt-[80px] pb-[40px] px-4">

                {/* Images */}
                <div className="lg:w-[38%] w-full flex flex-col lg:flex-row gap-4">
                    <div className="flex lg:flex-col gap-3 lg:w-[20%] w-full justify-center">
                        {[image1, image2, image3, image4].map((img, i) => (
                            <img key={i} src={img} alt=""
                                className="w-[70px] h-[70px] md:w-[100px] md:h-[110px] rounded-md border cursor-pointer object-cover"
                                onClick={() => setImage(img)} />
                        ))}
                    </div>

                    <div className="lg:w-[70%] w-full border rounded-md overflow-hidden">
                        <img src={image} alt="" className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:w-[45%] w-full text-white flex flex-col gap-3">
                    <h1 className="text-[28px] md:text-[40px] font-semibold">{productData.name.toUpperCase()}</h1>

                    <div className="flex items-center gap-1">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                        <p className="pl-2 text-lg font-semibold">(124)</p>
                    </div>

                    <p className="text-[26px] font-semibold">{currency} {productData.price}</p>

                    <p className="text-[16px] md:text-[18px] w-[90%]">
                        {productData.description} Stylish, breathable cotton shirt with a modern slim fit.
                    </p>

                    <div className="mt-3">
                        <p className="text-[20px] font-semibold mb-2">Select Size</p>
                        <div className="flex gap-2 flex-wrap">
                            {productData.sizes.map((item, i) => (
                                <button
                                    key={i}
                                    className={`border py-2 px-4 rounded-md ${item === size ? 'bg-black text-[#2f97f1] text-[18px]' : 'bg-gray-200 text-black'}`}
                                    onClick={() => setSize(item)}>
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            className="mt-4 bg-[#495b61c9] py-2 px-6 rounded-2xl border text-white shadow"
                            onClick={() => addtoCart(productData._id, size)}>
                            {loading ? <Loading /> : "Add to Cart"}
                        </button>
                    </div>

                    <div className="w-full h-[1px] bg-slate-700 my-4"></div>

                    <div className="text-[14px] md:text-[16px]">
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full pb-[50px]">

                <div className="flex ml-[20px] lg:ml-[100px] gap-3">
                    <p className="border px-5 py-3 text-sm text-white cursor-pointer">Description</p>
                    <p className="border px-5 py-3 text-sm text-white cursor-pointer">Reviews (124)</p>
                </div>

                <div className="mt-4 mx-5 lg:mx-[100px] bg-[#3336397c] border text-white p-5 rounded-md">
                    <p className="text-[14px] md:text-[18px] leading-relaxed">
                        Upgrade your everyday style with this premium slim-fit cotton shirt.
                        Designed for comfort and durability, perfect for office, casual outings, and more.
                    </p>
                </div>

                <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id} />
            </div>
        </div>
    ) : <div className="opacity-0"></div>;
}

export default ProductDetail;




