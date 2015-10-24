var express = require('express');
var router = express.Router();
var languages = global.config.application.languages;


/* GET home page. */
router.get('/:lang('+ languages +')', function(req, res, next) {
    global.i18n.setLanguage(req.params.lang);


  res.render('index', { welcome: global.lang.site.welcome });
});

module.exports = router;
