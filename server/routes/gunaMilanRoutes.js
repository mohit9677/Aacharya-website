const router = require('express').Router()
const { calculate } = require('../controllers/gunaMilanController')

// POST /api/guna-milan/calculate
router.post('/calculate', calculate)

module.exports = router

