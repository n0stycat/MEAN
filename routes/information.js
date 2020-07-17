const express = require('express')
const passport = require('passport')
const controller = require('../controllers/information')
const router = express.Router()

router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview)
router.get('/information', passport.authenticate('jwt', {session: false}), controller.information)


module.exports = router