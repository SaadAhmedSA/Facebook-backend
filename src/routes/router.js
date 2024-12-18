import express from "express"
import { loginUser, logout,  registeruser } from "../controllers/usercontroller.js"
import { Addpost, getAllpost } from "../controllers/postcontroller.js"
import { addlike, getAlllikes, removelike } from "../controllers/likecontroller.js"
import { addShare, getAllShare } from "../controllers/sharecontroller.js"
import { addComment, getAllComment } from "../controllers/commentcontroller.js"

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
router.post("/unlike",removelike)
//Share api
router.post("/share",addShare)
router.get("/allshare",getAllShare)
//comment api
router.post("/addcomment",addComment)
router.get("/allcomment",getAllComment)


export default router