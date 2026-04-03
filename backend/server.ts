// 1. npm install cors     
// 2. npm install --save-dev @types/cors

import 'dotenv/config'; 
import express, {Request, Response} from 'express';  //1. Import Types
import rateLimiter from './rateLimiter.js';
import cors from 'cors';  // 3. import the package

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;  // Explicitly a number

// 3. Use cors middleware before your routes
// app.use(cors());   // easy method 
app.use(cors({   // strict method
    origin: 'http://localhost:5173',  // frontend URL
    methods: ['GET', 'POST'],    // Allowed actions
    credentials: true,
}));

app.get('/contact', rateLimiter, (req: Request, res: Response) => {
    console.log("contact route successful");
    res.send("Please contact us in this 123456789");
});


app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
});