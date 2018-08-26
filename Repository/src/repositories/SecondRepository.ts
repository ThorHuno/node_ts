import BaseRepository from "./BaseRepository";
import SecondEntity from "../entities/SecondEntity";
import ISecondRepository from "../interfaces/ISecondRepository";

export default class FirstRepository extends BaseRepository<SecondEntity> implements ISecondRepository {
    customUpdate(entity: SecondEntity): boolean {
        return true;
    }

}