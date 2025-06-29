const express = require('express');
const { googleSignIn } = require('../controllers/auth.controller');

const router = express.Router();

router.get('/test', (req, res) => {
  res.send('✅ Backend working!');
});

//google sign-in
router.post('/google-sign-in', googleSignIn);

module.exports = router;