-- AlterTable
ALTER TABLE `notifications` ADD COLUMN `type` ENUM('vaksin') NOT NULL DEFAULT 'vaksin';
