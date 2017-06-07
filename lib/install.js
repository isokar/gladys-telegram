
module.exports = function(){
	
	var type = {
		name: 'Telegram',
		service: 'telegram'
	};

	return gladys.notification.install(type);
};