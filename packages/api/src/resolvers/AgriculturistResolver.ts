import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  Agriculturist  from "../entity/Agriculturist.js";
import {GraphQLError}from "graphql"
import { AgriculturistInput, AgriculturistLoginInput } from "../input/AgriculturistInput.js";


@Resolver(Agriculturist)
export class AgriculturistResolver{

   @Query(()=> Agriculturist)
   async agriculturists( @Arg('agriculturistId')agriculturistId: number){
      let agriculturist = new Agriculturist()
      console.log("asjkfasdkjf")
      agriculturist.identification= agriculturistId
      return await agriculturist.findAgriculturist() ?? null
   }

   @Query(()=>[ Agriculturist])
   async agriculturistsAll( ){
      let agriculturist = new Agriculturist()
      let data= agriculturist.findAgriculturistAll()
      return data
   }


   @Mutation(()=> Agriculturist) 
   async agriculturistCreate(@Arg("create") create: AgriculturistInput ){
      console.log("Hello")
      const agriculturist: Agriculturist | null =new Agriculturist(create)
      if(await agriculturist.findAgriculturist()===null){
	 await agriculturist.createAgriculturist()
	 return await agriculturist.findAgriculturist()
      }else{
	 return null;
      }

   }

   @Mutation(()=> Agriculturist) 
   async agriculturistUpdate(@Arg("update") update: AgriculturistInput ): Promise<Agriculturist | null>{
      const agriculturist: Agriculturist | null =new Agriculturist(update)
	return await agriculturist.createAgriculturist()
      }


   @Mutation(()=> Agriculturist) 
   async agriculturistValidate(@Arg("validationAgriculturist") agriculturistInput: AgriculturistLoginInput ):Promise <Agriculturist | null>{
      console.log(agriculturistInput)
      const agriculturist: Agriculturist | null =new Agriculturist()
      agriculturist.email= agriculturistInput.email
      agriculturist.password=agriculturistInput.password
      
      const validateAgriculturist= await agriculturist.validateAgriculturist()
      console.log(agriculturistInput)
      console.log(validateAgriculturist)

      return validateAgriculturist 

   }


}
