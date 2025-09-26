import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use("/api/auth", authRouters)
app.use("/api/messages", messageRoutes)

app.listen(PORT,() => console.log("Sever running on port "+PORT));
