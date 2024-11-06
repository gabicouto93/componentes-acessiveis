        function validarFormulario() {
            const form = document.forms['contatoForm'];
            const nome = form['nome'].value;
            const email = form['email'].value;
            const mensagem = form['mensagem'].value;

            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return false;
            }
            return true;
        }

        document.getElementById('contatoForm').onsubmit = validarFormulario;