
module.exports = function (sails) {

    const init = require('./lib/init.js');
    const notify = require('./lib/notify.js');
    const telegramController = require('./controllers/telegram.post.js');

    gladys.on('ready', function(){
        init().catch(sails.log.warn);
    });
      
    return {
        notify: notify,
        routes: {
            after: {
                'POST /telegram': telegramController
            }
        }
    };
};