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
import Department from "../entity/Department.js";
import Municipality from "../entity/Municipality.js";
import { MunicipalityInput } from "../input/MunicipalityInput.js";
let MunicipalityResolver = class MunicipalityResolver {
    async getAllMunicipality() {
        let municipality = new Municipality();
        return await municipality.findMunicipality();
    }
    async municipality(municipalityId) {
        let municipality = new Municipality();
        municipality.id = municipalityId;
        return await municipality.findMunicipality();
    }
    async municipalityCreate(create) {
        let municipality = new Municipality(create);
        let department = new Department(create);
        department.id = create.deparment;
        municipality.department = department;
        await municipality.createMunicipality();
        return await municipality.findMunicipality();
    }
};
__decorate([
    Query(() => [Municipality]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MunicipalityResolver.prototype, "getAllMunicipality", null);
__decorate([
    Query(() => Municipality),
    __param(0, Arg('municipalityId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MunicipalityResolver.prototype, "municipality", null);
__decorate([
    Mutation(() => Municipality),
    __param(0, Arg("create")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MunicipalityInput]),
    __metadata("design:returntype", Promise)
], MunicipalityResolver.prototype, "municipalityCreate", null);
MunicipalityResolver = __decorate([
    Resolver(Municipality)
], MunicipalityResolver);
export { MunicipalityResolver };
//# sourceMappingURL=MunicipalityResolvers.js.map