import { DB } from "@/config/database"

export const GET = async () => {
    try {
        const res = await DB.obat.findMany({
            where: {
                deleted: false
            },
            select: {
                id: true,
                nama: true,
                gambar: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        return Response.json(res)
    
    }catch(error) {
        console.log(error)
    }
}