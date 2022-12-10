import serviceGetProducts from '../services/productService.js';

const getProducts = async (req, res, _next) => {
  const products = await serviceGetProducts();

  return res.status(200).json(products);
};

export default getProducts;
