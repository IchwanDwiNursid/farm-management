/*
  Warnings:

  - A unique constraint covering the columns `[j_obatId]` on the table `notifications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[j_vaksinId]` on the table `notifications` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[j_tindakanId]` on the table `notifications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `j_obatId` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `j_tindakanId` to the `notifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `j_vaksinId` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `notifications` ADD COLUMN `j_obatId` VARCHAR(191) NOT NULL,
    ADD COLUMN `j_tindakanId` VARCHAR(191) NOT NULL,
    ADD COLUMN `j_vaksinId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `notifications_j_obatId_key` ON `notifications`(`j_obatId`);

-- CreateIndex
CREATE UNIQUE INDEX `notifications_j_vaksinId_key` ON `notifications`(`j_vaksinId`);

-- CreateIndex
CREATE UNIQUE INDEX `notifications_j_tindakanId_key` ON `notifications`(`j_tindakanId`);

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_j_obatId_fkey` FOREIGN KEY (`j_obatId`) REFERENCES `jadwal_obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_j_vaksinId_fkey` FOREIGN KEY (`j_vaksinId`) REFERENCES `jadwal_vaksinasi`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_j_tindakanId_fkey` FOREIGN KEY (`j_tindakanId`) REFERENCES `jadwal_tindakan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
