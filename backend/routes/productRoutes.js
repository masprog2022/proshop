import express from "express";
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);

export default router;

//import asyncHandler from "../middleware/asyncHandler.js";
//import Product from "../models/productModel.js";

/*router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    //throw new Error("Some error");
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //const product = await products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(404);
    throw new Error("Resource not found");
  })
);*/
