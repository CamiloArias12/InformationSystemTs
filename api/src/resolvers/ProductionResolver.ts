import { Resolver, Query,Mutation, Arg, UseMiddleware } from "type-graphql";
import  Production from "../entity/Production.js";
import {GraphQLError}from "graphql"
import { ProductionInput } from "../input/ProductionInput.js";
import  Seed  from "../entity/Seed.js";


@Resolver(Production)
export class ProductionResolver{

   @Query(()=> [Production])
   async getAllProduction(){
      let production= new Production()
      return await production.findProductions()
   }

   @Query(()=> Production)
   async production( @Arg('lotId')lotId: number){
      let production = new Production()
      production.id= lotId
      return await production.findProduction()
   }

   @Mutation(()=> Production) 
   async productionCreate(@Arg("create") create: ProductionInput,  ){
       let seed =new Seed()
       seed.id=create.seed
       let production =new Production(create)
       production.seed=seed
	 await production.createProduction()
       return  await production.findProduction()
   }

}
