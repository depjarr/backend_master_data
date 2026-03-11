import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PengurangKompetenKinerja } from 'src/pengurang-kompeten-kinerja/entities/pengurang-kompeten-kinerja.entity';

@Entity('kategori_peringatan')
export class KategoriPeringatan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  deskripsi: string; 

  @Column({ nullable: true })
  masa_berlaku: number;

  @Column()
  pengurang: number; 

  @Column({ type: 'date' })
  tanggal_efektif: string; 

  @ManyToOne(
    () => PengurangKompetenKinerja, 
    (pkk) => pkk.kategoriPeringatan
  )
  @JoinColumn({ name: 'id_pengurang_kompoten' }) 
  pengurangKompetenKinerja: PengurangKompetenKinerja;

  @Column()
  id_pengurang_kompoten: number; 
}