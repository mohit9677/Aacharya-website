const { calculateGunaMilanFromBirth } = require('../utils/gunaMilanCalculator')

// POST /api/guna-milan/calculate
exports.calculate = async (req, res, next) => {
  try {
    const { boy, girl } = req.body || {}
    if (!boy || !girl) {
      return res.status(400).json({ success: false, error: 'Missing boy/girl payload.' })
    }
    if (!boy.datetime || !girl.datetime) {
      return res.status(400).json({ success: false, error: 'Missing datetime for boy/girl.' })
    }

    // lat/lon are accepted for future topocentric extensions; current calc is geocentric.
    const result = calculateGunaMilanFromBirth({ boy, girl })
    return res.json({ success: true, data: result })
  } catch (err) {
    return next(err)
  }
}

