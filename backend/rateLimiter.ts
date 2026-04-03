import { Request, Response, NextFunction } from 'express';  // 1. Import types
import client from './redis.client.js';

// 2. Add types to the parameters
const rateLimiter =  async (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip;
    const key = `limit:${ip}`;
    const limit = 3;
    const window = 60;

    try {
        const request = await client.incr(key);

        if(request === 1){
            await client.expire(key, window);
        }

        if(request > limit){
            console.log(`${ip} address blocked, Request Number: ${request}`);
            return res.status(429).json({
                success: false,
                message: "Too many request, Please try again after a minute."
            });
        }

        console.log(`IP ${ip} is passed for contact. Count: ${request}`);
        next();

    } catch (err: any) { // Add: 'any' here
        console.log("Redis error in warden", err);
        next();
    }
};
export default rateLimiter;