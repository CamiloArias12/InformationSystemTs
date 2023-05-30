import { InputType, Field, FieldResolver, } from "type-graphql";
import  { ISeed } from "../interfaces/ISeed.js";

@InputType()

export class SeedInput implements ISeed {
     @Field()
     date: Date;

     @Field()
     patatoe:number

     @Field()
     lot:number
}
