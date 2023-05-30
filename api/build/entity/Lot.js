var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Lot_1;
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Seed from './Seed.js';
import { AppDataSource } from '../data-source.js';
import { Field, ObjectType } from 'type-graphql';
import Agriculturist from './Agriculturist.js';
import Department from './Department.js';
import Municipality from './Municipality.js';
let Lot = Lot_1 = class Lot {
    repository;
    id;
    width;
    long;
    postalCode;
    agriculturist;
    seeds;
    department;
    municipality;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Lot_1);
    }
    async createLot() {
        try {
            await this.repository.save(this);
            console.log("Lot saved successfully");
        }
        catch (error) {
            console.error("Error saving lot:", error);
        }
    }
    async findLot() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findLots() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Lot.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Lot.prototype, "width", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Lot.prototype, "long", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Number)
], Lot.prototype, "postalCode", void 0);
__decorate([
    ManyToOne(() => Agriculturist, (agriculturist) => agriculturist.lots),
    __metadata("design:type", Object)
], Lot.prototype, "agriculturist", void 0);
__decorate([
    OneToMany(() => Seed, (seed) => seed.lot),
    __metadata("design:type", Array)
], Lot.prototype, "seeds", void 0);
__decorate([
    ManyToOne(() => Department, (department) => department.lots),
    __metadata("design:type", Object)
], Lot.prototype, "department", void 0);
__decorate([
    ManyToOne(() => Municipality, (municipality) => municipality.lots),
    __metadata("design:type", Object)
], Lot.prototype, "municipality", void 0);
Lot = Lot_1 = __decorate([
    ObjectType("Lot"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Lot);
export default Lot;
//# sourceMappingURL=Lot.js.map