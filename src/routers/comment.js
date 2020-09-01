const express = require('express')
const commentCtrl = require('../controllers/comment')
const auth = require('../controllers/auth')

const router = new express.Router()
router.post('/api/comments', auth, commentCtrl.createComment)
router.get('/api/comments', auth, commentCtrl.getComments)
router.patch('/api/comments', auth, commentCtrl.updateComment)
router.delete('/api/comments', auth, commentCtrl.deleteComment)

module.exports = router
