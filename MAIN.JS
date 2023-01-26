const form = document.getElementById('form');
const numeroA = document.getElementById('campoA');
const numeroB = document.getElementById('campoB');
let formEValido = false;

function validaForm(aMenor, bMaior) {
    const bMenosA = bMaior - aMenor;
    return bMenosA > 0;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = `Parabéns! Você preencheu corretamente: O campo B: <b>${numeroB.value}</b>, é maior que o campo A: <b>${numeroA.value}</b>`;

    formEValido = validaForm(numeroA.value, numeroB.value)
    const containerMensagemSucesso = document.querySelector('.success-message');

    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        numeroA.style.border = '1px solid';
        numeroB.style.border = '1px solid';

        numeroA.value = '';
        numeroB.value = '';
    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

        numeroA.value = '';
        numeroB.value = '';
    }
})
