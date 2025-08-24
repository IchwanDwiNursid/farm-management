-- AddForeignKey
ALTER TABLE `penyakit` ADD CONSTRAINT `penyakit_pengobatan_fkey` FOREIGN KEY (`pengobatan`) REFERENCES `obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
