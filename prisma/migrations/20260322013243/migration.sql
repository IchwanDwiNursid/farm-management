/*
  Warnings:

  - You are about to drop the column `j_obatId` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `j_tindakanId` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `j_vaksinId` on the `notifications` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[typeId]` on the table `notifications` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeId` to the `notifications` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_j_obatId_fkey`;

-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_j_tindakanId_fkey`;

-- DropForeignKey
ALTER TABLE `notifications` DROP FOREIGN KEY `notifications_j_vaksinId_fkey`;

-- DropIndex
DROP INDEX `notifications_j_obatId_key` ON `notifications`;

-- DropIndex
DROP INDEX `notifications_j_tindakanId_key` ON `notifications`;

-- DropIndex
DROP INDEX `notifications_j_vaksinId_key` ON `notifications`;

-- AlterTable
ALTER TABLE `notifications` DROP COLUMN `j_obatId`,
    DROP COLUMN `j_tindakanId`,
    DROP COLUMN `j_vaksinId`,
    ADD COLUMN `typeId` VARCHAR(191) NOT NULL,
    MODIFY `type` ENUM('vaksin', 'obat', 'tindakan') NOT NULL DEFAULT 'vaksin';

-- CreateIndex
CREATE UNIQUE INDEX `notifications_typeId_key` ON `notifications`(`typeId`);
