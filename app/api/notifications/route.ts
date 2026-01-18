import { DB } from "@/config/database"

export const GET = async () => {
    try {
        const notif = await DB.notifications.findMany({
            where: {
                read: false,
            },
            orderBy: {
                createdAt: "asc"
            }
        })

        return Response.json(notif)   
    }catch(error) {
        console.log(error)
    }
}