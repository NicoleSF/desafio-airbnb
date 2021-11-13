import passport from "passport";
import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

export function home(req: Request, res: Response, next: NextFunction) {
    return res.json({teste: 'deu certo'})
}

export function login(req: Request, res: Response, next: NextFunction) {
    return res.json({teste: 'deu certo login'})
}

export function cadastro(req: Request, res: Response, next: NextFunction) {
    return res.json({teste: 'deu certo cadastro'})
}