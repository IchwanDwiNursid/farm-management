/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `nama` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `name`,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ayam` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `umur` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `kandang` VARCHAR(191) NOT NULL,
    `pakan` JSON NOT NULL,
    `obat` JSON NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vaksin` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `indikasi` VARCHAR(191) NOT NULL,
    `tipe` VARCHAR(191) NOT NULL,
    `penggunaan` VARCHAR(191) NOT NULL,
    `umur` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pakan` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `umur` INTEGER NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `gizi` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obat` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `indikasi` VARCHAR(191) NOT NULL,
    `harga` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jadwal_vaksinasi` (
    `id` VARCHAR(191) NOT NULL,
    `ayamId` VARCHAR(191) NOT NULL,
    `vaksinId` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `dosis` INTEGER NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `jadwal_vaksinasi` ADD CONSTRAINT `jadwal_vaksinasi_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_vaksinasi` ADD CONSTRAINT `jadwal_vaksinasi_vaksinId_fkey` FOREIGN KEY (`vaksinId`) REFERENCES `vaksin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
