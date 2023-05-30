import { InputType, Field, } from "type-graphql";
import { ITypePatatoe } from "../interfaces/ITypePatatoe.js";

@InputType()
export class TypePatatoeInput implements ITypePatatoe {

  @Field()
  name: string;

  @Field()
  description: string;

}

