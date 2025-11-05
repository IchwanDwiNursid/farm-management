import { PrismaClient } from "@/app/generated/prisma";
import { logger } from "@/utils/logging";

export const DB = new PrismaClient({
    log: [
        {
          emit: 'event',
          level: 'query',
        },
        {
          emit: 'event',
          level: 'error',
        },
        {
          emit: 'event',
          level: 'info',
        },
        {
          emit: 'event',
          level: 'warn',
        },
      ],
})

DB.$on('query', (e) => {
    logger.info(e)
})
DB.$on('error', (e) => {
    logger.error(e)
})
DB.$on('info', (e) => {
    logger.info(e)
})
DB.$on('warn', (e) => {
    logger.warn(e)
})
