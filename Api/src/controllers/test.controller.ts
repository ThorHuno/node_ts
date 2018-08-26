import { Request, Response, NextFunction } from 'express';
import { Constants, Colors } from 'tets_utils';
import { FirstRepository } from 'test_repository';
import FirstEntity from '../../../repository/dist/entities/FirstEntity';

export class Test {
    controllerName: string = "Test";
    index = (req: Request, res: Response) => {
        var objRepository = new FirstRepository();
        var result = objRepository.customAdd(new FirstEntity());
        res.json({ titulo: `${this.controllerName} ${Constants.SuccessMsg} ${result}` });
    }
}