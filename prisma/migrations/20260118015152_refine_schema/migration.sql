-- CreateTable
CREATE TABLE `jadwal_obat` (
    `id` VARCHAR(191) NOT NULL,
    `ayamId` VARCHAR(191) NOT NULL,
    `obatId` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `dosis` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `sudah` BOOLEAN NOT NULL DEFAULT false,
    `send_notification` BOOLEAN NOT NULL DEFAULT false,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jadwal_obat` ADD CONSTRAINT `jadwal_obat_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_obat` ADD CONSTRAINT `jadwal_obat_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
