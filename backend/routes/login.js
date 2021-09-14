const router = require('express').Router()
const User = require('../model/User')
const bcrypt = require('bcryptjs')

router.post('/', async (req,res)=>{
    // res.json({username: req.body.username, password: req.body.password})
    //Checking if user exists
    const user = await User.findOne({username:req.body.username})
    if(!user) return res.json({status: 'user doesn\'t exists'})
    
    //Checking if password is valid
    const validPassword = await bcrypt.compareSync(req.body.password, user.password)
    if(!validPassword) return res.json({status:'incorrect password'})

    res.json({...user, status: 'logged in'})
})

module.exports = router