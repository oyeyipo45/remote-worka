const express = require('express');
const { uploadImage } = require('../controllers/fileUploads');
const router = express.Router();


router.route('/').post(uploadImage)

module.exports = router;