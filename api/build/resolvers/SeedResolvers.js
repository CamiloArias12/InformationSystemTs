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
import Seed from "../entity/Seed.js";
import { SeedInput } from "../input/SeedInput.js";
import TypePatatoe from "../entity/TypePatatoe.js";
import Lot from "../entity/Lot.js";
let SeedResolver = class SeedResolver {
    async getSeed(idSeed) {
        let seed = new Seed();
        seed.id = idSeed;
        return await seed.findSeed();
    }
    async getAllSeed() {
        let seed = new Seed();
        return await seed.findSeeds();
    }
    async seedCreate(create) {
        let seed = new Seed(create);
        let patatoe = new TypePatatoe();
        let lot = new Lot();
        lot.id = create.lot;
        patatoe.id = create.patatoe;
        seed.lot = lot;
        seed.patatoe = patatoe;
        await seed.createSeed();
        return await seed.findSeed();
    }
};
__decorate([
    Query(() => Seed),
    __param(0, Arg('idSeed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeedResolver.prototype, "getSeed", null);
__decorate([
    Query(() => [Seed]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedResolver.prototype, "getAllSeed", null);
__decorate([
    Mutation(() => Seed, { nullable: true }),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SeedInput]),
    __metadata("design:returntype", Promise)
], SeedResolver.prototype, "seedCreate", null);
SeedResolver = __decorate([
    Resolver(Seed)
], SeedResolver);
export { SeedResolver };
//# sourceMappingURL=SeedResolvers.js.map