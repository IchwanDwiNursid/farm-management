import { DB } from "@/config/database"

export const GET = async () => {
    try {
        const res = await DB.vaksin.findMany({
            where: {
                deleted: false
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