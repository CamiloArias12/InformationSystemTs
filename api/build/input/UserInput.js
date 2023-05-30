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
let UserInput = class UserInput {
    id;
    firstName;
    lastName;
    phone;
    address;
    email;
    password;
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], UserInput.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "firstName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "lastName", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "phone", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "address", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
UserInput = __decorate([
    InputType()
], UserInput);
export { UserInput };
let UserLoginInput = class UserLoginInput {
    id;
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
], UserLoginInput.prototype, "email", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], UserLoginInput.prototype, "password", void 0);
UserLoginInput = __decorate([
    InputType()
], UserLoginInput);
export { UserLoginInput };
let UserUpdateAdmin = class UserUpdateAdmin {
    id;
    isActive;
    rol;
};
__decorate([
    Field(),
    __metadata("design:type", Number)
], UserUpdateAdmin.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], UserUpdateAdmin.prototype, "isActive", void 0);
__decorate([
    Field(),
    __metadata("design:type", Boolean)
], UserUpdateAdmin.prototype, "rol", void 0);
UserUpdateAdmin = __decorate([
    InputType()
], UserUpdateAdmin);
export { UserUpdateAdmin };
//# sourceMappingURL=UserInput.js.map