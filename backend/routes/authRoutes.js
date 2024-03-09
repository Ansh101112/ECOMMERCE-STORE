import express from "express";
import registerController, {
  logincontroller,
} from "../controllers/authControllers.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing for different requests
router.post("/register", registerController);
router.post("/login", logincontroller);

//protected routes
router.get('/user-auth',requireSignIn,(req,res)=>{
  res.status(200).send({
    ok: true
  });
})

router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
  res.status(200).send({
    ok: true
  });
})

//exporting routes
export default router;