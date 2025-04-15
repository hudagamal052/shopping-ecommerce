import React from 'react';
import img from '../assets/images/ok.jpg';
import img1 from '../assets/images/fast.jpg';
import img2 from '../assets/images/secure.png';
import img3 from '../assets/images/ss.jpg';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-16 bg-[#e0f4f5] min-h-screen pt-28 w-full">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#004f52] leading-tight">
                        Discover the best products at <br /> irresistible prices!
                    </h1>
                    <p className="text-lg md:text-xl text-[#666]">
                        Shop now from our exclusive collection of trendy and beloved <br /> products, all in one place.
                    </p>
                    <Link to="/products">
                        <button className="bg-[#006A71] hover:bg-[#004f52] text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                            Shop Now
                        </button>
                    </Link>
                </div>

                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
                    <img 
                        src={img} 
                        alt="Shopping" 
                        className="max-w-350 h-120 rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
            </div>

            <section className="py-16 px-8 bg-[#e0f4f5] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#004f52] mb-10">Why Shop With Us?</h2>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#666]">
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition-all hover:transform hover:scale-105 bg-white">
                        <h3 className="text-xl font-semibold mb-3 text-[#004f52]">Fast Delivery</h3>
                        <img 
                            src={img1} 
                            alt="Fast Delivery" 
                            className="max-w-100 h-48 rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105"
                        />
                        <br />
                        <p>Get your products delivered within 48 hours, no delays!</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition-all hover:transform hover:scale-105 bg-white">
                        <h3 className="text-xl font-semibold mb-3 text-[#004f52]">Secure Payment</h3>
                        <img 
                            src={img2} 
                            alt="Secure Payment" 
                            className="max-w-100 h-48 rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105"
                        />
                        <br />
                        <p>We provide trusted and encrypted payment methods.</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-md hover:shadow-2xl transition-all hover:transform hover:scale-105 bg-white">
                        <h3 className="text-xl font-semibold mb-3 text-[#004f52]">24/7 Support</h3>
                        <img 
                            src={img3} 
                            alt="Support" 
                            className="max-w-100 h-48 rounded-2xl shadow-xl transition-transform duration-300 transform hover:scale-105"
                        />
                        <br />
                        <p>Our support team is always available to help you.</p>
                    </div>
                </div>
            </section>

            <section className="bg-[#f5f5f5] py-12 px-6 text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#004f52] mb-4">Stay Updated!</h2>
                <p className="text-[#666] mb-6">Subscribe to get the latest offers and product updates.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-4 py-2 rounded-md border w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-[#006A71] transition-all" 
                    />
                    <button className="bg-[#006A71] hover:bg-[#004f52] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:shadow-xl transition-all">
                        Subscribe
                    </button>
                </div>
            </section>
        </>
    );
}

export default Homepage;
