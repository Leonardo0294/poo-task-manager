import { Request, Response } from 'express';
export declare const createPurchase: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response>))[];
export declare const getPurchases: (req: Request, res: Response) => Promise<Response>;
