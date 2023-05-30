var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Author_1;
import { Field, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, In } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import Book from './Book.js';
let Author = Author_1 = class Author {
    repository;
    id;
    name;
    nationality;
    biography;
    bookAuthors;
    constructor(params) {
        Object.assign(this, params);
        this.repository = AppDataSource.getRepository(Author_1);
    }
    async createAuthor() {
        await this.repository.save(this);
    }
    async findAuthor() {
        return await this.repository.findOneBy({ id: this.id });
    }
    async findAuthorsAll() {
        return await this.repository.find();
    }
    async findAuthors(authors) {
        return await this.repository.find({ where: { id: In(authors) } });
    }
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Author.prototype, "nationality", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Author.prototype, "biography", void 0);
__decorate([
    ManyToMany(() => Book),
    __metadata("design:type", Array)
], Author.prototype, "bookAuthors", void 0);
Author = Author_1 = __decorate([
    ObjectType("Author"),
    Entity(),
    __metadata("design:paramtypes", [Object])
], Author);
export default Author;
//# sourceMappingURL=Author.js.map