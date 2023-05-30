import { Resolver, Query,Mutation, Arg, Int, Args } from "type-graphql";
import  Seed  from "../entity/Seed.js";
import {GraphQLError}from "graphql"
import { SeedInput} from "../input/SeedInput.js";
import  TypePatatoe  from "../entity/TypePatatoe.js";
import Lot from "../entity/Lot.js";


@Resolver(Seed)
export class SeedResolver{
   

   @Query(()=> Seed)
   async getSeed(@Arg('idSeed' )idSeed:number){
      let seed = new Seed()
      seed.id=idSeed
      return await seed.findSeed()
   }

   @Query(()=> [Seed])
   async getAllSeed(){
      let seed = new Seed()
      return await seed.findSeeds()
   }


   @Mutation(() => Seed, { nullable: true })
   async seedCreate(@Arg("create") create: SeedInput,
		   ) {
      let seed: Seed | null = new Seed(create);
      let patatoe=new TypePatatoe()
      let lot= new Lot()
      lot.id=create.lot
      patatoe.id=create.patatoe
      
      seed.lot=lot
      seed.patatoe=patatoe

      await seed.createSeed();
      return await seed.findSeed();
   }

}
