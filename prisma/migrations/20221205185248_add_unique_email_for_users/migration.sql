/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `artists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updated_at` to the `art_products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `art_products` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `artists_email_key` ON `artists`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `clients_email_key` ON `clients`(`email`);
