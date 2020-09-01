const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../controllers/auth')
const uploadCtrl = require('../controllers/upload')

const router = new express.Router()
router.post('/api/signup', userCtrl.signUp)
router.post('/api/login', userCtrl.logIn)
router.post('/api/logout', auth, userCtrl.logout)
router.post('/api/logoutall', auth, userCtrl.logoutAll)
router.get('/api/validate_cookie', auth, userCtrl.validateCookie) // validate cookie with token
router.get('/api/user', auth, userCtrl.getUser)
router.get('/api/users', auth, userCtrl.getUsers)
router.get('/api/friends', auth, userCtrl.getFriends)
router.get('/api/user/meta', auth, userCtrl.getUserMeta)
router.get('/api/profile', auth, userCtrl.getProfile)
router.patch('/api/profile', auth, userCtrl.updateProfile)
router.delete('/api/profile', auth, userCtrl.deleteProfile)
router.delete('/api/friend', auth, userCtrl.deleteFriend)
router.post('/api/avatar', auth, uploadCtrl.single('avatar'), userCtrl.uploadAvatar, userCtrl.uploadFailed)
router.delete('/api/avatar', auth, userCtrl.deleteAvatar)

module.exports = router