var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import Book from "../entity/Book.js";
import { BookInput } from "../input/BookInput.js";
import Author from "../entity/Author.js";
let BookResolver = class BookResolver {
    async getBook(idBook) {
        let book = new Book();
        book.id = idBook;
        return await book.findBook();
    }
    async getAllBook() {
        let book = new Book();
        return await book.findBooks();
    }
    async bookCreate(create, authorIds) {
        let book = new Book(create);
        let author = new Author();
        let authors = [];
        authors = await author.findAuthors(authorIds);
        book.bookAuthors = authors;
        await book.createBook();
        return await book.findBook();
    }
};
__decorate([
    Query(() => Book),
    __param(0, Arg('idBook')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "getBook", null);
__decorate([
    Query(() => [Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "getAllBook", null);
__decorate([
    Mutation(() => Book, { nullable: true }),
    __param(0, Arg("create")),
    __param(1, Arg("authors", () => [Int])),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookInput, Array]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "bookCreate", null);
BookResolver = __decorate([
    Resolver(Book)
], BookResolver);
export { BookResolver };
//# sourceMappingURL=BookResolvers.js.map