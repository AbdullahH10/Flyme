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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightsController = void 0;
const flights_service_1 = require("./flights.service");
const flight_entity_1 = require("./flight.entity");
const common_1 = require("@nestjs/common");
let FlightsController = class FlightsController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    findAll() {
        return this.flightService.findAll();
    }
    findOne(param) {
        return this.flightService.findOne(param.id);
    }
    getOrigins() {
        return this.flightService.getFlightOrigins();
    }
    getDestinations() {
        return this.flightService.getFlightDestinations();
    }
    async createFlight(flight) {
        return this.flightService.createFlight(flight);
    }
    async readFlight(orig, dest) {
        return this.flightService.readFlight(orig, dest);
    }
    async updateFlight(id, flight) {
        flight.id = Number(id);
        return this.flightService.updateFlight(flight);
    }
    async deleteFlight(id) {
        return this.flightService.deleteFlight(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/:id/"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/cities/origins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getOrigins", null);
__decorate([
    (0, common_1.Get)('/cities/destinations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "getDestinations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flight_entity_1.Flight]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "createFlight", null);
__decorate([
    (0, common_1.Get)('/query/:orig/:dest/'),
    __param(0, (0, common_1.Param)('orig')),
    __param(1, (0, common_1.Param)('dest')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "readFlight", null);
__decorate([
    (0, common_1.Post)('/:id/update/'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, flight_entity_1.Flight]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "updateFlight", null);
__decorate([
    (0, common_1.Post)('/:id/delete/'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FlightsController.prototype, "deleteFlight", null);
FlightsController = __decorate([
    (0, common_1.Controller)('flights'),
    __metadata("design:paramtypes", [flights_service_1.FlightsService])
], FlightsController);
exports.FlightsController = FlightsController;
//# sourceMappingURL=flights.controller.js.map