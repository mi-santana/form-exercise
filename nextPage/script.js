const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]');
const inputsRadio = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector('form');
const strong = document.querySelector('strong');
const iconError = document.querySelector('.uis-exclamation-triangle');
const iconSuccess = document.querySelector('.uis-check-circle');

function checkboxValidation() {
    for (let item of inputsCheckbox) {
        if (item.checked) {
            return true;
        }
    }
    alert('Selecione pelo menos uma opção de curso.');
}

function typingInputPassword() {
    if (form.password.value !== '') {
        form.password.classList.add('success');
        iconSuccess.classList.add('show-success');
        iconError.classList.remove('show-error');
        strong.textContent = '';
    }
}

function errorValidate() {
    if (form.password.value === '') {
        form.password.classList.add('error');
        iconError.classList.add('show-error');
        strong.textContent = 'A senha é obrigatória';

        form.password.classList.remove('success');
        iconSuccess.classList.remove('show-success');
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!checkboxValidation() || form.password.value === '') {
        errorValidate();
        return;
    }

    alert('Sua inscrição foi enviada com sucesso!');
    window.location.href = '../index.html';


});