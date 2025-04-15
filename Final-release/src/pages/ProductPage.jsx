import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

import {
    Button, Typography
} from "@mui/material";

const ProductPage = () => {
    const { subcategoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [subcategoryName, setSubcategoryName] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://mocki.io/v1/411ee242-81cf-424e-9a8b-5601c75fb251")
            .then((res) => res.json())
            .then((data) => {
                data.categories.forEach((cat) => {
                    const sub = cat.subcategories.find((s) => s.id.toString() === subcategoryId);
                    if (sub) {
                        setProducts(sub.products);
                        setSubcategoryName(sub.name);
                    }
                });
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [subcategoryId]);

    if (loading) {
        return (
            <div className="text-3xl font-bold text-center py-40 text-[#006A71]">Loading...</div>
        );
    }

    return (
        <div className="p-8 bg-[#f5f5f5]">
            {/* <h2 className="text-3xl font-bold pb-12 text-center text-[#006A71]">{subcategoryName}</h2> */}
            <Typography
                variant="h3"
                align="center"
                fontWeight="bold"
                color="#004f52"
                gutterBottom
                sx={{
                    mb: 6,
                    position: 'relative',
                    '&:after': {
                        content: '""',
                        display: 'block',
                        width: '80px',
                        height: '4px',
                        backgroundColor: '#006A71',
                        margin: '16px auto 0'
                    }
                }}
            >
                {subcategoryName}            </Typography>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-12 sm:mx-0">
                {products.map((product) => (
                    <div to={`/product/${product.id}`} key={product.id} className="no-underline hover:no-underline">
                        <div className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:bg-[#e0f2f1]" style={{ borderColor: '#004f52' }}>
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-3" />
                            <h6 className=" text-[#004f52] hover:text-[#00796b] transition-colors duration-300 !important">
                                {product.name}
                            </h6>
                            <p className="text-[#006A71] font-bold mt-2 !important">${product.price}</p>
                            <div className="flex justify-center mt-4">
                                <Button
                                    size="small"
                                    sx={{
                                        backgroundColor: '#006A71',
                                        color: '#fff',
                                        '&:hover': { backgroundColor: '#004f52' },
                                        borderRadius: '12px',
                                        fontWeight: 'bold',
                                        padding: '6px 12px',
                                    }}
                                    onClick={() => navigate(`/product/${product.id}`)}
                                >
                                    🔍 View Details
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductPage;