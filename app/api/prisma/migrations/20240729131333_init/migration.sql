-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ENATTENTE', 'ACCEPTE', 'TERMINE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CLIENT', 'CHAUFFEUR');

-- CreateTable
CREATE TABLE "utilisateur" (
    "id" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'CLIENT',

    CONSTRAINT "utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "taxi" (
    "id" TEXT NOT NULL,
    "chauffeur_id" TEXT NOT NULL,
    "disponibilite" BOOLEAN NOT NULL DEFAULT false,
    "location" TEXT NOT NULL,

    CONSTRAINT "taxi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "commande" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "taxi_id" TEXT NOT NULL,
    "date_commande" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "Status" NOT NULL DEFAULT 'ENATTENTE',

    CONSTRAINT "commande_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historique" (
    "id" TEXT NOT NULL,
    "chauffeurId" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "commande_id" TEXT NOT NULL,
    "dateCourse" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "historique_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "utilisateur_id_key" ON "utilisateur"("id");

-- CreateIndex
CREATE UNIQUE INDEX "taxi_id_key" ON "taxi"("id");

-- CreateIndex
CREATE UNIQUE INDEX "commande_id_key" ON "commande"("id");

-- CreateIndex
CREATE UNIQUE INDEX "historique_id_key" ON "historique"("id");

-- AddForeignKey
ALTER TABLE "commande" ADD CONSTRAINT "commande_taxi_id_fkey" FOREIGN KEY ("taxi_id") REFERENCES "taxi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historique" ADD CONSTRAINT "historique_commande_id_fkey" FOREIGN KEY ("commande_id") REFERENCES "commande"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
