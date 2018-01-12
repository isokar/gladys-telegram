// Create parameters
module.exports = function(){
	
	var param1 = {
		name: 'TELEGRAM_API_KEY',
		value: '123456789'
	};
	var param2 = {
		name: 'TELEGRAM_WEBHOOK_URL',
		value: 'POLLING'
	};
	var userparam = {
		name: 'TELEGRAM_CHAT_ID',
		value: '1234'
	};
	var type = {
		name: 'Telegram',
		service: 'telegram'
	};
	//we create the notification
	return gladys.notification.install(type)
		.then(() => {
			//then we check if the parameters exists
			return gladys.param.getValues([param1.name, param2.name])
				.catch(() => {
					//is they doesn't, we create them
					return gladys.param.setValue(param1)
						.then(() => gladys.param.setValue(param2));
				});
		})
		.then(() => {
			gladys.user.get()
				.then((users) =>{
					return Promise.map(users, function(user){
						return gladys.paramUser.getValue(userparam.name,user.id)
							.catch(() => {
								//is they doesn't, we create them
								return gladys.paramUser.setValue(userparam);
							});
					});
				});
		});
};
