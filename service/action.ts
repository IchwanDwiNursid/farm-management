"use server"

import { DB } from "@/config/database";
import { AyamType, BelanjaType, CostType, JadwalObatType, JadwalTindakanType, JadwalVaksinType, ObatType, PakanType, PanenType, PenyakitType, RegisterType, VaksinType } from "@/types/input";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Jenis, Tindakan} from "@/app/generated/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import cron from 'node-cron'
import {startOfMonth, endOfMonth } from "date-fns";
import { logger } from "@/utils/logging";
import { formatCurrency } from "@/utils/formatCurrency";
import puppeteer from "puppeteer";


export const createAyam = async (data: AyamType) => {
    try {
        const ayam = await DB.ayam.create({
            data: {
                nama: data.nama,
                jumlah: Number(data.jumlah),
                kandang: data.kandang,
                gambar: data.gambar?.name!,
                umur: 1,
                pakan: ["Comfeed BR-1"],
                obat: ["VitaChick", "VitaStres"],
                jenis: data.jenis,
            },
        })

        const createdAt = new Date(ayam.createdAt);
        const tigaHariLagi = new Date(createdAt.getTime() + 3 * 24 * 60 * 60 * 1000);

        await DB.jadwal_vaksinasi.create({
            data: {
                ayamId: ayam.id,
                keterangan: "Vaksin wajib pertama",
                vaksinId: "cmeb9o2qm0006nrmme1dnksmy",
                tanggal: tigaHariLagi,
                dosis: 1,
            }
        })
    } catch (error) {
        console.error("Error creating ayam:", error);
        throw error;
    }
    redirect("/ayam")
}

export const createVaksin = async (data: VaksinType) => {
    try {
        await DB.vaksin.create({
            data: {
                nama: data.nama,
                indikasi: data.indikasi,
                tipe: data.tipe,
                penggunaan: data.penggunaan,
                umur: Number(data.umur),
                gambar: data.gambar?.name!,
            }
        })
    } catch (error) {
        console.error("Error creating ayam:", error);
        throw error;
    }
    redirect('/vaksin')
}
export const createObat = async (data: ObatType) => {
    try {
        await DB.obat.create({
            data: {
                nama: data.nama,
                indikasi: data.indikasi,
                gambar: data.gambar?.name!,
                harga: data.harga,
            }
        })

    } catch (error) {
        console.error("Error creating ayam:", error);
        throw error;
    }
    redirect('/obat')
}

export const createPakan = async (data: PakanType) => {
    try {
        await DB.pakan.create({
            data: {
                nama: data.nama,
                harga: Number(data.harga),
                gambar: data.gambar?.name!,
                gizi: data.gizi,
                jenis: data.jenis
            }
        })
    } catch (error) {
        console.error("Error creating pakan:", error);
        throw error;
    }
    redirect('/pakan')
}

export const createPenyakit = async (data: PenyakitType) => {
    try {
        await DB.penyakit.create({
            data: {
                nama: data.nama,
                gambar: data.gambar?.name!,
                gejala: data.gejala,
                deskripsi: data.deskripsi,
                pengobatan: data.pengobatan,
                ayamId: data.ayamId,
            }
        })
    } catch (error) {
        console.error("Error creating pakan:", error);
        throw error;
    }
    redirect('/penyakit')
}

export const updateJadwalVaksinasi = async (id: string) => {
    try {
        await DB.jadwal_vaksinasi.update({
            where: {
                id: id
            },
            data: {
                sudah: true
            }
        })
    } catch (error) {
        console.error("Error updating jadwal vaksinasi:", error);
        throw error;
    }
    
    revalidatePath("/jadwal-vaksinasi");
}

export const updateJadwalObat = async (id: string) => {
    try {
        await DB.jadwal_Obat.update({
            where: {
                id: id
            },
            data: {
                sudah: true
            }
        })
    } catch (error) {
        console.error("Error updating jadwal vaksinasi:", error);
        throw error;
    }
    
    revalidatePath("/jadwal-vaksinasi");
}

export const deleteJadwalVaksinasi = async (id: string) => {
    try {
        await DB.jadwal_vaksinasi.update({
            where: {
                id: id
            },
            data: {
                deleted: true
            }
        })
    } catch (error) {
        console.error("Error deleting jadwal vaksinasi:", error);
        throw error;
    }
    
    revalidatePath("/jadwal-vaksinasi");
}

export const deleteJadwalObat = async (id: string) => {
    try {
        await DB.jadwal_Obat.update({
            where: {
                id: id
            },
            data: {
                deleted: true
            }
        })
    } catch (error) {
        console.error("Error deleting jadwal vaksinasi:", error);
        throw error;
    }
    
    revalidatePath("/jadwal-vaksinasi");
}

