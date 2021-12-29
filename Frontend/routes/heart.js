const express = require("express");

const { check } = require("express-validator");
const router = express.Router();

const heartController = require("../controllers/heart");

// /admin/add-product => GET
router.get("/", heartController.getAll);

router.get("/insert", heartController.getAdd);

router.get("/update/:heart_id", heartController.getUpdate);

router.get("/about", heartController.getAbout);

// /admin/add-product => POST
router.post("/insert", heartController.postAdd);

router.post("/update", heartController.postUpdate);

router.get("/delete/:heart_id", heartController.getDelete);

// router.get("/", heartController.getAll);

exports.routes = router;
