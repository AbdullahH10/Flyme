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
exports.FlightsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const flight_entity_1 = require("./flight.entity");
let FlightsService = class FlightsService {
    constructor(flightRepository) {
        this.flightRepository = flightRepository;
    }
    async findAll() {
        return this.flightRepository.find();
    }
    async findOne(id) {
        return this.flightRepository.findOne(id);
    }
    async getFlightOrigins() {
        return this.flightRepository.query('SELECT DISTINCT origin FROM flight');
    }
    async getFlightDestinations() {
        return this.flightRepository.query('SELECT DISTINCT destination FROM flight');
    }
    async createFlight(flight) {
        return await this.flightRepository.save(flight);
    }
    async readFlight(orig, dest) {
        return await this.flightRepository.find({ origin: orig, destination: dest });
    }
    async updateFlight(flight) {
        return await this.flightRepository.update(flight.id, flight);
    }
    async deleteFlight(id) {
        return this.flightRepository.delete(id);
    }
};
FlightsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flight_entity_1.Flight)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlightsService);
exports.FlightsService = FlightsService;
//# sourceMappingURL=flights.service.js.map