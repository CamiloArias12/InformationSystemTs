var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Department_1;
import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AppDataSource } from "../data-source.js";
import Agriculturist from "./Agriculturist.js";
import Municipality from "./Municipality.js";
import Lot from "./Lot.js";
let Department = Department_1 = class Department {
    repository;
    id;
    name;
    municipality;
    agriculturist;
    lots;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Department_1);
    }
    async createDepartment() {
        return await this.repository.save(this);
    }
    async findDepartment() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findDepartments() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Department.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Department.prototype, "name", void 0);
__decorate([
    OneToMany(() => Municipality, (municipality) => municipality.department),
    __metadata("design:type", Array)
], Department.prototype, "municipality", void 0);
__decorate([
    OneToMany(() => Agriculturist, (agriculturist) => agriculturist.department),
    __metadata("design:type", Array)
], Department.prototype, "agriculturist", void 0);
__decorate([
    OneToMany(() => Lot, (lot) => lot.department),
    __metadata("design:type", Array)
], Department.prototype, "lots", void 0);
Department = Department_1 = __decorate([
    ObjectType("Department"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Department);
export default Department;
//# sourceMappingURL=Department.js.map