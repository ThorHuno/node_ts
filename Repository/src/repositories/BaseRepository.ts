import IBaseRepository from "../interfaces/IBaseRepository";
import BaseEntity from "../entities/BaseEntity";

export default class BaseRepository<T extends BaseEntity> implements IBaseRepository<T>{
    add(entity: T): boolean {
        return true;
    }
    update(entity: T): boolean {
        return true;
    }
    remove(entity: T): boolean {
        return true;
    }


}