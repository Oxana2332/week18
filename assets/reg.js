function check() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let valide = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let tel = document.getElementById("tel");
    let validt = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    let chbox = document.getElementById('checkbox');
    let name = fname.value;
    let twoname = lname.value;

    document.getElementById('error').innerHTML = "";


    if (fname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите имя <br>";
        return false;
    }

    if (lname.value.length <= 0) {
        document.getElementById('error').innerHTML += "Пожалуйста, введите фамилию <br>";
        return false;
    }

    if (password.value.length <= 7) {
        document.getElementById('error').innerHTML += "Необходимо ввести пароль, состоящий не менее, чем из 8 символов <br>";
        return false;
    }
    else {

    }
    if (email.value.match(valide)) {

    }
    else {
        document.getElementById('error').innerHTML += "Необходимо ввести емейл<br>";
        return false;
    }

    if (tel.value.match(validt)) {

    }
    else {
        document.getElementById('error').innerHTML += "Необходимо ввести телефон<br>";
        return false;
    }

    if (chbox.checked) {
    }
    else {
        alert('Для завершения регистрации необходимо принять условия Пользовательского соглашения и дать согласие на обработку персональных данных');
        return false;
    }


    if (name, twoname) {
        alert('Добро пожаловать, ' + name + ' ' + twoname + '!');
    }
}