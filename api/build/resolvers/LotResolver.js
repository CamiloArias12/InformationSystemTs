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
import Lot from "../entity/Lot.js";
import { LotInput } from "../input/LotInput.js";
import Agriculturist from "../entity/Agriculturist.js";
let LotResolver = class LotResolver {
    async getAllLot() {
        let lot = new Lot();
        return await lot.findLots();
    }
    async lot(lotId) {
        let lot = new Lot();
        lot.id = lotId;
        return await lot.findLot();
    }
    async lotCreate(create) {
        let agriculturist = new Agriculturist();
        let lot = new Lot(create);
        agriculturist.identification = create.agriculturist;
        await lot.createLot();
        return await lot.findLot();
    }
};
__decorate([
    Query(() => [Lot]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LotResolver.prototype, "getAllLot", null);
__decorate([
    Query(() => Lot),
    __param(0, Arg('lotId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LotResolver.prototype, "lot", null);
__decorate([
    Mutation(() => Lot),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LotInput]),
    __metadata("design:returntype", Promise)
], LotResolver.prototype, "lotCreate", null);
LotResolver = __decorate([
    Resolver(Lot)
], LotResolver);
export { LotResolver };
//# sourceMappingURL=LotResolver.js.map