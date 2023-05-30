var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var User_1;
import { Field, ObjectType } from "type-graphql";
import { Entity, Column, OneToMany, PrimaryColumn, } from "typeorm";
import { AppDataSource } from "../data-source.js";
import Loan from "./Loan.js";
let User = User_1 = class User {
    repository;
    id;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
    rol;
    isActive;
    loans;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(User_1);
    }
    async createUser() {
        return await this.repository.save(this);
    }
    async findUser() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findUserAll() {
        try {
            return await this.repository.find();
        }
        catch (error) {
            console.error('Error fetching users:', error);
            return null;
        }
    }
    async validateUser() {
        const user = await this.repository.findOneBy({ email: this.email, password: this.password });
        return user;
    }
};
__decorate([
    Field(),
    PrimaryColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    Field(),
    Column({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Field(),
    Column({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "rol", void 0);
__decorate([
    Field(),
    Column({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    OneToMany(() => Loan, (loan) => loan.user),
    __metadata("design:type", Array)
], User.prototype, "loans", void 0);
User = User_1 = __decorate([
    ObjectType("User"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], User);
export default User;
//# sourceMappingURL=User.js.map