import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('jenis_dokumen')

export class JenisDokumen {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 255})
    deskripsi: string;

    @Column({type: 'boolean', default: true})
    isActive: boolean;

}
