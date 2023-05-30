import { InputType, Field, } from "type-graphql";
import { IDepartment } from "../interfaces/IDepartment.js";

@InputType()
export class DepartmentInput implements IDepartment {

  @Field()
  name: string;

}

