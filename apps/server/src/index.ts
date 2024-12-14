import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json())

app.use("/api/v1/auth", userRoutes)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});