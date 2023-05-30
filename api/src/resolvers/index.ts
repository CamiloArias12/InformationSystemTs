import {AgriculturistResolver} from "./AgriculturistResolver.js";
import {TypePatatoeResolver} from "./TypePatatoeResolvers.js";
import {SeedResolver} from "./SeedResolvers.js";
import {LotResolver} from "./LotResolver.js";
import { NonEmptyArray } from "type-graphql";
import { DepartmentResolver } from "./DepartmentResolvers.js";
import { MunicipalityResolver } from "./MunicipalityResolvers.js";
import { ProductionResolver } from "./ProductionResolver.js";


const resolvers : NonEmptyArray<any>=[
   LotResolver,
   SeedResolver,
   TypePatatoeResolver,
   AgriculturistResolver,
   ProductionResolver,
   DepartmentResolver,
   MunicipalityResolver

]

export {resolvers}
