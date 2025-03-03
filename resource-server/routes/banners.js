import { Router } from "express";
import { authenticateToken } from "../../middleware/authMiddleware.js";
import { GetBannerModulesController } from "../controllers/banner-module/GetBannerModulesController.js";
import { NewBannerModuleController } from "../controllers/banner-module/NewBannerModuleController.js";
import { GetBannerModuleController } from "../controllers/banner-module/GetBannerModuleController.js";
import { DeleteBannerModuleController } from "../controllers/banner-module/DeleteBannerModuleController.js";
import { UpdateBannerModuleController } from "../controllers/banner-module/UpdateBannerModuleController.js";
import { GetBannerItemController } from "../controllers/banner-item/GetBannerItemController.js";
import { NewBannerItemController } from "../controllers/banner-item/NewBannerItemController.js";
import { UpdateBannerItemController } from "../controllers/banner-item/UpdateBannerItemController.js";
import { DeleteBannerItemController } from "../controllers/banner-item/DeleteBannerItemController.js";

const router = Router();

// GET ALL BANNER MODULES
router.get(`/`, GetBannerModulesController);

// ADD NEW BANNER MODULE
router.post('/', authenticateToken, NewBannerModuleController);

// GET BANNER MODULE
router.get(`/:id`, GetBannerModuleController);

// DELETE BANNER MODULE
router.delete('/delete/:id', authenticateToken, DeleteBannerModuleController);

// UPDATE BANNER MODULE
router.put('/update/:id', authenticateToken, UpdateBannerModuleController);

// GET BANNER
router.get('/banner/:id', GetBannerItemController);

// ADD NEW BANNER
router.post('/banner/:id', authenticateToken, NewBannerItemController);

// UPDATE BANNER
router.put('/banner/update/:id', authenticateToken, UpdateBannerItemController);

// DELETE BANNER
router.delete('/banner/delete/:id', authenticateToken, DeleteBannerItemController);

export default router;
