import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('matriks_karyawan')
export class MatriksKaryawan {
    @PrimaryGeneratedColumn()
    id_karyawan: number;

    @Column()
    nama: string;

    @Column({ default: false })
    biodata: boolean;

    @Column( { default: false })
    keluarga_karyawan: boolean;

    @Column( { default: false })
    tempat_tinggal: boolean;

    @Column( { default: false })
    status_pernikahan: boolean;

    @Column( { default: false })
    kartu_identitas: boolean;

    @Column( { default: false })
    pendidikan: boolean;

    @Column({ default: false  })
    bahasa: boolean;

    @Column({ default : false})
    saudara_karyawan: boolean;

    @Column( { default: false })
    training: boolean;

    @Column( { default : false })
    rekening: boolean;

    @Column( { default : false})
    pengalaman: boolean;

    @Column( { default : false})
    tunjangan: boolean;

    @Column( { default : false})
    status_karyawan: boolean

    @Column( { default : false})
    masa_jabatan: boolean;

    @Column( { default : false})
    beasiswa: boolean;

    @Column( { default : false})
    fingerprint: boolean;

    @Column( { default : false})
    peringatan: boolean;

}
