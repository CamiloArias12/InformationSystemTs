var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Agriculturist_1;
import { Field, ObjectType } from "type-graphql";
import { Entity, Column, OneToMany, PrimaryColumn, ManyToOne, } from "typeorm";
import { AppDataSource } from "../data-source.js";
import Department from "./Department.js";
import Lot from "./Lot.js";
import Municipality from "./Municipality.js";
let Agriculturist = Agriculturist_1 = class Agriculturist {
    repository;
    identification;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
    lots;
    department;
    municipality;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Agriculturist_1);
    }
    async createAgriculturist() {
        return await this.repository.save(this);
    }
    async findAgriculturist() {
        return await this.repository.findOneBy({ identification: this.identification });
    }
    async findAgriculturistAll() {
        try {
            return await this.repository.find();
        }
        catch (error) {
            console.error('Error fetching agriculturists:', error);
            return null;
        }
    }
    async validateAgriculturist() {
        const agriculturist = await this.repository.findOneBy({ email: this.email, password: this.password });
        return agriculturist;
    }
};
__decorate([
    Field(),
    PrimaryColumn(),
    __metadata("design:type", Number)
], Agriculturist.prototype, "identification", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Agriculturist.prototype, "firstName", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Agriculturist.prototype, "lastName", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Agriculturist.prototype, "phone", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Agriculturist.prototype, "address", void 0);
__decorate([
    Field(),
    Column({ unique: true }),
    __metadata("design:type", String)
], Agriculturist.prototype, "email", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Agriculturist.prototype, "password", void 0);
__decorate([
    OneToMany(() => Lot, (lot) => lot.agriculturist),
    __metadata("design:type", Array)
], Agriculturist.prototype, "lots", void 0);
__decorate([
    ManyToOne(() => Department, (department) => department.agriculturist),
    __metadata("design:type", Object)
], Agriculturist.prototype, "department", void 0);
__decorate([
    ManyToOne(() => Municipality, (municipality) => municipality.agriculturists),
    __metadata("design:type", Object)
], Agriculturist.prototype, "municipality", void 0);
Agriculturist = Agriculturist_1 = __decorate([
    ObjectType("Agriculturist"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Agriculturist);
export default Agriculturist;
//# sourceMappingURL=Agriculturist.js.map