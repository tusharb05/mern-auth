const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../model/User')

router.post('/', async (req,res)=>{

    //Checking if user exists
    const userExists = await User.findOne({username:req.body.username})
    if(userExists) return req.json({status: 'username exists'})

    //Hashing password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt)

    //Saving user to the database
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    })

    try{
        const savedUser = await user.save()
        res.json({status: 'success'})
    }catch(error){
        res.json({status:'error'})
    }
})

module.exports = router