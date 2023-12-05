const express = require('express')
const router = express.Router()
const [updateAddress, getAddress] = require('../controllers/profileController')
const [
    getProfile,
    updatePersonalInfo,
    updatePassword,
] = require('../controllers/userProfileController')
router.patch('/:userId/:addressType', updateAddress)
router.get('/:userId/address', getAddress)

router.get('/:userId', getProfile);
router.put('/personal-info/:userId', updatePersonalInfo);
router.put('/password/:userId', updatePassword);
module.exports = router