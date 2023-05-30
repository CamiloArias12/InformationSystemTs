import { Field, ObjectType } from 'type-graphql';
import {Repository, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne} from 'typeorm';
import type { Relation } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import type { ISeed } from '../interfaces/ISeed.js';
import  TypePatatoe  from './TypePatatoe.js';
import  Lot  from './Lot.js';
import Production from './Production.js';

@ObjectType("Seed")
@Entity()
export default class Seed  implements ISeed{

   private repository: Repository<Seed>

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  date: Date;

   @ManyToOne(() => Lot, (lot) => lot.seeds)
   lot:Relation <Lot>;

    @ManyToOne(() => TypePatatoe, (patatoe) => patatoe.seeds)
      patatoe:Relation <TypePatatoe>;

    @OneToMany(() => Production, (production) => production.seed)
    productions: Relation<Production>[]


   constructor(params?: ISeed){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(Seed)
   }


   async createSeed(): Promise <void>{
       await this.repository.save(this);
   }

   async findSeed(): Promise <Seed| null>{
      return await this.repository.findOneBy({id: this.id});
   }
   async findSeeds(): Promise <Seed[]| null>{
      return await this.repository.find();
   }


}

