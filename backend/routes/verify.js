const router = require('express').Router()
const User = require('../model/User')

router.post('/', async (req, res)=>{
  //Checking if user exists
  const user = await User.findOne({username:req.body.username})
  if(!user) return res.json({status: 'user doesn\'t exists'})

  //Checking the password
  if(req.body.password === user.password) return res.json({status: 'logged in'})
  
  res.json({status: 'incorrect passwordS'})
})

module.exports = router