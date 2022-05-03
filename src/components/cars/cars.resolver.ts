import { InternalServerErrorException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { carsService } from "./cars.service";
import { NewCarInput } from "./dto/new-car.input";
import { Car } from "./entities/cars";

@Resolver()
export class CarsResolver{
    constructor( private carsService:carsService){

    }

    @Query(returns =>[Car])
    public async cars():Promise<Car[]>{
        return await this.carsService.getAllCars().catch
        (err=>{throw err;})
    }


    @Mutation(returns =>Car)
    public async addNewCar(@Args("newCarData") newCarData:NewCarInput):Promise<Car>{
   return await this.carsService.addCar(newCarData).catch(err=>{throw err;})
    }
}