import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Repository, PrimaryColumn} from "typeorm"
import { AppDataSource } from "../data-source.js"
import  type { IDepartment } from "../interfaces/IDepartment.js"
import Agriculturist from "./Agriculturist.js"
import type { Relation } from 'typeorm';
import Municipality from "./Municipality.js"
import Lot from "./Lot.js"

@ObjectType("Department")
@Entity()

export default  class Department implements IDepartment{
   private repository: Repository<Department>

    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column({unique:true})
    name: string

 
    @OneToMany(() =>Municipality , (municipality) => municipality.department)
    municipality: Relation<Municipality>[]

  @OneToMany(() => Agriculturist, (agriculturist) => agriculturist.department)
    agriculturist: Relation<Agriculturist>[]

    @OneToMany(() => Lot, (lot) => lot.department )
    lots: Relation<Lot>[]



   constructor(params?: IDepartment){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Department)
   }


   async createDepartment(): Promise <Department | null>{
       return await this.repository.save(this);
   }

   async findDepartment(): Promise <Department | null>{
      return await this.repository.findOneBy({id: this.id});
   }
      async findDepartments(): Promise <Department[]| null>{
      return await this.repository.find();
   }



}

