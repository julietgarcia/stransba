var express = require('express');
var router = express.Router();
var languages = global.config.application.languages;


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: global.config.site.title, welcome: global.lang.site.welcome, hi: global.lang.site.hi });
});

router.get('/:lang('+ languages +')', function(req, res, next) {
    global.i18n.setLanguage(req.params.lang);

    res.render('index', { title: global.config.site.title, welcome: global.lang.site.welcome, hi: global.lang.site.hi });
});

module.exports = router;
