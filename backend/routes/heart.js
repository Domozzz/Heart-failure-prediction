const express = require("express");

const router = express.Router();

const heartController = require("../controllers/heart");

// /admin/add-product => GET
router.get("/search", heartController.getSearch);

router.post("/insert", heartController.postAdd);

router.post("/update", heartController.postUpdate);

router.get("/delete/:id", heartController.getDelete);

router.get("/update/:id", heartController.getUpdate);

exports.routes = router;
