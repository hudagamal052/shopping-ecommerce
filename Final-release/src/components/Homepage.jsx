import React from 'react';
import img from '../assets/images/LT.png';
import img1 from '../assets/images/fast.jpg';
import img2 from '../assets/images/secure.png';
import img3 from '../assets/images/ss.jpg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Homepage = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-[#f0f9fa] via-[#e0f4f5] to-[#d1eff1]">
            
            <div className="min-h-screen pt-28 p-8 md:p-16 w-full max-w-7xl mx-auto">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-start"
                    >
                        <img
                            src={img}
                            alt="Shopping"
                            className="w-[440px] h-auto bg-transparent object-contain"
                            style={{ boxShadow: "none", border: "none" }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/2 text-center md:text-left space-y-6"
                    >
                        <p className="text-4xl md:text-5xl font-bold text-[#006A71] leading-snug">
                            Elevate Your Style with Our Exclusive Picks
                        </p>

                        <p className="text-lg md:text-xl text-gray-600">
                            Discover premium products at unbeatable prices — curated with care and delivered fast.
                        </p>
                        <Link to="/products">
                        <button className="relative inline-block px-8 py-3 font-semibold text-white bg-[#006A71] rounded-2xl transition-all duration-300 ease-in-out overflow-hidden group hover:bg-[#004f52] hover:scale-105 hover:rotate-2">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out scale-0 bg-[#e0f4f5] opacity-20 group-hover:scale-100 group-hover:opacity-30 rounded-2xl"></span>
                            <span className="relative z-10">Start Shopping Now</span>
                        </button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            <section className="py-20 px-8 w-full max-w-7xl mx-auto">
                <p className="text-4xl md:text-3xl font-bold text-[#004f52] mb-12 tracking-wide text-center">
                    Why Shop With Us?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-[#666]">

                    <div className="p-6 bg-white/90 rounded-3xl border border-[#e0f4f5] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 backdrop-blur-sm">
                        <img
                            src={img1}
                            alt="Fast Delivery"
                            className="mx-auto h-44 object-contain rounded-xl transition-transform duration-300 hover:scale-110"
                            style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
                        />
                        <p className="text-2xl font-semibold mt-6 mb-3 text-[#006A71]">Fast Delivery</p>
                        <p className="text-base text-gray-600">Get your products delivered within 48 hours, no delays!</p>
                    </div>

                    
                    <div className="p-6 bg-white/90 rounded-3xl border border-[#e0f4f5] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 backdrop-blur-sm">
                        <img
                            src={img2}
                            alt="Secure Payment"
                            className="mx-auto h-44 object-contain rounded-xl transition-transform duration-300 hover:scale-110"
                            style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
                        />
                        <p className="text-2xl font-semibold mt-6 mb-3 text-[#006A71]">Secure Payment</p>
                        <p className="text-base text-gray-600">We provide trusted and encrypted payment methods.</p>
                    </div>

                    
                    <div className="p-6 bg-white/90 rounded-3xl border border-[#e0f4f5] shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 backdrop-blur-sm">
                        <img
                            src={img3}
                            alt="Support"
                            className="mx-auto h-44 object-contain rounded-xl transition-transform duration-300 hover:scale-110"
                            style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
                        />
                        <p className="text-2xl font-semibold mt-6 mb-3 text-[#006A71]">24/7 Support</p>
                        <p className="text-base text-gray-600">Our support team is always available to help you.</p>
                    </div>
                </div>
            </section>

            
            <section className="py-12 px-6 text-center w-full max-w-7xl mx-auto pb-32">
                <p className="text-2xl md:text-3xl font-bold text-[#004f52] mb-4">Stay Updated!</p>
                <p className="text-gray-600 mb-6">Subscribe to get the latest offers and product updates.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-4 py-2 rounded-md border border-[#e0f4f5] w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-[#006A71] transition-all bg-white/90" 
                    />
                    <button className="bg-[#006A71] hover:bg-[#004f52] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                        Subscribe
                    </button>

                </div>
            </section>
        </div>
    );
}

export default Homepage;