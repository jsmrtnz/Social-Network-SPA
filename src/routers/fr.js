const express = require('express')
const frCtrl = require('../controllers/fr')
const auth = require('../controllers/auth')

const router = new express.Router()
router.post('/api/fr', auth, frCtrl.sendFriendReq)
router.get('/api/fr', auth, frCtrl.frReceived)
router.delete('/api/fr', auth, frCtrl.acceptDecline)

module.exports = router