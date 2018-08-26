import IBaseRepository from "./IBaseRepository";
import FirstEntity from "../entities/FirstEntity";

export default interface IFirstRepository extends IBaseRepository<FirstEntity> {
    customAdd(entity: FirstEntity): boolean;
}