var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { InputType, Field, } from "type-graphql";
let BookInput = class BookInput {
    id;
    title;
    publisher;
    area;
    summary;
};
__decorate([
    Field({ nullable: true }),
    __metadata("design:type", Number)
], BookInput.prototype, "id", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], BookInput.prototype, "title", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], BookInput.prototype, "publisher", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], BookInput.prototype, "area", void 0);
__decorate([
    Field(),
    __metadata("design:type", String)
], BookInput.prototype, "summary", void 0);
BookInput = __decorate([
    InputType()
], BookInput);
export { BookInput };
//# sourceMappingURL=BookInput.js.map