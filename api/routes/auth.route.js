import express from 'express';
import { signin, signup, google, signout } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.get("/signout", signout)
router.post("/google", google)

  export default router;