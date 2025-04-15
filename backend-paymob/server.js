require("dotenv").config();
const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 1. الاتصال بـ MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ Error connecting to MongoDB:', err));

// 2. نموذج المستخدم
const User = mongoose.model('User', {
  email: String,
  password: String,
});

// 3. مسارات تسجيل الدخول والتسجيل
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. مسارات Paymob
const PAYMOB_API_KEY = process.env.PAYMOB_API_KEY;
const PAYMOB_INTEGRATION_ID = process.env.PAYMOB_INTEGRATION_ID;

app.post("/api/paymob/get-token", async (req, res) => {
  try {
    const response = await axios.post("https://accept.paymob.com/api/auth/tokens", {
      api_key: PAYMOB_API_KEY,
    });

    res.json({ token: response.data.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/paymob/create-order", async (req, res) => {
  try {
    const { token, amount } = req.body;

    const response = await axios.post("https://accept.paymob.com/api/ecommerce/orders", {
      auth_token: token,
      delivery_needed: "false",
      amount_cents: amount * 100,
      currency: "EGP",
      items: []
    });

    res.json({ orderId: response.data.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/paymob/get-payment-key", async (req, res) => {
  try {
    const { token, orderId, amount, customerEmail, customerPhone } = req.body;

    const response = await axios.post("https://accept.paymob.com/api/acceptance/payment_keys", {
      auth_token: token,
      amount_cents: amount * 100,
      expiration: 3600,
      order_id: orderId,
      billing_data: {
        first_name: "Mostafa",
        last_name: "Ahmed",
        email: customerEmail,
        phone_number: customerPhone,
        country: "EG",
        city: "Cairo",
        street: "Street 123",
        building: "12",
        apartment: "10",
        floor: "3"
      },
      currency: "EGP",
      integration_id: PAYMOB_INTEGRATION_ID,
    });

    res.json({ paymentKey: response.data.token });

  } catch (error) {
    console.error("Payment Key Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// 5. تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
