/*
  Warnings:

  - A unique constraint covering the columns `[filename]` on the table `VideoData` will be added. If there are existing duplicate values, this will fail.
  - Made the column `filename` on table `VideoData` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "VideoData" ALTER COLUMN "filename" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VideoData_filename_key" ON "VideoData"("filename");
