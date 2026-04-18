const Astronomy = require('astronomy-engine')

const RASHI_LIST = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
]

// 27 nakshatras, each 13°20' = 13.333333... degrees
const NAKSHATRA_LIST = [
  'Ashwini',
  'Bharani',
  'Krittika',
  'Rohini',
  'Mrigashira',
  'Ardra',
  'Punarvasu',
  'Pushya',
  'Ashlesha',
  'Magha',
  'Purva Phalguni',
  'Uttara Phalguni',
  'Hasta',
  'Chitra',
  'Swati',
  'Vishakha',
  'Anuradha',
  'Jyeshtha',
  'Moola',
  'Purva Ashadha',
  'Uttara Ashadha',
  'Shravana',
  'Dhanishta',
  'Shatabhisha',
  'Purva Bhadrapada',
  'Uttara Bhadrapada',
  'Revati',
]

// Provided mappings (complete)
const varnaMap = {
  Aries: 'Kshatriya',
  Taurus: 'Vaishya',
  Gemini: 'Shudra',
  Cancer: 'Brahmin',
  Leo: 'Kshatriya',
  Virgo: 'Vaishya',
  Libra: 'Shudra',
  Scorpio: 'Brahmin',
  Sagittarius: 'Kshatriya',
  Capricorn: 'Vaishya',
  Aquarius: 'Shudra',
  Pisces: 'Brahmin',
}

const vashyaMap = {
  Aries: 'Chatushpada',
  Taurus: 'Chatushpada',
  Gemini: 'Manav',
  Cancer: 'Jalchar',
  Leo: 'Vanchar',
  Virgo: 'Manav',
  Libra: 'Manav',
  Scorpio: 'Jalchar',
  Sagittarius: 'Vanchar',
  Capricorn: 'Chatushpada',
  Aquarius: 'Manav',
  Pisces: 'Jalchar',
}

const ganaMap = {
  Ashwini: 'Deva',
  Bharani: 'Manushya',
  Krittika: 'Rakshasa',
  Rohini: 'Manushya',
  Mrigashira: 'Deva',
  Ardra: 'Manushya',
  Punarvasu: 'Deva',
  Pushya: 'Deva',
  Ashlesha: 'Rakshasa',
  Magha: 'Rakshasa',
  'Purva Phalguni': 'Manushya',
  'Uttara Phalguni': 'Manushya',
  Hasta: 'Deva',
  Chitra: 'Rakshasa',
  Swati: 'Deva',
  Vishakha: 'Rakshasa',
  Anuradha: 'Deva',
  Jyeshtha: 'Rakshasa',
  Moola: 'Rakshasa',
  'Purva Ashadha': 'Manushya',
  'Uttara Ashadha': 'Manushya',
  Shravana: 'Deva',
  Dhanishta: 'Rakshasa',
  Shatabhisha: 'Rakshasa',
  'Purva Bhadrapada': 'Manushya',
  'Uttara Bhadrapada': 'Manushya',
  Revati: 'Deva',
}

const nadiMap = {
  Ashwini: 'Aadi',
  Bharani: 'Madhya',
  Krittika: 'Antya',
  Rohini: 'Aadi',
  Mrigashira: 'Madhya',
  Ardra: 'Madhya',
  Punarvasu: 'Aadi',
  Pushya: 'Aadi',
  Ashlesha: 'Madhya',
  Magha: 'Aadi',
  'Purva Phalguni': 'Madhya',
  'Uttara Phalguni': 'Antya',
  Hasta: 'Aadi',
  Chitra: 'Madhya',
  Swati: 'Antya',
  Vishakha: 'Madhya',
  Anuradha: 'Antya',
  Jyeshtha: 'Madhya',
  Moola: 'Aadi',
  'Purva Ashadha': 'Madhya',
  'Uttara Ashadha': 'Antya',
  Shravana: 'Antya',
  Dhanishta: 'Madhya',
  Shatabhisha: 'Antya',
  'Purva Bhadrapada': 'Madhya',
  'Uttara Bhadrapada': 'Antya',
  Revati: 'Aadi',
}

const friendlyPairs = [
  ['Aries', 'Leo'],
  ['Leo', 'Sagittarius'],
  ['Sagittarius', 'Aries'],
  ['Taurus', 'Virgo'],
  ['Virgo', 'Capricorn'],
  ['Gemini', 'Libra'],
  ['Libra', 'Aquarius'],
  ['Cancer', 'Scorpio'],
  ['Scorpio', 'Pisces'],
]

function safe(val, def) {
  return val !== undefined ? val : def
}

function isPairInList(a, b, pairs) {
  return pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a))
}

function normalizeLon(lon) {
  let x = lon % 360
  if (x < 0) x += 360
  return x
}

function getMoonEclipticLongitudeDeg(date) {
  // Returns geocentric true-ecliptic-of-date longitude in degrees (0..360).
  // Note: Vedic astrology typically uses *sidereal* longitude (ayanamsa correction),
  // which requires an ayanamsa model (e.g. Lahiri). We are returning tropical longitude here.
  const t = Astronomy.MakeTime(date)
  const sph = Astronomy.EclipticGeoMoon(t)
  return normalizeLon(sph.lon)
}

