import { Resolver, Query,Mutation, Arg } from "type-graphql";
import  Department  from "../entity/Department.js";
import { DepartmentInput } from "../input/DepartmentInput.js";


@Resolver(Department)
export class DepartmentResolver{

   @Query(()=> [Department])
   async getAllDepartment(){
      let department = new Department()
      return await department.findDepartments()
   }

   @Query(()=> Department)
   async department( @Arg('departmentId')departmentId: number){
      let department = new Department()
      department.id= departmentId
      return await department.findDepartment()
   }

   @Mutation(()=> Department) 
   async departmentCreate(@Arg("create") create: DepartmentInput ){
      let department: Department | null =new Department(create)
	 await department.createDepartment()
	 
	 return department.findDepartment()

   }

}