export const editMortalitasAyam = async(ayamId: string, penyakit: string, formData: FormData) => {
    const ayamMati = formData.get('ayam');
    const ayam = await DB.ayam.findUnique({
        where: {
            id : ayamId
        }
    })

    const jumlahAyamNow = ayam?.jumlah! - Number(ayamMati);
    console.log(jumlahAyamNow)

    await DB.ayam.update({
        where: {
            id: ayamId
        },
        data: {
            jumlah: jumlahAyamNow
        }
    })

    await DB.mortalitas.create({
        data: {
            ayamId,
            tanggal: new Date(),
            jumlah: Number(ayamMati),
            penyebab: penyakit,
        }
    })

    revalidatePath("/ayam");
}

export const updateHargaPakan = async(pakanId: string, formData : FormData) => {
    const hargaBaru = formData.get('harga');
    await DB.pakan.update({
        where: {
            id: pakanId
        },
        data: {
            harga: Number(hargaBaru)
        }
    })
    revalidatePath("/pakan");
}

export const updateHargaObat = async(obatId: string, formData : FormData) => {
    const hargaBaru = formData.get('harga');
    await DB.obat.update({
        where: {
            id: obatId
        },
        data: {
            harga : hargaBaru ? String(hargaBaru) : undefined
        }
    })
    revalidatePath("/pakan");
}

export const deletedPenyakit = async (ayamId: string) => {
    try {
        await DB.penyakit.update({
            where: {
                id: ayamId
            },
            data: {
                deleted: true
            }
        })
    }catch(error){
        console.error("Error deleting penyakit:", error);
    }

    revalidatePath("/penyakit");
}

export const createPanen = async (data: PanenType) => {
    try {
        await DB.panen.create({
            data: {
                jenis: data.jenis.toLowerCase() as Jenis,
                jumlah: Number(data.jumlah),
                tindakan: data.tindakan.toLowerCase() as Tindakan,
                harga: Number(data.harga),
                keterangan: data.keterangan
            }
        })
    } catch (error) {
        console.error("Error creating panen:", error);
        throw error;
    }
    redirect("/panen");
}

export const createCost = async (data: CostType) => {
    try {
        await DB.cost.create({
            data: {
                harga: Number(data.harga),
                keterangan: data.keterangan
            }
        })
    } catch (error) {
        console.error("Error creating panen:", error);
        throw error;
    }
    redirect("/cost");
}

export const createBelanja = async (data: BelanjaType) => {
    try {
        await DB.belanja.create({
            data: {
                nama: data.nama,
                jumlah: Number(data.jumlah),
                harga: Number(data.harga),
            }
        })
    } catch(error){
        console.log(error)
    }
}

export const login = async (username: string, password: string) => {
    const user = await DB.user.findFirst({
        where: {
            username: username,
            password: password
        }
    });

    if (!user) {
        return {error : "Username atau password salah"};
    }

    const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role},
        process.env.JWT_AUTH_TOKEN!,
        { expiresIn: "15d" }
    );

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
        httpOnly: false,
        secure: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 15
    });

    return {success: true};
}

export const getIncome = async () => {
    try {
        const start = startOfMonth(new Date());
        const end = endOfMonth(new Date());

        const panens = await DB.panen.findMany({
            where: {
                createdAt: {
                    gte: start,
                    lte: end
                }
            }
        });

        const totalIncome = panens.reduce((acc, panen) => acc + (panen.harga || 0), 0);
        return totalIncome;
    } catch(error){
        console.log(error)
    }
}

