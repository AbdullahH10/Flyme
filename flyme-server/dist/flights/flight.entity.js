"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
const typeorm_1 = require("typeorm");
let Flight = class Flight {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Flight.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20 }),
    __metadata("design:type", String)
], Flight.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { length: 20 }),
    __metadata("design:type", String)
], Flight.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Flight.prototype, "flightid", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamptz'),
    __metadata("design:type", Date)
], Flight.prototype, "depart", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamptz'),
    __metadata("design:type", Date)
], Flight.prototype, "arrive", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], Flight.prototype, "nonstop", void 0);
Flight = __decorate([
    (0, typeorm_1.Entity)()
], Flight);
exports.Flight = Flight;
//# sourceMappingURL=flight.entity.js.map