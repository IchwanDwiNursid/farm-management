/*
  Warnings:

  - Added the required column `gambar` to the `obat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `obat` ADD COLUMN `gambar` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `penyakit` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `gejala` VARCHAR(191) NOT NULL,
    `pengobatan` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `ayamId` VARCHAR(191) NOT NULL,
    `deleted` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `penyakit` ADD CONSTRAINT `penyakit_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
