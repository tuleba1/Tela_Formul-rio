// validacoes.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmar-senha').value;
        const dataNascimento = document.getElementById('data-nascimento').value;

        // Validação da senha
        if (senha !== confirmarSenha) {
            event.preventDefault();
            alert('As senhas não conferem. Por favor, verifique.');
            return;
        }

        // Validação de idade
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;  // Ajusta se ainda não fez aniversário este ano
        }

        if (idade < 18) {
            event.preventDefault();
            alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        }
    });
});
