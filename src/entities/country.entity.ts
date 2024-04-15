import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Field, ID, InputType, ObjectType } from 'type-graphql';


@ObjectType()
@Entity()
export class Country {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continent: string;
}

@InputType()
export class CreateCountryInput {

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  continent: string;

  @Field()
  emoji: string;

}

@InputType()
export class UpdateCountryInput {
  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  continent: string;

  @Field()
  emoji: string;

}