import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());
const secret = bcrypt.genSaltSync(10);
const jwtSecret = "efesfewfewfesfeserfrrfe";

// Use CORS before defining routes
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

mongoose.connect("mongodb+srv://virajsurve:1gy3JDrqYLDptMlc@cluster0.hc9gkg7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.get("/test", (req, res) => {
    res.json("test ok");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const UserDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, secret),
        });
        res.json(UserDoc);
    } catch (e) {
        res.status(422).json(e);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const UserDoc = await User.findOne({ email: email });
    if (UserDoc) {
        const passOK = bcrypt.compareSync(password, UserDoc.password);
        if (passOK) {
            jwt.sign({ email: UserDoc.email, id: UserDoc._id, name: UserDoc.name }, jwtSecret, {}, (err, token) => {
                if (err) {
                    console.error("JWT Sign Error:", err);
                    res.status(500).json("Error signing token");
                } else {
                    res.cookie("token", token).json({ UserDoc });
                }
            });
        } else {
            res.status(422).json("Password NOT OK");
        }
    } else {
        res.status(404).json("User not found");
    }
});

app.get("/profile", (req, res) => {
    const { token } = req.cookies;
    console.log("Token received:", token);
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, user) => {
            if (err) {
                console.error("JWT Verify Error:", err);
                res.status(403).json("Invalid token");
            } else {
                console.log("User verified:", user);
                res.json(user);
            }
        });
    } else {
        console.log("No token provided");
        res.status(401).json("No token provided");
    }
});

app.post("/logout",(req,res)=>{
    res.cookie("token","").json(true);
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});
