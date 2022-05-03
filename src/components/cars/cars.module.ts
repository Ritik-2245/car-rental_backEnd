import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarsResolver } from "./cars.resolver";
import { carsService } from "./cars.service";
import { Car } from "./entities/cars";

@Module({
    imports:[TypeOrmModule.forFeature([Car])],
    providers:[carsService,CarsResolver],
    exports:[carsService]
})

export class CarsModule{
    constructor(){

    }
}