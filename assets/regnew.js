//Проверка для одного поля
let errors = [];
let tel = document.getElementById('tel');

function checkValidity(input) {
	let validity = input.validity;

	if (validity.badInput) {
		errors.push('Ошибка заполнения поля ' + input.placeholder);
	}

	if (validity.customError) {
		errors.push('Ошибка в поле ' + input.placeholder);
	}

	if (validity.tooLong) {
		errors.push('Слишком длинный ввод в поле ' + input.placeholder);
	}

	if (validity.tooShort) {
		errors.push('Слишком короткий ввод в поле ' + input.placeholder);
	}

	if (validity.typeMismatch) {
		errors.push('Неверный формат заполнения поля ' + input.placeholder);
	}

	if (validity.valueMissing) {
		errors.push('Поле ' + input.placeholder + ' не заполнено');
	}

	if (validity.patternMismatch) {
		errors.push('Неверный формат заполнения поля ' + input.placeholder);
	}

	if (validity.rangeOverflow) {
		let max = input.max;
		errors.push('Максимальное значение не может быть больше чем ' + max);
	}

	if (validity.rangeUnderflow) {
		let min = input.min;
		errors.push('Минимальное значение не может быть больше чем ' + min);
	}

}

function checkTel() {
	let telFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
	if (tel.value.match(telFormat)) {
		return true
	} else {
		errors.push('Неверный формат заполнения поля ' + input.placeholder)
		return false
	}
}

//Проверка для всех полей
function checkAll() {
	//получаем все инпуты
	errors = [];
	let inputs = document.querySelectorAll("input");

	//перебираем их и на каждый вызываем функцию валидации
	for (let input of inputs) {
		checkValidity(input);
	}

	checkTel()
	//выводим ошибки в div 
	document.getElementById('errorsInfo').innerHTML = errors.join(',<br>');
}

