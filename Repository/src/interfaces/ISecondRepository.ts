import IBaseRepository from "./IBaseRepository";
import SecondEntity from "../entities/SecondEntity";

export default interface ISecondRepository extends IBaseRepository<SecondEntity> {
    customUpdate(entity: SecondEntity): boolean;
}