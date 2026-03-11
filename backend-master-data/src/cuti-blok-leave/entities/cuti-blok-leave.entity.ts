import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cuti_block_leave')
export class CutiBlokLeave {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    deskripsi: string;

    @Column({ name: 'jumlah_hari' })
    jumlah_hari: number;

    @Column({ type: 'date', name: 'tanggal_efektif' }) // Tambahkan type: 'date'
    tanggal_efektif: Date;
}