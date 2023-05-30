import { Resolver, Query,Mutation, Arg, UseMiddleware } from "type-graphql";
import  Lot from "../entity/Lot.js";
import {GraphQLError}from "graphql"
import { LotInput } from "../input/LotInput.js";
import  Agriculturist  from "../entity/Agriculturist.js";
import  Seed  from "../entity/Seed.js";


@Resolver(Lot)
export class LotResolver{

   @Query(()=> [Lot])
   async getAllLot(){
      let lot= new Lot()
      return await lot.findLots()
   }

   @Query(()=> Lot)
   async lot( @Arg('lotId')lotId: number){
      let lot = new Lot()
      lot.id= lotId
      return await lot.findLot()
   }

   @Mutation(()=> Lot) 
   async lotCreate(@Arg("create") create: LotInput,  ){
       let agriculturist =new Agriculturist()
       let lot =new Lot(create)
       agriculturist.identification=create.agriculturist
	 await lot.createLot()
       return  await lot.findLot()
   }

}
