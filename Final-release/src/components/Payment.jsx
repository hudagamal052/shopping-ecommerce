import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product = {}, totalPrice } = location.state || {};

    const [amount, setAmount] = useState(totalPrice || "");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!amount || amount <= 0) {
            newErrors.amount = "Amount must be greater than 0.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            newErrors.email = "Enter a valid email address.";
        }

        const phoneRegex = /^(010|011|012|015)\d{8}$/;
        if (!phone || !phoneRegex.test(phone)) {
            newErrors.phone = "Enter a valid Egyptian phone number (11 digits).";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePayment = async () => {
        if (!validateForm()) return;

        try {
            const tokenRes = await axios.post("http://localhost:5000/api/paymob/get-token");
            const authToken = tokenRes.data.token;

            const orderRes = await axios.post("http://localhost:5000/api/paymob/create-order", {
                token: authToken,
                amount: amount
            });
            const orderId = orderRes.data.orderId;

            const paymentKeyRes = await axios.post("http://localhost:5000/api/paymob/get-payment-key", {
                token: authToken,
                orderId: orderId,
                amount: amount,
                customerEmail: email,
                customerPhone: phone,
            });
            const paymentKey = paymentKeyRes.data.paymentKey;

            window.location.href = `https://accept.paymob.com/api/acceptance/iframes/910857?payment_token=${paymentKey}`;
        } catch (error) {
            setErrors({ form: "Payment failed. Please try again." });
            console.error("Payment Error:", error);
        }
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Card sx={{ padding: "20px", boxShadow: 3, borderRadius: 2, backgroundColor: "#f5f5f5" }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center" color="#004f52">
                        Pay with Paymob
                    </Typography>
                    {errors.form && <Typography color="error" align="center">{errors.form}</Typography>}

                    {Object.keys(product).length === 0 ? (
                        <Typography variant="body1" color="error" align="center">
                            No product selected. Please go back to the cart and select a product.
                        </Typography>
                    ) : (
                        <>
                            <Typography variant="h6" gutterBottom color="#006A71">
                                Product: {product.title}
                            </Typography>
                            <Typography variant="body1" color="#004f52">
                                Total Price: ${(product.price * product.quantity).toFixed(2)}
                            </Typography>
                        </>
                    )}

                    <TextField
                        label="Amount (EGP)"
                        type="number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        error={!!errors.amount}
                        helperText={errors.amount}
                        sx={{ backgroundColor: "#e0f2f1" }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ backgroundColor: "#e0f2f1" }}
                    />
                    <TextField
                        label="Phone Number"
                        type="tel"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={{ backgroundColor: "#e0f2f1" }}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handlePayment}
                        sx={{ marginTop: 2, backgroundColor: "#006A71", '&:hover': { backgroundColor: "#004f52" } }}
                    >
                        Pay Now
                    </Button>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => navigate('/cart')}
                        sx={{ marginTop: 2, borderColor: "#006A71", color: "#006A71", '&:hover': { borderColor: "#004f52", color: "#004f52" } }}
                    >
                        Back to Cart
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Payment;
