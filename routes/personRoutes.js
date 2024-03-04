const express = require('express')
const route = express.Router()

const Person = require('../models/Person')

route.post('/',async(req,res) => {

    try{
        const data = req.body
        const newPerson = new Person(data)
        const savePerson = await newPerson.save()
        console.log('data saved.')
        res.json(savePerson)
    }catch(err){
        console.log("internal server error.")
        res.json(err)
    }
})

route.get('/', async(req,res) => {
    try{
        const personData = await Person.find()
        console.log("person data fetch.")
        res.json(personData)
    }catch(err){
        console.log("Internal error accured.")
        res.json(err)
    }
})

route.get('/:workType',async (req,res) => {
    try{
        const workType = req.params.workType
        if(workType === 'chef' || workType === 'manager' || workType === "waiter"){
            const responce = await Person.find({work : workType})
            res.json(responce)
        }else{
            res.send("wrong workType")
        }
    }catch(err){
        console.log("Internal error accured.")
        res.json(err)
    }
})

route.put('/:id',async(req,res) => {
    try{
        const id = req.params.id
        const data = req.body
        const upadteData = await Person.findByIdAndUpdate(id,data,{
            new:true,
            runValidators:true
        })
        res.json(upadteData)
    }catch(err){
        res.json(err)
    }
})

route.delete('/:id', async(req,res) => {
    try{
        const id = req.params.id
        const responce = await Person.findByIdAndDelete(id)
        res.json({message : "data deleted"})
    }catch(err){
        res.json(err)
    }
})


module.exports = route;