const form = document.querySelector('form');
const strong = document.querySelectorAll('strong');
const select = document.querySelector('select');
const iconError = document.querySelectorAll('.uis-exclamation-triangle');
const iconSuccess = document.querySelectorAll('.uis-check-circle');
const button = document.querySelector('.container button');

function typingInputName() {
    if (form.name.value !== '') {
        iconError[0].classList.remove('show-error');
        form.name.classList.add('success');
        iconSuccess[0].classList.add('show-success');
        strong[0].textContent = '';
    }
}

function typingInputEmail() {
    if (form.email.value !== '') {
        iconError[1].classList.remove('show-error');
        form.email.classList.add('success');
        iconSuccess[1].classList.add('show-success');
        strong[1].textContent = '';
    }
}

function typingInputBirthday() {
    if (form.birthday.value !== '') {
        iconError[2].classList.remove('show-error');
        form.birthday.classList.add('success');
        iconSuccess[2].classList.add('show-success');
        strong[2].textContent = '';
    }
}

function checkInputSelect() {
    if (select.options[select.selectedIndex].value !== 'empty') {
        select.classList.remove('error');
        select.classList.add('success');
        strong[3].textContent = '';
    } else {
        select.classList.remove('success');
    }
}

function errorValidate() {
    if (form.name.value === '') {
        form.name.classList.add('error');
        iconError[0].classList.add('show-error');
        strong[0].textContent = 'O nome é obrigatório';

        form.name.classList.remove('success');
        iconSuccess[0].classList.remove('show-success');
    }

    if (form.email.value === '') {
        form.email.classList.add('error');
        iconError[1].classList.add('show-error');
        strong[1].textContent = 'O e-mail é obrigatório';

        form.email.classList.remove('success');
        iconSuccess[1].classList.remove('show-success');
    }

    if (form.birthday.value === '') {
        form.birthday.classList.add('error');
        iconError[2].classList.add('show-error');
        strong[2].textContent = 'O ano de nascimento é obrigatório';

        form.birthday.classList.remove('success');
        iconSuccess[2].classList.remove('show-success');
    }

    if (select.options[select.selectedIndex].value === 'empty') {
        select.classList.add('error');
        strong[3].textContent = 'Escolha um local de prova';
    }
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (form.name.value === '' || form.email.value === '' || form.birthday.value === '' || select.options[select.selectedIndex].value === 'empty') {
        errorValidate();
        return;
    }

    if (form.email.value.indexOf('@') === -1 || form.email.value.indexOf('.') === -1) {
        form.email.classList.add('error');
        iconError[1].classList.add('show-error');
        strong[1].textContent = 'O e-mail não é válido';

        form.email.classList.remove('success');
        iconSuccess[1].classList.remove('show-success');
        return;
    }

    if (form.birthday.value < 1800) {
        form.birthday.classList.add('error');
        iconError[2].classList.add('show-error');
        strong[2].textContent = 'O ano de nascimento não é válido';
        form.birthday.classList.remove('success');
        iconSuccess[2].classList.remove('show-success');
        return;
    }

    const age = new Date().getFullYear() - form.birthday.value;

    if (age < 18) {
        form.birthday.classList.add('error');
        iconError[2].classList.add('show-error');
        form.birthday.classList.remove('success');
        iconSuccess[2].classList.remove('show-success');
        alert('Você precisa 17 anos ou mais para continuar.');
        return;
    }

    window.location.href = './nextPage/index.html';
});