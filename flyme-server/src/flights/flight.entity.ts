import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 20 })
  origin: string;

  @Column("varchar", { length: 20 })
  destination: string;

  @Column('int')
  flightid: number;

  @Column('timestamptz')
  depart: Date;

  @Column('timestamptz')
  arrive: Date;

  @Column('boolean')
  nonstop: boolean;
}