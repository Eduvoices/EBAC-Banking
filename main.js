const form = document.getElementById('form-deposito')
const nomeBenef = document.getElementById('nome-benef')
let formValido = false


function validaNome(nomeCompleto) {
    const nomeArray =  nomeCompleto.split(' ')
    return nomeArray.length >= 2
}

form.addEventListener('submit', function(e) {

    e.preventDefault()

    const noConta = document.getElementById('numero-conta')
    const valorDep = document.getElementById('valor-dep')
    const mensagemSucesso = `Montante de: R$ <b>${valorDep.value}</b> depositado para o cliente: <b>${nomeBenef.value}</b>  - conta:  <b>${noConta.value}</b>`;
    
    formValido = validaNome(nomeBenef.value)

    if (formValido) {
        const containerMsg = document.querySelector('.sucesso')
        containerMsg.innerHTML = mensagemSucesso
        containerMsg.style.display = 'block'


        nomeBenef.value = ''
        valorDep.value = ''
        noConta.value = ''
    } else {
        nomeBenef.style.border = '1px solid red'
        document.querySelector('.error').style.display = 'block';
    }

})

nomeBenef.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formValido = validaNome(e.target.value)

    if(!formValido) {
        nomeBenef.classList.add('input-error')
        document.querySelector('.error').style.display = 'block';
    } else {
        nomeBenef.classList.remove('input-error')
        document.querySelector('.error').style.display = 'none';

    }

})