export const registerUser = async(data: RegisterType) => {
    try {
        await DB.user.create({
            data: {
                username: data.username,
                password: data.password,
                role: data.role
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    redirect("/login");
}


export const deleteAyam = async (ayamId: string) => {
    try{
        await DB.ayam.delete({
            where: {
                id: ayamId
            }
        })
    }catch(e){
        console.log((e as Error).message)
    }
}

export const createJadwalVaksin = async (data: JadwalVaksinType) => {
    try {
        const vaksinasi =  await DB.jadwal_vaksinasi.create({
            data:{
                dosis: 1,
                ayamId: data.nama,
                vaksinId: data.vaksin,
                tanggal: data.tanggal as Date,
                keterangan: data.keterangan || "tolong segera di vaksin"
            }
        })

        console.log(vaksinasi)

    } catch (e){
        console.log(e)
        throw e;
    }finally{
        redirect('/jadwal-vaksin')
    }
}

export const createJadwalObat = async (data: JadwalObatType) => {
    try {
        const vaksinasi =  await DB.jadwal_Obat.create({
            data:{
                dosis: 1,
                ayamId: data.nama,
                obatId: data.obat,
                tanggal: data.tanggal as Date,
                keterangan: data.keterangan || "tolong segera di vaksin"
            }
        })

        console.log(vaksinasi)

    } catch (e){
        console.log(e)
        throw e;
    }finally{
        redirect('/jadwal-vaksin')
    }
}

export const createJadwalTindakan = async (data: JadwalTindakanType) => {
    try {
        const vaksinasi =  await DB.jadwal_tindakan.create({
            data:{
                ayamId: data.nama,
                tanggal: data.tanggal as Date,
                keterangan: data.keterangan || "tolong segera di vaksin"
            }
        })

        console.log(vaksinasi)

    } catch (e){
        console.log(e)
        throw e;
    }finally{
        redirect('/jadwal-vaksin')
    }
}


export const PrintSqlToPdf = async () => {
    try {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const bulanSekarang = now.toLocaleString('id-ID', { month: 'long' });


        const rows = await DB.panen.findMany({
            where: {
                tindakan: "jual",
                createdAt: {
                    gte: startOfMonth,
                    lt: startOfNextMonth
                }
            },
            select: {
                createdAt: true,
                jumlah: true,
                harga: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        let tableHTML = `
            <div style="width: 50%; overflow-x: auto; margin-top: 20px; margin-left: auto; margin-right: auto;">
                <h2>Pendapatan Bulan <span style="color:red;">${bulanSekarang}</span></h2>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
                    <thead>
                        <tr>
                            <th style="border:1px solid #000; padding:8px;">Tanggal</th>
                            <th style="border:1px solid #000; padding:8px;">Jumlah</th>
                            <th style="border:1px solid #000; padding:8px;">Harga</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        let total = 0
        rows.forEach(row => {
                total += Number(row.harga)
                tableHTML += `
                    <tr>
                        <td style="border:1px solid #000; padding:8px;">
                            ${new Date(row.createdAt).toLocaleDateString()}
                        </td>
                        <td style="border:1px solid #000; padding:8px;">
                            ${row.jumlah}
                        </td>
                        <td style="border:1px solid #000; padding:8px;">
                            Rp. ${formatCurrency(Number(row.harga))}
                        </td>
                    </tr>
                `;
        });

        tableHTML += `
            <tr>
                <td colspan="2" style="border:1px solid #000; padding:8px; font-weight:bold; text-align:right;">
                    TOTAL
                </td>
                <td style="border:1px solid #000; padding:8px; font-weight:bold;">
                    Rp. ${formatCurrency(total)}
                </td>
            </tr>
        `;

        tableHTML += `
                    </tbody>
                </table>
            </div>
        `;

        const dateNow = now.toISOString().replace(/[:.]/g, "-");
        // ===== Puppeteer Start =====
        const browser = await puppeteer.launch({
            headless: true
        });

        const page = await browser.newPage();

        await page.setContent(tableHTML, {
            waitUntil: "networkidle0"
        });

        await page.pdf({
            path: `pendapatan-${dateNow}.pdf`,
            format: "A4",
            printBackground: true
        });

        await browser.close();

        console.log(`pendapatan-${dateNow}.pdf`);
        console.log("PDF berhasil dibuat");

    }catch (e){
        console.log(e)
        throw e;
    }
}

const notificationsAlertVaksin = async() => {
    try{
        const now = new Date();

        const startOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0, 0, 0, 0
        );
        
        const endOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            23, 59, 59, 999
        );

        const s_vaksin = await DB.jadwal_vaksinasi.findFirst({
            where: {
                AND: {
                    tanggal: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                    send_notification: false
                }
            },
            include: {
                vaksin: {
                    select: {
                        nama: true
                    }
                }
            }
        })

        if(!s_vaksin){
            logger.log("info", "No have limit schedule vaksin")
            return
        }

        await DB.notifications.create({
            data: {
                message: `JADWAL VAKSIN ID: ${s_vaksin.vaksin.nama} , HARUS SEGERA DILAKUKAN !!!`,
            }
        })

        await DB.jadwal_vaksinasi.update({
            where: {
                id: s_vaksin.id
            },
            data: {
                send_notification: true
            }
        })
    }catch(e){
        console.log(e)
    }
};

const notificationsAlertObat = async() => {
    try{
        const now = new Date();

        const startOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0, 0, 0, 0
        );
        
        const endOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            23, 59, 59, 999
        );

        const s_obat = await DB.jadwal_Obat.findFirst({
            where: {
                AND: {
                    tanggal: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                    send_notification: false
                }
            },
            include: {
                obat: {
                    select: {
                        nama: true,
                    }
                }
            }
        })

        if(!s_obat){
            logger.log("info", "No have limit schedule vaksin")
            return
        }

        await DB.notifications.create({
            data: {
                message: `JADWAL OBAT : ${s_obat.obat.nama} , HARUS SEGERA DILAKUKAN !!!`,
                type: "obat"
            }
        })

        await DB.jadwal_Obat.update({
            where: {
                id: s_obat.id
            },
            data: {
                send_notification: true
            }
        })
    }catch(e){
        console.log(e)
    }
};

// cron job
cron.schedule(
    "0 0 * * * *",
    async() => {
      await notificationsAlertVaksin();
      await notificationsAlertObat();
    },
    {
      timezone: "Asia/Jakarta",
    }
  );

