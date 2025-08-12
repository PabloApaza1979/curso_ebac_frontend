const form = document.getElementById('form-numeros');

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const campo1 = document.getElementById('campo-1');
    const campo2 = document.getElementById('campo-2');
    
    const mensagemErro = document.getElementById('error-message');
    const mensagemSucesso= document.querySelector('.success-message');

    const valorA = Number(campo1.value);
    const valorB = Number(campo2.value);

    if (valorB > valorA) {
        mensagemSucesso.innerHTML = `Sucesso! O valor B(<b>${valorB}</b>) é maior que o valor A(<b>${valorA}</b>)`;
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';
    } else {
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';

        campo1.classList.add('error');
        campo2.classList.add('error');
    }
});

