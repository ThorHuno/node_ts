import { Request, Response, NextFunction } from 'express';
import { Constants, Colors } from 'tets_utils';

export class Test {
    controllerName: string = "Test";
    index = (req: Request, res: Response) => {
        res.json({ titulo: this.controllerName + Constants.SuccessMsg });
    }
}