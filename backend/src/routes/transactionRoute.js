import express from "express"
import { createTransaction, deleteTransactionasync, getSummaryByUserId, getTransactionsByUserId } from "../controllers/transactionsController.js";
const router = express.Router()

router.get("/:userId",getTransactionsByUserId)
router.post("/",createTransaction)
router.delete("/:id",deleteTransactionasync)
router.get("/summary/:userId",getSummaryByUserId)
export default router