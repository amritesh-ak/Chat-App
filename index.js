const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const userRoute = require("./routes/userroute");
const messageroute = require("./routes/messageroute");
const app = express();
const PORT = 8005;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));


// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Your React app
    credentials: true,              // Allow cookies to be sent
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));


// Routes
app.use("/user", userRoute);
app.use("/message",messageroute);

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});