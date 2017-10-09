// Create parameters
module.exports = function(){
	
	var param = {
		name: 'TELEGRAM_API_KEY',
		value: '123456789'
	};

	gladys.param.setValue(param);
		
	var param = {
		name: 'TELEGRAM_WEBHOOK_URL',
		value: 'POLLING'
	};

	gladys.param.setValue(param);
		
	var type = {
		name: 'Telegram',
		service: 'telegram'
	};

	return gladys.notification.install(type);
};
