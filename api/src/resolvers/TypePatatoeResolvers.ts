import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  TypePatatoe  from "../entity/TypePatatoe.js";
import { TypePatatoeInput } from "../input/TypePatatoeInput.js";


@Resolver(TypePatatoe)
export class TypePatatoeResolver{

   @Query(()=> [TypePatatoe])
   async getAllTypePatatoe(){
      let patatoe = new TypePatatoe()
      return await patatoe.findTypePatatoesAll()
   }

   @Query(()=> TypePatatoe)
   async patatoe( @Arg('patatoeId')patatoeId: number){
      let patatoe = new TypePatatoe()
      patatoe.id= patatoeId
      return await patatoe.findTypePatatoe()
   }

   @Mutation(()=> TypePatatoe) 
   async patatoeCreate(@Arg("create") create: TypePatatoeInput ){
      let patatoe: TypePatatoe | null =new TypePatatoe(create)
      if(await patatoe.findTypePatatoe()==null){
	 await patatoe.createTypePatatoe()
	 return await patatoe.findTypePatatoe()

      }else{
	 return null
      }
   }
   @Mutation(() => TypePatatoe)
   async patatoeUpdate(@Arg("update") update: TypePatatoeInput ){
      let patatoe: TypePatatoe | null =new TypePatatoe(update)
	 await patatoe.createTypePatatoe()
	 return await patatoe.findTypePatatoe()
   }

}
