var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Municipality_1;
import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { AppDataSource } from "../data-source.js";
import Agriculturist from "./Agriculturist.js";
import Department from "./Department.js";
import Lot from "./Lot.js";
let Municipality = Municipality_1 = class Municipality {
    repository;
    id;
    name;
    agriculturists;
    department;
    lots;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Municipality_1);
    }
    async createMunicipality() {
        return await this.repository.save(this);
    }
    async findMunicipality() {
        return await this.repository.findOneBy({ id: this.id });
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Municipality.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Municipality.prototype, "name", void 0);
__decorate([
    OneToMany(() => Agriculturist, (agriculturist) => agriculturist.department),
    __metadata("design:type", Array)
], Municipality.prototype, "agriculturists", void 0);
__decorate([
    ManyToOne(() => Department, (department) => department.municipality),
    __metadata("design:type", Object)
], Municipality.prototype, "department", void 0);
__decorate([
    OneToMany(() => Lot, (lot) => lot.department),
    __metadata("design:type", Array)
], Municipality.prototype, "lots", void 0);
Municipality = Municipality_1 = __decorate([
    ObjectType("Municipality"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Municipality);
export default Municipality;
//# sourceMappingURL=Municipality.js.map