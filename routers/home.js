const {Router} = require('express');
const router = Router();
const os = require('os');



router.post('/', (req, res) => {
    let formData = req.body.visitor;
   os.userInfo().username === formData ? res.redirect('/true.html') : res.redirect('/false.html');
   res.redirect('/true.html');
})



module.exports = router;