"use server"

import { DB } from "@/config/database";
import { AyamType, BelanjaType, JadwalObatType, JadwalVaksinType, ObatType, PakanType, PanenType, PenyakitType, RegisterType, VaksinType } from "@/types/input";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Jenis, Tindakan} from "@/app/generated/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import cron from 'node-cron'
import {startOfMonth, endOfMonth } from "date-fns";
import { logger } from "@/utils/logging";

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
                harga: Number(data.harga)
            }
        })
    } catch (error) {
        console.error("Error creating panen:", error);
        throw error;
    }
    redirect("/panen");
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
            }
        })

        if(!s_vaksin){
            logger.log("info", "No have limit schedule vaksin")
            return
        }

        await DB.notifications.create({
            data: {
                message: `JADWAL VAKSIN ID: ${s_vaksin.id} , HARUS SEGERA DILAKUKAN !!!`,
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

// cron job
cron.schedule(
    "0 0 * * * *",
    async() => {
      await notificationsAlertVaksin();
    },
    {
      timezone: "Asia/Jakarta",
    }
  );

