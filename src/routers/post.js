const express = require('express')
const postCtrl = require('../controllers/post')
const auth = require('../controllers/auth')
const uploadCtrl = require('../controllers/upload')

const router = new express.Router()
router.post('/api/posts', auth, uploadCtrl.single('post'), postCtrl.createPost, postCtrl.uploadFailed)
router.get('/api/posts', auth, postCtrl.getPosts)
router.get('/api/timeline', auth, postCtrl.viewTimeline)
router.post('/api/posts/like', auth, postCtrl.likePost)
router.patch('/api/posts', auth, uploadCtrl.single('post'), postCtrl.updatePost, postCtrl.uploadFailed)
router.delete('/api/posts', auth, postCtrl.deletePost)

module.exports = router