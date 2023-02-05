import { Univercite } from 'src/univercite/entities/univercite.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mail: string;

  @Column()
  name: string;

  @Column()
  prenom: string;

  @Column()
  password: string;

  @Column()
  naissence_etud: string;

  @Column()
  niveau: string;

  @ManyToOne(() => Univercite, (univercite) => univercite.users)
  univercite: Univercite;
}
