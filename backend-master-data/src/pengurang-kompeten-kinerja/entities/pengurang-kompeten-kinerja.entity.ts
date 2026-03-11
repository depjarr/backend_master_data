import { KategoriPeringatan } from 'src/kategori-peringatan/entities/kategori-peringatan.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity('pengurang_kompeten_kinerja')
export class PengurangKompetenKinerja {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    deskripsi: string;

    @OneToMany(() => KategoriPeringatan, (kategoriPeringatan) => kategoriPeringatan.pengurangKompetenKinerja)
    kategoriPeringatan: KategoriPeringatan[]
}
