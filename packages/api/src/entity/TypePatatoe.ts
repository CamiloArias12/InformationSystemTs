import { Field, ObjectType } from 'type-graphql';
import {Repository, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, In } from 'typeorm';
import { AppDataSource } from '../data-source.js';
import type { ITypePatatoe } from '../interfaces/ITypePatatoe.js';
import  Seed  from './Seed.js';
import type { Relation } from 'typeorm';

@ObjectType("TypePatatoe")
@Entity()
export default class TypePatatoe {
   private repository: Repository<TypePatatoe>
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

   @OneToMany(() => Seed, (seed) => seed.patatoe)
    seeds: Relation<Seed>[]


   constructor(params?: ITypePatatoe){
      Object.assign(this,params)
      this.repository =AppDataSource.getRepository(TypePatatoe)
   }


   async createTypePatatoe(): Promise <void>{
       await this.repository.save(this);
   }

   async findTypePatatoe(): Promise <TypePatatoe | null>{
      return await this.repository.findOneBy({id: this.id});
   }

    async findTypePatatoesAll(): Promise <TypePatatoe[] | null>{
      return await this.repository.find();
   }


}

