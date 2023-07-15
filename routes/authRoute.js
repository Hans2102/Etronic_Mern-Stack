import express from "express";
import {
    registerController,
    loginController,
    testController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router obj
const router = express.Router();


//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//test Routes
router.get('/test', requireSignIn, isAdmin, testController)

//protected routes auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
});

//protected routes auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//order
router.get('/orders', requireSignIn, getOrdersController);

//all order
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController);

//order status
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
export default router;
