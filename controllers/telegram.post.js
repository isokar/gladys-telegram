const shared = require('../lib/shared.js');

module.exports = function(req, res, next){
    shared.bot.processUpdate(req.body);
    res.status(200).json({});
};