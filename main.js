const mainPromise = new Promise ((resolve, reject) => {
	console.log('--- Подключение к базе данных ---');
	setTimeout(() =>{
		const connectDataBase = false;
		if (connectDataBase) {
			let message = '*+ Подключение прошло успешно! +*';
			resolve(message);
		} else {
			let message = '*+ Ошибка подключения к базе данных! +*';
			reject(message);
		}
	}, 1000);
}).then((data) => console.log(data)).catch((data) => console.log(data));