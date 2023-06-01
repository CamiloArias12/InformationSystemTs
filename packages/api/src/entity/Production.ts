import { Field, ObjectType } from 'type-graphql';
import {Repository, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from 'typeorm';
import type { Relation } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import type { IProduction } from '../interfaces/IProduction.js';
import Seed from './Seed.js';

@ObjectType("Production")
@Entity()
export default class Production  implements IProduction{

   private repository: Repository<Production>

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({unique:true, type:'date'})
  date: Date;

   @Field()
   @Column()
   production:number

   @ManyToOne(() => Seed, (seed) => seed.productions)
      seed:Relation <Seed>;



   constructor(params?: IProduction){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Production)
   }


   async createProduction(): Promise <void>{
       await this.repository.save(this);
   }

   async findProduction(): Promise <Production| null>{
      return await this.repository.findOneBy({id: this.id});
   }
   async findProductions(): Promise <Production[]| null>{
      return await this.repository.find();
   }


}

