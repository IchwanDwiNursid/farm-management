-- CreateTable
CREATE TABLE `mortalitas` (
    `id` VARCHAR(191) NOT NULL,
    `ayamId` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `penyebab` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `mortalitas` ADD CONSTRAINT `mortalitas_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
