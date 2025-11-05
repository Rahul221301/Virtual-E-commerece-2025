import React, { useContext, useEffect, useState, useRef } from 'react'
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {

    let [showFilter, setShowFilter] = useState(false)
    let { products, search, showSearch } = useContext(shopDataContext)
    let [filterProduct, setFilterProduct] = useState([])
    let [category, setCaterory] = useState([])
    let [subCategory, setSubCaterory] = useState([])
    let [sortType, SetSortType] = useState("relavent")
    let [showSort, setShowSort] = useState(false)

    const dropdownRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowSort(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCaterory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setCaterory(prev => [...prev, e.target.value])
        }
    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCaterory(prev => prev.filter(item => item !== e.target.value))
        } else {
            setSubCaterory(prev => [...prev, e.target.value])
        }
    }

    const applyFilter = () => {
        let productCopy = products.slice()

        if (showSearch && search) {
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)
    }

    const sortProducts = () => {
        let fbCopy = filterProduct.slice()

        switch (sortType) {
            case 'low-high':
                setFilterProduct(fbCopy.sort((a, b) => (a.price - b.price)))
                break;
            case 'high-low':
                setFilterProduct(fbCopy.sort((a, b) => (b.price - a.price)))
                break;
            default:
                applyFilter()
                break;
        }
    }

    useEffect(() => sortProducts(), [sortType])
    useEffect(() => setFilterProduct(products), [products])
    useEffect(() => applyFilter(), [category, subCategory, search, showSearch])


    return (
        <div className='w-[99vw] min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex md:flex-row flex-col pt-[70px] overflow-x-hidden pb-[110px]'>

            {/* ✅ dynamic height on mobile */}
            <div className={`md:w-[30vw] lg:w-[20vw] w-[100vw] ${showFilter ? "h-auto" : "h-[8vh]"} 
                p-[20px] border-r-[1px] border-gray-400 text-[#aaf5fa] 
                ${showFilter ? "min-h-[40vh]" : ""} md:min-h-[100vh] lg:fixed`}>

                <p className='text-[25px] font-semibold flex gap-[5px] cursor-pointer'
                    onClick={() => setShowFilter(prev => !prev)}>
                    FILTERS {showFilter ? <FaChevronDown className='md:hidden' /> : <FaChevronRight className='md:hidden' />}
                </p>

                <div className={`mt-6 ${showFilter ? "" : "hidden"} md:block`}>
                    <div className='border border-gray-300 bg-slate-600 p-4 rounded-md'>
                        <p className='text-[18px] text-white'>CATEGORIES</p>
                        <div className='flex flex-col gap-[10px] mt-3'>
                            <label><input type="checkbox" onChange={toggleCategory} value="Men" /> Men</label>
                            <label><input type="checkbox" onChange={toggleCategory} value="Women" /> Women</label>
                            <label><input type="checkbox" onChange={toggleCategory} value="Kids" /> Kids</label>
                        </div>
                    </div>

                    <div className='border border-gray-300 bg-slate-600 p-4 rounded-md mt-4'>
                        <p className='text-[18px] text-white'>SUB-CATEGORIES</p>
                        <div className='flex flex-col gap-[10px] mt-3'>
                            <label><input type="checkbox" onChange={toggleSubCategory} value="TopWear" /> TopWear</label>
                            <label><input type="checkbox" onChange={toggleSubCategory} value="BottomWear" /> BottomWear</label>
                            <label><input type="checkbox" onChange={toggleSubCategory} value="WinterWear" /> WinterWear</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:pl-[20%] md:pl-[32%] px-2 w-full'>

                {/* ✅ Add margin-top fix for mobile */}
                <br />
                <div className='flex flex-col lg:flex-row justify-between lg:px-[50px] mt-[10px] md:mt-0 mb-3'>
                    <Title text1="ALL" text2="COLLECTIONS" />
                    <div ref={dropdownRef} className="relative w-[60%] md:w-[180px] lg:w-[220px] mt-3 md:mt-0">

                        <button
                            onClick={() => setShowSort(prev => !prev)}
                            className="bg-slate-600 w-full h-[50px] px-3 text-white rounded-lg border border-gray-300 flex justify-between items-center"
                        >
                            {sortType === "relavent" && "Sort By: Relevant"}
                            {sortType === "low-high" && "Sort By: Low to High"}
                            {sortType === "high-low" && "Sort By: High to Low"}
                            <span>▾</span>
                        </button>
                        {showSort && (

                            <div className="absolute left-0 top-[52px] w-full border border-gray-300 bg-slate-300 p-4 rounded-md shadow-lg z-50">
                                <p className="px-3 py-2 hover:bg-slate-700 cursor-pointer"
                                    onClick={() => { SetSortType("relavent"); setShowSort(false); }}>Sort By: Relevant</p>
                                <p className="px-3 py-2 hover:bg-slate-700 cursor-pointer"
                                    onClick={() => { SetSortType("low-high"); setShowSort(false); }}>Sort By: Low to High</p>
                                <p className="px-3 py-2 hover:bg-slate-700 cursor-pointer"
                                    onClick={() => { SetSortType("high-low"); setShowSort(false); }}>Sort By: High to Low</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className='w-full min-h-[70vh] flex flex-wrap items-center justify-center gap-[30px]'>
                    {filterProduct.map((item, i) => (
                        <Card key={i} id={item._id} name={item.name} price={item.price} image={item.image1} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Collections

