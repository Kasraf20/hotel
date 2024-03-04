const express = require('express')
const router = express.Router()

const Menu = require('../models/Menu')


router.post('/',async(req,res) => {
    try{
        const data = req.body
        const newMenu = new Menu(data)
        const saveMenu = await newMenu.save()
        res.json(saveMenu)
    }catch(err){
        res.json(err)
    }
})

router.get('/',async(req,res) => {
    try{
        const data = await Menu.find()
        res.json(data)
    }catch(err){
        res.json(err)
    }
})


module.exports = router;