var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Production_1;
import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import Seed from './Seed.js';
let Production = Production_1 = class Production {
    repository;
    id;
    date;
    production;
    seed;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Production_1);
    }
    async createProduction() {
        await this.repository.save(this);
    }
    async findProduction() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findProductions() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Production.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Date)
], Production.prototype, "date", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Production.prototype, "production", void 0);
__decorate([
    ManyToOne(() => Seed, (seed) => seed.productions),
    __metadata("design:type", Object)
], Production.prototype, "seed", void 0);
Production = Production_1 = __decorate([
    ObjectType("Production"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Production);
export default Production;
//# sourceMappingURL=Production.js.map