import { InputType, Field, } from "type-graphql";
import { IMunicipality } from "../interfaces/IMunicipality.js";

@InputType()
export class MunicipalityInput implements IMunicipality {

  @Field()
  name: string;

   @Field()
   deparment: number;


}

