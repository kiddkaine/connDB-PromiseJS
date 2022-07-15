const databasePromise = new Promise ((resolve, reject) => {

	console.log('----- База данных -----');

	setTimeout(() => {
		const response = true;

		if (response) {
			let message = '*** Подключение к базе данных прошло успешно! ***';
			resolve(message);
		} else {
			let message = '*** Ошибка при подключении к базе данных ***';
			reject(message);
		}
	}, 1000);
	
});

databasePromise.then((data) => {

	console.log(data);

	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const response = true;

			if (response) {
				let message = '%+ Вы авторизованы! +%';
				resolve(message);
			} else {
				let message = '%+ Неверный логин или пароль! +%';
				reject(message);
			}
		}, 1000);
	});

}).then((data) => {

	console.log(data);

	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const response = true;

			if (response) {
				let message = '!? Доступ разрешён! ?!';
				resolve(message);
			} else {
				let message = '!? Ваш аккаунт заблокирован! ?!';
				reject(message);
			}
		}, 1000);
	});

}).then((data) => {

	console.log(data);

	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			const response = true;

			if (response) {
				let message = '.- Изменения прошли успешно! -.';
				resolve(message);
			} else {
				let message = '.- Ошибка редактирования данных! -.';
				reject(message);
			}
		}, 1000);
	});

}).then((data) => console.log(data)).catch((data) => console.log(data));