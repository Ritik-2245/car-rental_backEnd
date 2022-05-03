import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Car } from "./entities/cars";
import { NewCarInput } from "./dto/new-car.input";

@Injectable()

export class carsService{

    constructor(@InjectRepository(Car) private carRepository:Repository<Car>){

    }

    public async getAllCars():Promise<Car[]>{

        const cars=await this.carRepository.find({}).catch(err=>{throw new InternalServerErrorException()});

        if(!cars)
        return [];
        return cars;
    }

    public async addCar(newCarData:NewCarInput):Promise<Car>{
        const newCar=this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch(err=>
            new InternalServerErrorException())
    
    return newCar;
        }


}


