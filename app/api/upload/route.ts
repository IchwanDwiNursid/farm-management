import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export const PUT = async (req: Request) => {
    const form = await req.formData()
    const file = form.get("gambar") as File;

    if (file.size === 0 || file.size === undefined) {
        return NextResponse.json({
            message: "File is empty or not provided",
            status: 400,
        })
    }

    if (file.size > 4000000) {
        return NextResponse.json({
            message: "File must be less than 4Mb",
            status: 400,
        })
    }

    if (!file.type.startsWith("image/")) {
        return NextResponse.json({
            message: "File must be an image",
            status: 400,
        })
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Tentukan path penyimpanan
    const filename = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/uploads", filename);

    // Simpan file
    await writeFile(filePath, buffer);

    // Akses gambar lewat API publik (buat routing custom atau middleware jika perlu)
    return NextResponse.json({
        message: "Upload berhasil",
        url: `/uploads/${filename}`,
        status: 200,
    });
}


// TODO : Delete Image