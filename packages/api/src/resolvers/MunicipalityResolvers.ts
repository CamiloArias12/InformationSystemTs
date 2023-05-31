import { Resolver, Query,Mutation, Arg } from "type-graphql";
import Department from "../entity/Department.js";
import  Municipality  from "../entity/Municipality.js";
import { MunicipalityInput } from "../input/MunicipalityInput.js";


@Resolver(Municipality)
export class MunicipalityResolver{

   @Query(()=> [Municipality])
   async getAllMunicipality(){
      console.log("Municipalitys")
      let municipality = new Municipality()
      return await municipality.findMunicipalities()
   }

   @Query(()=> Municipality)
   async municipality( @Arg('municipalityId')municipalityId: number){
      let municipality = new Municipality()
      municipality.id= municipalityId
      return await municipality.findMunicipality()
   }

   @Mutation(()=> Municipality) 
   async municipalityCreate(@Arg("create") create: MunicipalityInput ){
      let municipality: Municipality | null =new Municipality(create)
      let department:Department |null= new Department(create)
      department.id=create.deparment
	 municipality.department= department 

      await municipality.createMunicipality()

	 return await municipality.findMunicipality()
   }

}
