const express = require("express");
const router = express.Router();
const listController = require('../controller/listController')

router.get("/lists", listController.get_lists);
router.post("/createlist", listController.create_lists);
router.put("/update/lists/:id", listController.update_lists);
router.delete("/delete/lists/:id", listController.delete_lists);


module.exports = router;
