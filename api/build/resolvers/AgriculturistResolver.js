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
import Agriculturist from "../entity/Agriculturist.js";
import { AgriculturistInput, AgriculturistLoginInput } from "../input/AgriculturistInput.js";
let AgriculturistResolver = class AgriculturistResolver {
    async agriculturists(agriculturistId) {
        let agriculturist = new Agriculturist();
        console.log("asjkfasdkjf");
        agriculturist.identification = agriculturistId;
        return await agriculturist.findAgriculturist() ?? null;
    }
    async agriculturistsAll() {
        let agriculturist = new Agriculturist();
        let data = agriculturist.findAgriculturistAll();
        return data;
    }
    async agriculturistCreate(create) {
        console.log("Hello");
        const agriculturist = new Agriculturist(create);
        if (await agriculturist.findAgriculturist() === null) {
            await agriculturist.createAgriculturist();
            return await agriculturist.findAgriculturist();
        }
        else {
            return null;
        }
    }
    async agriculturistUpdate(update) {
        const agriculturist = new Agriculturist(update);
        return await agriculturist.createAgriculturist();
    }
    async agriculturistValidate(agriculturistInput) {
        console.log(agriculturistInput);
        const agriculturist = new Agriculturist();
        agriculturist.email = agriculturistInput.email;
        agriculturist.password = agriculturistInput.password;
        const validateAgriculturist = await agriculturist.validateAgriculturist();
        console.log(agriculturistInput);
        console.log(validateAgriculturist);
        return validateAgriculturist;
    }
};
__decorate([
    Query(() => Agriculturist),
    __param(0, Arg('agriculturistId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AgriculturistResolver.prototype, "agriculturists", null);
__decorate([
    Query(() => [Agriculturist]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgriculturistResolver.prototype, "agriculturistsAll", null);
__decorate([
    Mutation(() => Agriculturist),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AgriculturistInput]),
    __metadata("design:returntype", Promise)
], AgriculturistResolver.prototype, "agriculturistCreate", null);
__decorate([
    Mutation(() => Agriculturist),
    __param(0, Arg("update")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AgriculturistInput]),
    __metadata("design:returntype", Promise)
], AgriculturistResolver.prototype, "agriculturistUpdate", null);
__decorate([
    Mutation(() => Agriculturist),
    __param(0, Arg("validationAgriculturist")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AgriculturistLoginInput]),
    __metadata("design:returntype", Promise)
], AgriculturistResolver.prototype, "agriculturistValidate", null);
AgriculturistResolver = __decorate([
    Resolver(Agriculturist)
], AgriculturistResolver);
export { AgriculturistResolver };
//# sourceMappingURL=AgriculturistResolver.js.map