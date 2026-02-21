-- CreateTable
CREATE TABLE `jadwal_tindakan` (
    `id` VARCHAR(191) NOT NULL,
    `ayamId` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `sudah` BOOLEAN NOT NULL DEFAULT false,
    `send_notification` BOOLEAN NOT NULL DEFAULT false,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jadwal_tindakan` ADD CONSTRAINT `jadwal_tindakan_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
