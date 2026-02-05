-- AlterTable
ALTER TABLE `notifications` MODIFY `type` ENUM('vaksin', 'obat') NOT NULL DEFAULT 'vaksin';
