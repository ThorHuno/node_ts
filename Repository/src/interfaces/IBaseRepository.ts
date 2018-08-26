import BaseEntity from "../entities/BaseEntity";

export default interface IBaseRepository<T extends BaseEntity> {
    add(entity: T): boolean;
    update(entity: T): boolean;
    remove(entity: T): boolean;
}