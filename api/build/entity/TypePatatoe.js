var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TypePatatoe_1;
import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import Seed from './Seed.js';
let TypePatatoe = TypePatatoe_1 = class TypePatatoe {
    repository;
    id;
    name;
    seeds;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(TypePatatoe_1);
    }
    async createTypePatatoe() {
        await this.repository.save(this);
    }
    async findTypePatatoe() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findTypePatatoesAll() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], TypePatatoe.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], TypePatatoe.prototype, "name", void 0);
__decorate([
    OneToMany(() => Seed, (seed) => seed.patatoe),
    __metadata("design:type", Array)
], TypePatatoe.prototype, "seeds", void 0);
TypePatatoe = TypePatatoe_1 = __decorate([
    ObjectType("TypePatatoe"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], TypePatatoe);
export default TypePatatoe;
//# sourceMappingURL=TypePatatoe.js.map