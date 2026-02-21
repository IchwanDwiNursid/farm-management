import z, { date } from "zod";

export const AyamSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    jumlah: z.string().min(1, "Jumlah harus lebih dari 0"),
    kandang: z.string().min(1, "Kandang harus diisi"),
    gambar: z.instanceof(File, {message: "Gambar Harus Di Isi"}).refine(file => !file || file.size !== 0 || file. size <= 5000000, {message:"Max size exceeded"})
        .refine(value => value instanceof File || typeof value === "string", {
        message: "Image is required"}).nullable().optional(),
    jenis: z.string(),
})

export const VaksinSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    indikasi: z.string().min(1, "Indikasi harus diisi"),
    tipe: z.string().min(1, "Tipe harus diisi"),
    penggunaan: z.string().min(1, "Penggunaan harus diisi"),
    umur: z.string().min(1, "Umur harus diisi"),
    gambar: z.instanceof(File, {message: "Gambar Harus Di Isi"}).refine(file => !file || file.size !== 0 ||     file. size <= 5000000, {message:"Max size exceeded"}).refine(value => value instanceof File || typeof value === "string", {
    message: "Image is required"}).nullable()
})

export const ObatSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    indikasi: z.string().min(1, "Indikasi harus diisi"),
    harga: z.string().min(1, "Harga harus diisi"),
    gambar: z.instanceof(File, {message: "Gambar Harus Di Isi"}).refine(file => !file || file.size !== 0 ||     file. size <= 5000000, {message:"Max size exceeded"}).refine(value => value instanceof File || typeof value === "string", {
    message: "Image is required"}).nullable()
})

export const PakanSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    jenis: z.string().min(1, "Jenis harus diisi"),
    gizi: z.string().min(1, "Gizi harus diisi"),
    harga: z.string().min(1, "Harga harus diisi"),
    gambar: z.instanceof(File, {message: "Gambar Harus Di Isi"}).refine(file => !file || file.size !== 0 ||     file. size <= 5000000, {message:"Max size exceeded"}).refine(value => value instanceof File || typeof value === "string", {
    message: "Image is required"}).nullable()
})

export const PenyakitSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    deskripsi: z.string().min(1, "Deskripsi harus diisi"),
    gejala: z.string().min(1, "Gejala harus diisi"),
    pengobatan: z.string().min(1, "Pengobatan harus diisi"),
    gambar: z.instanceof(File, {message: "Gambar Harus Di Isi"}).refine(file => !file || file.size !== 0 ||     file. size <= 5000000, {message:"Max size exceeded"}).refine(value => value instanceof File || typeof value === "string", {
        message: "Image is required"}).nullable(),
    ayamId: z.string().min(1, "Ayam ID harus diisi"),
})

export const PanenSchema = z.object({
    jenis: z.string().min(1, "Jenis harus diisi"),
    jumlah: z.string().min(1, "Jumlah harus diisi"),
    tindakan: z.string().min(1, "Tindakan harus diisi"),
    harga: z.string().optional(),
    keterangan: z.string().optional()
})

export const BelanjaSchema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    jumlah: z.string().min(1, "Jumlah harus diisi"),
    harga: z.string().min(1, "Harga harus diisi"),
})

export const LoginSchema = z.object({
    username: z.string().min(1, "Username harus diisi"),
    password: z.string().min(1, "Password harus diisi"),
})

export const RegisterSchema = z.object({
    username: z.string().min(1, "Username harus diisi"),
    password: z.string().min(1, "Password harus diisi"),
    role: z.string().min(1, "Role Harus Di Isi")
})

export const JadwalVaksinSchema = z.object({
    nama : z.string(),
    vaksin: z.string(),
    tanggal: z.coerce.date(),
    keterangan: z.string().nullable()
})

export const JadwalObatSchema = z.object({
    nama : z.string(),
    obat: z.string(),
    tanggal: z.coerce.date(),
    keterangan: z.string().nullable()
})

export const JadwalTindakanSchema = z.object({
    nama : z.string(),
    tanggal: z.coerce.date(),
    keterangan: z.string().nullable()
})

export const CostSchema = z.object({
    harga : z.string(),
    keterangan: z.string()
})



export type AyamType = z.infer<typeof AyamSchema>;
export type VaksinType = z.infer<typeof VaksinSchema>;
export type ObatType = z.infer<typeof ObatSchema>;
export type PakanType = z.infer<typeof PakanSchema>;
export type PenyakitType = z.infer<typeof PenyakitSchema>;
export type PanenType = z.infer<typeof PanenSchema>;
export type LoginType = z.infer<typeof LoginSchema>;
export type RegisterType = z.infer<typeof RegisterSchema>
export type BelanjaType = z.infer<typeof BelanjaSchema>
export type JadwalVaksinType = z.infer<typeof JadwalVaksinSchema>
export type JadwalObatType = z.infer<typeof JadwalObatSchema>
export type JadwalTindakanType = z.infer<typeof JadwalTindakanSchema>
export type CostType = z.infer<typeof CostSchema>