var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Book_1;
import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import Author from './Author.js';
import Loan from './Loan.js';
let Book = Book_1 = class Book {
    repository;
    id;
    title;
    publisher;
    area;
    summary;
    bookAuthors;
    loans;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Book_1);
    }
    async createBook() {
        await this.repository.save(this);
    }
    async findBook() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findBooks() {
        return await this.repository.find();
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Book.prototype, "publisher", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Book.prototype, "area", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Book.prototype, "summary", void 0);
__decorate([
    ManyToMany(() => Author),
    JoinTable(),
    __metadata("design:type", Object)
], Book.prototype, "bookAuthors", void 0);
__decorate([
    OneToMany(() => Loan, (loan) => loan.books),
    __metadata("design:type", Array)
], Book.prototype, "loans", void 0);
Book = Book_1 = __decorate([
    ObjectType("Book"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Book);
export default Book;
//# sourceMappingURL=Book.js.map