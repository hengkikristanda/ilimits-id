const express = require("express");
const axios = require("axios");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const { v4: uuidv4 } = require("uuid"); // Import uuidv4

const homeController = require("../controllers/homeController");
const aboutUsController = require("../controllers/aboutUsController");
const promotionController = require("../controllers/promotionController");
const platformController = require("../controllers/platformController");
const tradingController = require("../controllers/tradingController");
const productController = require("../controllers/productController");

const newsletterSubscriptionController = require("../controllers/newsletterSubscriptionController");

// Home Page / Index
router.get("/", homeController.renderHomePage);
router.post("/newsletters/subscribe", newsletterSubscriptionController.createSubsciption);

router.get("/promotion/:promotionId?", promotionController.renderPromotionPage);

router.get("/trading", tradingController.renderTrading);
router.get("/trading/:accountType", tradingController.renderTradingAccount);

router.get("/platform", platformController.renderPlatform);

router.get("/products/ai-trading", productController.renderAiTrading);
router.get("/products/copy-trade", productController.renderCopyTrade);
router.get("/products/hedge", productController.renderHedge);

router.get("/about-us", aboutUsController.renderAboutUs);

module.exports = router;
