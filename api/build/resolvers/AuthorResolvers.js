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
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Author from "../entity/Author.js";
import { AuthorInput } from "../input/AuthorInput.js";
let AuthorResolver = class AuthorResolver {
    async getAllAuthor() {
        let author = new Author();
        return await author.findAuthorsAll();
    }
    async author(authorId) {
        let author = new Author();
        author.id = authorId;
        return await author.findAuthor();
    }
    async authorCreate(create) {
        let author = new Author(create);
        if (await author.findAuthor() == null) {
            await author.createAuthor();
            return await author.findAuthor();
        }
        else {
            return null;
        }
    }
    async authorUpdate(update) {
        let author = new Author(update);
        await author.createAuthor();
        return await author.findAuthor();
    }
};
__decorate([
    Query(() => [Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "getAllAuthor", null);
__decorate([
    Query(() => Author),
    __param(0, Arg('authorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "author", null);
__decorate([
    Mutation(() => Author),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authorCreate", null);
__decorate([
    Mutation(() => Author),
    __param(0, Arg("update")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authorUpdate", null);
AuthorResolver = __decorate([
    Resolver(Author)
], AuthorResolver);
export { AuthorResolver };
//# sourceMappingURL=AuthorResolvers.js.map