function rashiFromMoonLon(lonDeg) {
  const idx = Math.floor(normalizeLon(lonDeg) / 30)
  return RASHI_LIST[Math.max(0, Math.min(11, idx))]
}

function nakshatraFromMoonLon(lonDeg) {
  const seg = 360 / 27 // 13.333333...
  const idx = Math.floor(normalizeLon(lonDeg) / seg)
  return NAKSHATRA_LIST[Math.max(0, Math.min(26, idx))]
}

function getVarna(boyRashi, girlRashi) {
  return varnaMap[boyRashi] === varnaMap[girlRashi] ? 1 : 0
}

function getVashya(boyRashi, girlRashi) {
  return vashyaMap[boyRashi] === vashyaMap[girlRashi] ? 2 : 1
}

function getTara(boyNak, girlNak) {
  const b = NAKSHATRA_LIST.indexOf(boyNak)
  const g = NAKSHATRA_LIST.indexOf(girlNak)
  if (b === -1 || g === -1) return 2
  const diff = Math.abs(b - g)
  return diff % 9 === 0 ? 3 : 2
}

function getYoni(boyNak, girlNak) {
  return boyNak === girlNak ? 4 : 2
}

function getGraha(boyRashi, girlRashi) {
  if (!boyRashi || !girlRashi) return 3
  if (boyRashi === girlRashi) return 5
  return isPairInList(boyRashi, girlRashi, friendlyPairs) ? 5 : 3
}

function getGana(boyNak, girlNak) {
  const b = safe(ganaMap[boyNak], 'Manushya')
  const g = safe(ganaMap[girlNak], 'Manushya')
  return b === g ? 6 : 3
}

function getBhakoot(boyRashi, girlRashi) {
  if (!boyRashi || !girlRashi) return 0
  return isPairInList(boyRashi, girlRashi, friendlyPairs) ? 7 : 0
}

function getNadi(boyNak, girlNak) {
  const b = safe(nadiMap[boyNak], 'Madhya')
  const g = safe(nadiMap[girlNak], 'Madhya')
  return b === g ? 0 : 8
}

function resultLabel(total) {
  if (total >= 30) return 'Excellent'
  if (total >= 20) return 'Good'
  if (total >= 18) return 'Average'
  return 'Needs Guidance'
}

function calculateGunaMilanFromBirth({ boy, girl }) {
  const boyDate = new Date(boy.datetime)
  const girlDate = new Date(girl.datetime)
  if (Number.isNaN(boyDate.getTime()) || Number.isNaN(girlDate.getTime())) {
    throw new Error('Invalid datetime. Use ISO 8601 strings, e.g. 1995-06-01T12:30:00+05:30')
  }

  const boyMoonLon = getMoonEclipticLongitudeDeg(boyDate)
  const girlMoonLon = getMoonEclipticLongitudeDeg(girlDate)

  const boyRashi = rashiFromMoonLon(boyMoonLon)
  const girlRashi = rashiFromMoonLon(girlMoonLon)
  const boyNak = nakshatraFromMoonLon(boyMoonLon)
  const girlNak = nakshatraFromMoonLon(girlMoonLon)

  const gunaData = [
    { koot: 'Varna', boy: varnaMap[boyRashi], girl: varnaMap[girlRashi], points: getVarna(boyRashi, girlRashi), maxPoints: 1 },
    { koot: 'Vashya', boy: vashyaMap[boyRashi], girl: vashyaMap[girlRashi], points: getVashya(boyRashi, girlRashi), maxPoints: 2 },
    { koot: 'Tara', boy: boyNak, girl: girlNak, points: getTara(boyNak, girlNak), maxPoints: 3 },
    { koot: 'Yoni', boy: boyNak, girl: girlNak, points: getYoni(boyNak, girlNak), maxPoints: 4 },
    { koot: 'Graha Maitri', boy: boyRashi, girl: girlRashi, points: getGraha(boyRashi, girlRashi), maxPoints: 5 },
    { koot: 'Gana', boy: safe(ganaMap[boyNak], 'Manushya'), girl: safe(ganaMap[girlNak], 'Manushya'), points: getGana(boyNak, girlNak), maxPoints: 6 },
    { koot: 'Bhakoot', boy: boyRashi, girl: girlRashi, points: getBhakoot(boyRashi, girlRashi), maxPoints: 7 },
    { koot: 'Nadi', boy: safe(nadiMap[boyNak], 'Madhya'), girl: safe(nadiMap[girlNak], 'Madhya'), points: getNadi(boyNak, girlNak), maxPoints: 8 },
  ]

  const total = gunaData.reduce((sum, x) => sum + (Number(x.points) || 0), 0)

  return {
    boy: { moonLongitude: boyMoonLon, rashi: boyRashi, nakshatra: boyNak },
    girl: { moonLongitude: girlMoonLon, rashi: girlRashi, nakshatra: girlNak },
    gunaData,
    total,
    label: resultLabel(total),
  }
}

module.exports = {
  calculateGunaMilanFromBirth,
}

