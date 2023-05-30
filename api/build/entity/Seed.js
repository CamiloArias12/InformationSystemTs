var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Seed_1;
import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import TypePatatoe from './TypePatatoe.js';
import Lot from './Lot.js';
import Production from './Production.js';
let Seed = Seed_1 = class Seed {
    repository;
    id;
    date;
    lot;
    patatoe;
    productions;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Seed_1);
    }
    async createSeed() {
        await this.repository.save(this);
    }
    async findSeed() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findSeeds() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Seed.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Date)
], Seed.prototype, "date", void 0);
__decorate([
    ManyToOne(() => Lot, (lot) => lot.seeds),
    __metadata("design:type", Object)
], Seed.prototype, "lot", void 0);
__decorate([
    ManyToOne(() => TypePatatoe, (patatoe) => patatoe.seeds),
    __metadata("design:type", Object)
], Seed.prototype, "patatoe", void 0);
__decorate([
    OneToMany(() => Production, (production) => production.seed),
    __metadata("design:type", Array)
], Seed.prototype, "productions", void 0);
Seed = Seed_1 = __decorate([
    ObjectType("Seed"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Seed);
export default Seed;
//# sourceMappingURL=Seed.js.map