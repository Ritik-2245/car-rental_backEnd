import { Field, InputType } from "@nestjs/graphql";
import { Max, Min } from "class-validator";

@InputType()
export class NewCarInput{


     @Field()
     name:string;

     @Field()
     @Max(10000)
     @Min(100,{message:"dailyPrice can't be less than 100."})
     dailyPrice:number;

     @Field()
     monthlyPrice:number;
    
     @Field()
     mileage:string;
     
     @Field()
     gas:string;

     @Field()
     gearType:string;

     @Field()
     thumbnailUrl:string;

}