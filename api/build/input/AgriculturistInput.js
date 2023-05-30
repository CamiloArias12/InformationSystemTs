var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, InputType } from "type-graphql";
let AgriculturistInput = class AgriculturistInput {
    identification;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
    department;
    municipality;
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], AgriculturistInput.prototype, "identification", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "phone", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "address", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistInput.prototype, "password", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], AgriculturistInput.prototype, "department", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], AgriculturistInput.prototype, "municipality", void 0);
AgriculturistInput = __decorate([
    InputType()
], AgriculturistInput);
export { AgriculturistInput };
let AgriculturistUpdateInput = class AgriculturistUpdateInput {
    identification;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
    department;
    municipality;
};
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "phone", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "address", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistUpdateInput.prototype, "password", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], AgriculturistUpdateInput.prototype, "department", void 0);
__decorate([
    Field(),
    __metadata("design:type", Number)
], AgriculturistUpdateInput.prototype, "municipality", void 0);
AgriculturistUpdateInput = __decorate([
    InputType()
], AgriculturistUpdateInput);
export { AgriculturistUpdateInput };
let AgriculturistLoginInput = class AgriculturistLoginInput {
    identification;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
};
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistLoginInput.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], AgriculturistLoginInput.prototype, "password", void 0);
AgriculturistLoginInput = __decorate([
    InputType()
], AgriculturistLoginInput);
export { AgriculturistLoginInput };
//# sourceMappingURL=AgriculturistInput.js.map