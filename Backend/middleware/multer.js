const express = require('express')
const multer = require('multer')
const path  = require('path')
const fs    = require('fs')

const UPLOADS_DIR = 'uploads/'

if (!fs.existsSync(UPLOADS_DIR)){
    fs.mkdirSync(UPLOADS_DIR)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, UPLOADS_DIR)
    },

    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.filename + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer ({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
})

module.exports = upload