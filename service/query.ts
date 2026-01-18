import { DB } from "@/config/database"
import { convertDecimalToPlainObject } from "@/utils/converterDesimal";
import { endOfMonth, startOfMonth } from "date-fns";

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

export const getAllJadwalObat = async () => {
    const res = await DB.jadwal_Obat.findMany({
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
            obat: {
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

export const getTotalPanenPerBulan = async() =>{
    try{
        const rawData = await DB.$queryRaw`
            SELECT
                DATE_FORMAT(createdAt, '%Y-%m') AS bulan,

                SUM(CASE WHEN jenis = 'telur' THEN jumlah ELSE 0 END) AS jumlah_telur,
                SUM(CASE WHEN jenis = 'daging' THEN jumlah ELSE 0 END) AS jumlah_daging,

                CAST(SUM(harga) AS SIGNED) AS total_harga
            FROM panen
            WHERE deleted = 0
            GROUP BY bulan
            ORDER BY bulan DESC;
        `
        return convertDecimalToPlainObject(rawData)
    }catch(e){
        console.log((e as Error).message)
    }
}
export const getTotalBelanjaPerBulan = async() =>{
    try{
        const data = await DB.$queryRaw`
            SELECT
                DATE_FORMAT(createdAt, '%Y-%m') as bulan,
                SUM(harga) as total_harga
            FROM belanja
            WHERE deleted = 0
            GROUP BY DATE_FORMAT(createdAt, '%Y-%m')
            ORDER BY bulan DESC;
        `

        return data
    }catch(e){
        console.log((e as Error).message)
    }
}

export const getAllNotifications = async() => {
    try{
        const notif = await DB.notifications.findMany({
            where: {
                read: false,
            },
            orderBy: {
                createdAt: "asc"
            }
        })

        return notif
    }catch(e){
        console.log(e)
    }
}
