import { Module } from "@nestjs/common";
import { CarsModule } from "./cars.module";

@Module({
    imports:[CarsModule]
})

export class ComponentModule{}