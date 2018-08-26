import BaseRepository from "./BaseRepository";
import FirstEntity from "../entities/FirstEntity";
import IFirstRepository from "../interfaces/IFirstRepository";

export default class FirstRepository extends BaseRepository<FirstEntity> implements IFirstRepository {
    customAdd(entity: FirstEntity): boolean {
        return true;
    }

}