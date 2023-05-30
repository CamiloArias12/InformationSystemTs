import { Field, ObjectType } from "type-graphql"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Repository, PrimaryColumn, ManyToOne, } from "typeorm"
import { AppDataSource } from "../data-source.js"
import  type { IAgriculturist } from "../interfaces/IAgriculturist.js"
import Department from "./Department.js"
import  Lot from "./Lot.js"
import type { Relation } from 'typeorm';
import Municipality from "./Municipality.js"

@ObjectType("Agriculturist")
@Entity()

export default  class Agriculturist implements IAgriculturist{
   private repository: Repository<Agriculturist>

    @Field()
    @PrimaryColumn()
    identification: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column()
    phone:string

    @Field()
    @Column()
    address:string

    @Field()
    @Column({unique: true})
    email:string
   
    @Field()
    @Column()
    password: string

    @OneToMany(() => Lot, (lot) => lot.agriculturist)
    lots: Relation<Lot>[]


   @ManyToOne(() => Department, (department) => department.agriculturist)
   department:Relation <Department>;


   @ManyToOne(() => Municipality, (municipality) => municipality.agriculturists)
   municipality:Relation <Municipality>;



   constructor(params?: IAgriculturist){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Agriculturist)
   }


   async createAgriculturist(): Promise <Agriculturist | null>{
       return await this.repository.save(this);
   }

   async findAgriculturist(): Promise <Agriculturist | null>{
      return await this.repository.findOneBy({identification: this.identification});
   }
   
   async findAgriculturistAll(): Promise<Agriculturist[] | null> {

      try {
	 return await this.repository.find();
      } catch (error) {
	 console.error('Error fetching agriculturists:', error);
      return null;
      }
   }

   async validateAgriculturist():Promise <Agriculturist | null> {
      const agriculturist= await this.repository.findOneBy({email:this.email ,password :this.password })
      return agriculturist ;
   }

}

