import { Request, Response } from 'express';
export declare const createProduct: (import("express-validator").ValidationChain | ((req: Request, res: Response) => Promise<Response>))[];
export declare const getProducts: (req: Request, res: Response) => Promise<Response>;
