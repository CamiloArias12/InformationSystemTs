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
import Production from "../entity/Production.js";
import { ProductionInput } from "../input/ProductionInput.js";
import Seed from "../entity/Seed.js";
let ProductionResolver = class ProductionResolver {
    async getAllProduction() {
        let production = new Production();
        return await production.findProductions();
    }
    async production(lotId) {
        let production = new Production();
        production.id = lotId;
        return await production.findProduction();
    }
    async productionCreate(create) {
        let seed = new Seed();
        seed.id = create.seed;
        let production = new Production(create);
        production.seed = seed;
        await production.createProduction();
        return await production.findProduction();
    }
};
__decorate([
    Query(() => [Production]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductionResolver.prototype, "getAllProduction", null);
__decorate([
    Query(() => Production),
    __param(0, Arg('lotId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductionResolver.prototype, "production", null);
__decorate([
    Mutation(() => Production),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ProductionInput]),
    __metadata("design:returntype", Promise)
], ProductionResolver.prototype, "productionCreate", null);
ProductionResolver = __decorate([
    Resolver(Production)
], ProductionResolver);
export { ProductionResolver };
//# sourceMappingURL=ProductionResolver.js.map