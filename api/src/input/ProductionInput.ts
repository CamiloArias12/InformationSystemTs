import { InputType, Field, FieldResolver, } from "type-graphql";
import  { IProduction } from "../interfaces/IProduction.js";

@InputType()

export class ProductionInput implements IProduction {
     @Field()
     date: Date;

     @Field()
     production: number;

     @Field()
     seed:number
   

}
