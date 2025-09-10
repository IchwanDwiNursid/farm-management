import { DB } from "@/config/database"
import { convertDecimalToPlainObject } from "@/utils/converterDesimal";
import { endOfMonth, format, startOfMonth } from "date-fns";

export const getAllAyam = async () => {
    const rawData = await DB.$queryRaw`
        SELECT 
            a.id,
            a.nama,
            a.jumlah,
            a.obat,
            a.pakan,
            a.gambar,
            DATE_FORMAT(a.createdAt, '%Y-%m-%d') AS createdAt,
            DATE_FORMAT(jv.tanggal, '%Y-%m-%d') AS tanggal_vaksin_terakhir,
            COALESCE(SUM(m.jumlah), 0) AS jumlah_mortalitas,
            v.nama AS nama_vaksin
        FROM ayam a
        LEFT JOIN (
            SELECT *
            FROM jadwal_vaksinasi jv1
            WHERE jv1.sudah = 1
        ) jv ON jv.id = (
            SELECT jv2.id
            FROM jadwal_vaksinasi jv2
            WHERE jv2.ayamId = a.id AND jv2.sudah = 1
            ORDER BY jv2.tanggal DESC
            LIMIT 1
        )
        LEFT JOIN mortalitas m ON m.ayamId = a.id
        LEFT JOIN vaksin v ON v.id = jv.vaksinId
        WHERE a.deleted = 0
        GROUP BY 
            a.id, a.nama, a.jumlah, a.createdAt,a.gambar,a.obat,a.pakan,
            jv.tanggal, v.nama
        ORDER BY a.updatedAt DESC;
    `;
    return convertDecimalToPlainObject(rawData);
}

export const getAllVaksin = async () => {
    const res = await DB.vaksin.findMany({
        where: {
            deleted: false
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res
}

export const getAllPakan = async () => {
    const res = await DB.pakan.findMany({
        where: {
            deleted: false
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res
}

export const getAllObat = async () => {
    const res = await DB.obat.findMany({
        where: {
            deleted: false
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res
}

export const getAllPenyakit = async () => {
    const res = await DB.penyakit.findMany({
        where: {
            deleted: false
        },
        include: {
            ayam: {
                select: {
                    id: true,
                    gambar: true,
                    nama: true,
                }
            },
            obat: {
                select: {
                    id: true,
                    nama: true,
                    gambar: true,
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return res
}


export const getAllJadwalVaksinasi = async () => {
    const res = await DB.jadwal_vaksinasi.findMany({
        where: {
            deleted: false
        },
        orderBy: {
            tanggal: 'desc'
        },
        include: {
            ayam: {
                select: {
                    id: true,
                    gambar: true,
                    nama: true,
                }
            },
            vaksin: {
                select: {
                    id: true,
                    nama: true,
                    gambar: true,
                }
            }
        }
    })
    return res
}

export const getAllJumlahAyam = async() => {
    const rawData: any = await DB.$queryRaw`
        SELECT 
            SUM(jumlah) AS jumlah_ayam
        FROM ayam
        WHERE
            deleted = 0
    `
    return rawData[0]?.jumlah_ayam || 0;
}

export const getAllPanen = async() => {
    const panen = await DB.panen.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return panen
}

export const getPenyakitPalingBanyak = async () => {
    try {
        const penyakit = await DB.penyakit.groupBy({
            by: ['nama'],
            _count: {
                nama: true
            },
            orderBy: {
                _count: {
                    nama: 'desc'
                }
            },
            take: 3,
            where: {
                deleted: false
            }
        })

        return penyakit.map(p => p.nama);

    }catch(e){
        console.error("Error fetching penyakit paling banyak:", e);
    }
}

export const getAllBelanja = async() => {
    const belanja = await DB.belanja.findMany({
        where: {
            deleted: false
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return belanja
}

export const getAllPanenBesedOnMonth = async() => {
    const now = new Date();
    const start = startOfMonth(now);
    const end = endOfMonth(now);

    const result = await DB.$queryRaw<
    { jenis: string; total: number }[]
  >`
    SELECT jenis, SUM(jumlah) AS total
    FROM panen
    WHERE createdAt BETWEEN ${start} AND ${end}
      AND jenis IN ('daging', 'telur')
    GROUP BY jenis;
  `;

  return result
}

export const getAllBelanjaBesedOnMonth = async() => {
    const now = new Date();
    const start = startOfMonth(now);
    const end = endOfMonth(now);

    const result = await DB.$queryRaw<any>`
        SELECT SUM(harga) as total
        FROM belanja
        WHERE deleted = false
            AND createdAt BETWEEN ${start} AND ${end}
    `;

    return result[0]?.total || 0; 
}
