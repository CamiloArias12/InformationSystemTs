import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Repository, OneToMany, ManyToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import  Seed  from './Seed.js';
import type { ILot } from '../interfaces/ILot.js';
import { AppDataSource } from '../data-source.js';
import { Field, ObjectType } from 'type-graphql';
import  Agriculturist  from './Agriculturist.js';
import Department from './Department.js';
import Municipality from './Municipality.js';

@ObjectType("Lot")
@Entity()
export default class Lot implements ILot{

   private repository: Repository<Lot>
  @Field() 
  @PrimaryGeneratedColumn()
  id: number;
 
  @Field()
  @Column()
  name: string;



  @Field()
  @Column()
   width: number;

  @Field()
  @Column()
  long: number; 

  @Field()
  @Column()
  postalCode: number;

   @ManyToOne(() => Agriculturist, (agriculturist) => agriculturist.lots)
   agriculturist:Relation <Agriculturist>;

   @OneToMany(() => Seed, (seed) => seed.lot)
    seeds: Relation<Seed>[]
   
    @ManyToOne(() => Department, (department) => department.lots)
   department:Relation <Department>;

   @ManyToOne(() => Municipality, (municipality) => municipality.lots)
   municipality:Relation <Municipality>;


   constructor(params?: ILot){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Lot)
   }


   async createLot(): Promise <Lot| null>{
       try {
    await this.repository.save(this);
    return this.findLot()
    console.log("Lot saved successfully");
  } catch (error) {
    console.error("Error saving lot:", error);
    return null;
  }
}

   async findLot(): Promise <|Lot | null>{
      return await this.repository.findOneBy({id: this.id});
      
   }

   async findLotAgriculturist():Promise<Lot[] | null>{

      return await this.repository.find(
	 {
	    where:{
	       agriculturist:{
		     identification:this.agriculturist.identification
	       } 
	    }
	 }
      )
   }

    async findLots(): Promise <Lot[] | null>{
      return await this.repository.find();
      }

   

}

