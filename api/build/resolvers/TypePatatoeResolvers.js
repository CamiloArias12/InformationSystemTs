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
import TypePatatoe from "../entity/TypePatatoe.js";
import { TypePatatoeInput } from "../input/TypePatatoeInput.js";
let TypePatatoeResolver = class TypePatatoeResolver {
    async getAllTypePatatoe() {
        let patatoe = new TypePatatoe();
        return await patatoe.findTypePatatoesAll();
    }
    async patatoe(patatoeId) {
        let patatoe = new TypePatatoe();
        patatoe.id = patatoeId;
        return await patatoe.findTypePatatoe();
    }
    async patatoeCreate(create) {
        let patatoe = new TypePatatoe(create);
        if (await patatoe.findTypePatatoe() == null) {
            await patatoe.createTypePatatoe();
            return await patatoe.findTypePatatoe();
        }
        else {
            return null;
        }
    }
    async patatoeUpdate(update) {
        let patatoe = new TypePatatoe(update);
        await patatoe.createTypePatatoe();
        return await patatoe.findTypePatatoe();
    }
};
__decorate([
    Query(() => [TypePatatoe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypePatatoeResolver.prototype, "getAllTypePatatoe", null);
__decorate([
    Query(() => TypePatatoe),
    __param(0, Arg('patatoeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypePatatoeResolver.prototype, "patatoe", null);
__decorate([
    Mutation(() => TypePatatoe),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TypePatatoeInput]),
    __metadata("design:returntype", Promise)
], TypePatatoeResolver.prototype, "patatoeCreate", null);
__decorate([
    Mutation(() => TypePatatoe),
    __param(0, Arg("update")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TypePatatoeInput]),
    __metadata("design:returntype", Promise)
], TypePatatoeResolver.prototype, "patatoeUpdate", null);
TypePatatoeResolver = __decorate([
    Resolver(TypePatatoe)
], TypePatatoeResolver);
export { TypePatatoeResolver };
//# sourceMappingURL=TypePatatoeResolvers.js.map