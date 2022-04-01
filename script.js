const buttonLogin = document.querySelector('.btn-login');
const emailInput = document.querySelector('.email-login-input');
const passwordInput = document.querySelector('.password-login-input');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');
const textareaInput = document.getElementById('textarea');
const counterLenthTextArea = document.getElementById('counter');

buttonLogin.addEventListener('click', () => {
    if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
});

agreementCheckbox.addEventListener('change', (event) => {
    formSubmitButton.disabled = !event.target.checked;
});

textareaInput.addEventListener('input', () => {
    counterLenthTextArea.innerText = 500 - textareaInput.value.length;
});

function createTextElement(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
}

function createCheckboxText() {
    const checkboxSelectedArray = document.querySelectorAll('input[name="content"]:checked');
    const selectedArray = [];

    for (let index = 0; index < checkboxSelectedArray.length; index += 1) {
        selectedArray.push(checkboxSelectedArray[index].value);
    }

    return selectedArray.join(', ');
}

function createObjectOfForm() {
    const firstName = document.getElementById('input-name').value;
    const lastName = document.getElementById('input-lastname').value;
    const fullName = `${firstName} ${lastName}`;

    const formObj = {
        fullName,
        email: document.getElementById('input-email').value,
        house: document.getElementById('house').value,
        family: document.querySelector('input[name="family"]:checked').value,
        checkbox: createCheckboxText(),
        avaliationRate: document.querySelector('input[name="rate"]:checked').value,
        textareaText: document.getElementById('textarea').value,
    };
    return formObj;
}

formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const form = document.getElementById('evaluation-form');
    const formObj = createObjectOfForm();

    form.innerHTML = null;

    form.appendChild(createTextElement('p', `Nome: ${formObj.fullName}`));
    form.appendChild(createTextElement('p', `Email: ${formObj.email}`));
    form.appendChild(createTextElement('p', `Casa: ${formObj.house}`));
    form.appendChild(createTextElement('p', `Família: ${formObj.family}`));
    form.appendChild(createTextElement('p', `Matérias: ${formObj.checkbox}`));
    form.appendChild(createTextElement('p', `Avaliação: ${formObj.avaliationRate}`));
    form.appendChild(createTextElement('p', `Observações: ${formObj.textareaText}`));
});