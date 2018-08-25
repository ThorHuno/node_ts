import { Request, Response, NextFunction } from 'express';

export class Test2 {
    controllerName: string = "Test2";
    index = (req: Request, res: Response) => {
        res.json({ titulo: this.controllerName });
    }
}