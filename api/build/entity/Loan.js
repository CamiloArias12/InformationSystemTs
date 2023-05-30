var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Loan_1;
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Book from './Book.js';
import { AppDataSource } from '../data-source.js';
import { Field, ObjectType } from 'type-graphql';
import User from './User.js';
let Loan = Loan_1 = class Loan {
    repository;
    id;
    startDate;
    returnDate;
    returned;
    user;
    books;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Loan_1);
    }
    async createLoan() {
        try {
            await this.repository.save(this);
            console.log("Loan saved successfully");
        }
        catch (error) {
            console.error("Error saving loan:", error);
        }
    }
    async findLoan() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findLoans() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Loan.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Date)
], Loan.prototype, "startDate", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", Date)
], Loan.prototype, "returnDate", void 0);
__decorate([
    Field(),
    Column({ default: false }),
    __metadata("design:type", Boolean)
], Loan.prototype, "returned", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.loans),
    __metadata("design:type", Object)
], Loan.prototype, "user", void 0);
__decorate([
    ManyToOne(() => Book, (book) => book.loans),
    __metadata("design:type", Object)
], Loan.prototype, "books", void 0);
Loan = Loan_1 = __decorate([
    ObjectType("Loan"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Loan);
export default Loan;
//# sourceMappingURL=Loan.js.map