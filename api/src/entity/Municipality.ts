import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Repository, PrimaryColumn, ManyToOne} from "typeorm"
import { AppDataSource } from "../data-source.js"
import  type { IMunicipality } from "../interfaces/IMunicipality.js"
import Agriculturist from "./Agriculturist.js"
import type { Relation } from 'typeorm';
import Department from "./Department.js"
import Lot from "./Lot.js"

@ObjectType("Municipality")
@Entity()

export default  class Municipality implements IMunicipality{
   private repository: Repository<Municipality>

    @Field()
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    name: string



   @OneToMany(() => Agriculturist, (agriculturist) => agriculturist.department)
    agriculturists: Relation<Agriculturist>[]

   @ManyToOne(() => Department, (department) => department.municipality)
   department:Relation <Department>;

    @OneToMany(() => Lot, (lot) => lot.department)
    lots: Relation<Lot>[]


  

   constructor(params?: IMunicipality){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Municipality)
   }


   async createMunicipality(): Promise <Municipality | null>{
       return await this.repository.save(this);
   }

   async findMunicipality(): Promise <Municipality | null>{
      return await this.repository.findOneBy({id: this.id});
   }
   

}

