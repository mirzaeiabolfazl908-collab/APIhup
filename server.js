const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());

// نمایش فایل‌های سایت
app.use(express.static(path.join(__dirname, "..")));

// صفحه اصلی
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "indox.html"));
});

// API محصولات
app.get("/api/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "AI Text API",
            price: 99000
        },
        {
            id: 2,
            name: "Data API",
            price: 149000
        },
        {
            id: 3,
            name: "Utility API",
            price: 79000
        }
    ]);
});

// اجرای سرور
app.listen(PORT, "0.0.0.0", () => {
    console.log(`API HUB Backend running on port ${PORT}`);
});