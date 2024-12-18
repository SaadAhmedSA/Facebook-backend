import express from "express"
import { loginUser, logout,  registeruser } from "../controllers/usercontroller.js"
import { Addpost, getAllpost } from "../controllers/postcontroller.js"
import { addlike, getAlllikes } from "../controllers/likecontroller.js"
import { removeListener } from "process"
import { addShare, getAllShare } from "../controllers/sharecontroller.js"

const router = express.Router()
//user api
router.post("/register",registeruser)
router.post("/login",loginUser)
router.get("/logout",logout)
//post api
router.post("/addpost",Addpost)
router.get("/allpost",getAllpost)
//like api
router.get("/allike",getAlllikes)
router.post("/like",addlike)
router.post("/unlike",removeListener)
//Share api
router.post("/share",addShare)
router.get("/allshare",getAllShare)
//bookmark api



export default router