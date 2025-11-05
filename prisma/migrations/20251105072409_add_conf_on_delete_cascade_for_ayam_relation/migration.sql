-- DropForeignKey
ALTER TABLE `jadwal_vaksinasi` DROP FOREIGN KEY `jadwal_vaksinasi_ayamId_fkey`;

-- DropForeignKey
ALTER TABLE `mortalitas` DROP FOREIGN KEY `mortalitas_ayamId_fkey`;

-- DropForeignKey
ALTER TABLE `penyakit` DROP FOREIGN KEY `penyakit_ayamId_fkey`;

-- DropIndex
DROP INDEX `jadwal_vaksinasi_ayamId_fkey` ON `jadwal_vaksinasi`;

-- DropIndex
DROP INDEX `mortalitas_ayamId_fkey` ON `mortalitas`;

-- DropIndex
DROP INDEX `penyakit_ayamId_fkey` ON `penyakit`;

-- AddForeignKey
ALTER TABLE `jadwal_vaksinasi` ADD CONSTRAINT `jadwal_vaksinasi_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `penyakit` ADD CONSTRAINT `penyakit_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mortalitas` ADD CONSTRAINT `mortalitas_ayamId_fkey` FOREIGN KEY (`ayamId`) REFERENCES `ayam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
