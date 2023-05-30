import { Field, InputType } from "type-graphql";
import { IAgriculturist } from "../interfaces/IAgriculturist.js";


@InputType()
export class AgriculturistInput implements IAgriculturist{

   @Field()
   identification: number

   @Field()
   firstName:string

   @Field()
   lastName:string
   
   @Field()
   phone:string
   
   @Field()
   address:string
   
   @Field()
   email:string

   @Field()
   password: string

   @Field()
   department:number

   @Field()
   municipality:number

}
@InputType()
export class AgriculturistUpdateInput implements IAgriculturist{

   identification: number

   @Field()
   firstName:string

   @Field()
   lastName:string
   
   @Field()
   phone:string
   
   @Field()
   address:string
   
   @Field()
   email:string

   @Field()
   password: string

   @Field()
   department:number

   @Field()
   municipality:number

}

@InputType()
export class AgriculturistLoginInput implements IAgriculturist{


   identification: number;

   firstName:string

   lastName:string
   
   phone:string
   
   address:string
   
   @Field()
   email:string

   @Field()
   password: string

}




