// huda
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useShop } from '../context/ShopContext';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { addToCart, addToFavorite } = useShop();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch("https://mocki.io/v1/411ee242-81cf-424e-9a8b-5601c75fb251");
                const data = await res.json();
                const allProducts = data.categories.flatMap((category) =>
                    category.subcategories.flatMap((sub) => sub.products)
                );
                const foundProduct = allProducts.find((p) => p.id.toString() === productId);
                setProduct(foundProduct);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchProduct();
    }, [productId]);

    if (loading) return <div className="text-center text-lg font-semibold py-10">Loading...</div>;
    if (!product) return <div className="text-center text-red-500 py-10">Product not found</div>;

    return (
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-[#f5f5f5] min-h-screen items-center justify-center">
            <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover"
            />

            <div className="md:w-1/2 flex flex-col justify-center items-center text-center space-y-4 border border-gray-200 rounded-2xl p-6 shadow-md bg-white">
                <h2 className="text-3xl font-bold text-[#004f52]">{product.name}</h2>

                <div className="flex items-center justify-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    ))}
                    <span className="text-sm text-[#666] ml-2">(5.0)</span>
                </div>

                <p className="text-[#666] text-lg">{product.description}</p>
                <p className="text-2xl font-semibold text-[#006A71]">${product.price}</p>

                <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    <button
                        className="flex items-center gap-2 bg-[#006A71] text-white px-6 py-2 rounded-xl hover:bg-[#004f52] transition"
                        onClick={() => addToCart(product)}
                    >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                    </button>

                    <button
                        className="flex items-center gap-2 border border-[#666] text-[#004f52] px-6 py-2 rounded-xl hover:bg-[#e0f4f5] transition"
                        onClick={() => addToFavorite(product)}
                    >
                        <Heart className="w-5 h-5" />
                        Favorite
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="border border-[#666] text-[#004f52] px-6 py-2 rounded-xl hover:bg-[#e0f4f5] transition"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;
