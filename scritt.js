const avanca = document.querySelectorAll(',btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelectorI('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        ataual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })

})