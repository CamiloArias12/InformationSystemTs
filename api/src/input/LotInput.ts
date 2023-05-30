import { InputType, Field, FieldResolver, } from "type-graphql";
import type { ILot } from "../interfaces/ILot.js";

@InputType()
export class LotInput implements ILot {

  @Field()
   width: number; 

  @Field()
   long: number;

  @Field()
   postalCode: number;


   @Field()
   agriculturist: number
}
