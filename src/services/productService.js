import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getProducts = async () => {
  const products = await prisma.artProduct.findMany({ take: 100 });
  return products;
};

export default getProducts;
