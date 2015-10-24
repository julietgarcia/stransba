var config = {
    site: {
        url: 'http://localhost:3000',
        title: 'Translation System Basic',
        language: 'en',
        html: {
            engine: 'jade',
            minify: true
        }
    },
    application: {
        controllers: {
            default: 'index'
        },
        langs: ['en','es','ch'],
        languages: 'en|es|ch'
    }
};

module.exports = config;