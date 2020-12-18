const asyncHandler = require('express-async-handler')
const {cloudinary} = require('../utils/cloudinary')



exports.uploadImage = asyncHandler( async(req, res) => {
    try {
        const fileStr = req.body
        console.log(fileStr)
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset : 'dev_setups'
        })
        console.log(uploadedResponse)
        res.json({message: "success"})
    } catch (error) {
        throw new Error("something wrong while uploading image")
    }
})



