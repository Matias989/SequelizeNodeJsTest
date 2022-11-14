import {getCategories,postCategories,putCategories,deleteCategories,getCategoriesById} from "../controllers/categories.js"
import { Router } from "express";

const router = Router();

router.get("/categories",getCategories);
router.post("/categories",postCategories);
router.put("/categories/:id",putCategories);
router.delete("/categories/:id",deleteCategories);
router.get("/categories/:id",getCategoriesById);

export default router;
