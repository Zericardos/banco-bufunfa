class CampoTextoCPF {
    constructor(idElement) {
        this.CampoEntrada = document.getElementById(idElement);
        this.CampoEntrada.value = '';
        this.timer = null;
        this.aviso = document.getElementById(`${idElement}-aviso`);
        this.aviso.classList.add("oculto");
        this.CampoEntrada.classList.remove("invalido");
        this.CampoEntrada.classList.remove("valido");
        this.tamanhoMaximoNumeros = 11;
        this.tamanhoMaximo = 15;
        // Tag que sinaliza se o campo foi preenchido corretamente ou não, para ser usada na validação do formulário
        this.Ok = false;
        this.tamanhoMaximoOk = false;
        //this.mensagemAvisoPadrao = `Apenas ${this.tamanhoMinimo} a ${this.tamanhoMaximo - 1} letras são permitidas.`;
        this.valorEntradaAntigo;
        this.valorEntrada;
        this.CampoEntrada.addEventListener(
            'input', () => {
                this.FormatarCPF();
                this.ValidarCPF();
            //this.CaracteresMaximos();
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.DesativarAvisoCaracteresMaximos();
                // Restaura a posição do cursor após a modificação
                //this.CampoEntrada.selectionEnd = posicaoAtualCursor
            },
            3000)
            }
        )
        this.EventoBlur(this.ValidarCPF);
        this.EventoBlur(this.ExporAvisoValido);
    }
    get #cpfSomenteNumeros() {
        return this.CampoEntrada.value.replace(/\D/g, '');
    }
    DesativarAvisoCaracteresMaximos = () => {
        this.aviso.classList.remove("visivel");
        this.aviso.classList.remove("caracteresmaximos");
        this.aviso.classList.add("oculto");
    }
    FormatarCPF = () => {
        // Formata o CPF usando a máscara padrão enquanto o usuário digita
        this.CaracteresMaximos();
        const posicaoAtualCursor = this.CampoEntrada.selectionStart;            
        this.CampoEntrada.value = this.CampoEntrada.value.replace(/\D/g, ''); // Remove tudo que não for dígito
        //var cpfFormatado = '';
        let cpfSomenteNumeros = this.CampoEntrada.value;
        if (this.CampoEntrada.value.length <= 3) {
            this.CampoEntrada.value = this.CampoEntrada.value.replace(/\D/g, '');
            this.CampoEntrada.selectionEnd = posicaoAtualCursor + 0;
        } else if (this.CampoEntrada.value.length <= 6) {
            this.CampoEntrada.value = `${this.CampoEntrada.value.slice(0, 3)}.${this.CampoEntrada.value.slice(3)}`;
            //this.CampoEntrada.selectionEnd = posicaoAtualCursor + 1;
        } else if (this.CampoEntrada.value.length <= 9) {
            //const posicaoAtualCursor = this.CampoEntrada.selectionStart;            
            this.CampoEntrada.value = `${this.CampoEntrada.value.slice(0, 3)}.${this.CampoEntrada.value.slice(3, 6)}.${this.CampoEntrada.value.slice(6)}`;
            //this.CampoEntrada.selectionEnd = posicaoAtualCursor + 2;
    } else {
            //const posicaoAtualCursor = this.CampoEntrada.selectionStart;            
            this.CampoEntrada.value = `${this.CampoEntrada.value.slice(0, 3)}.${this.CampoEntrada.value.slice(3, 6)}.${this.CampoEntrada.value.slice(6, 9)}-${this.CampoEntrada.value.slice(9, 11)}`;
            //this.CampoEntrada.selectionEnd = posicaoAtualCursor + 3;
        }
        //this.CampoEntrada.value = cpfFormatado;
    if (posicaoAtualCursor <= 3) {
        this.CampoEntrada.selectionEnd = posicaoAtualCursor + 0;
    } else if (posicaoAtualCursor <= 6) {
        this.CampoEntrada.selectionEnd = posicaoAtualCursor + 1;
    } else if (posicaoAtualCursor <= 9) {
        this.CampoEntrada.selectionEnd = posicaoAtualCursor + 2;
    } else {
        this.CampoEntrada.selectionEnd = posicaoAtualCursor + 3;
    }
    }

    EventoBlur = (fEB) => {
        this.CampoEntrada.addEventListener('blur', (ev) => {
            fEB()
        })
        }
    ExporAvisoValido = () => {
        if (this.Ok) {
            this.aviso.textContent = "CPF válido.";
            this.aviso.classList.add("visivel");
            this.aviso.classList.remove("invalido");
            this.aviso.classList.add("valido");
            this.aviso.classList.remove("oculto");
            this.CampoEntrada.classList.add("valido");
            this.CampoEntrada.classList.remove("invalido");
        } else {
            this.aviso.textContent = "CPF inválido.";
            this.aviso.classList.add("visivel");
            this.aviso.classList.remove("valido");
            this.aviso.classList.add("invalido");
            this.aviso.classList.remove("oculto");
            this.CampoEntrada.classList.add("invalido");
            this.CampoEntrada.classList.remove("valido");
        } 
    }

    ValidarCPF = () => {
        if (this.#cpfSomenteNumeros.length >= 11) {
            let Soma = 0;
            let Resto;
            const strCPF = this.#cpfSomenteNumeros.slice(0, 11);
            let valido = true;
            // Verifica se todos os dígitos são iguais
            if (/^(\d)\1{10}$/.test(strCPF)) valido = false;
            for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(9, 10))) valido = false;

            Soma = 0;
            for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
            Resto = (Soma * 10) % 11;
            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.substring(10, 11))) valido = false;

            this.Ok = valido;
        } else {
            this.Ok = false;
        }
    }
    CaracteresMaximos = () => {
        if (this.#cpfSomenteNumeros.length > this.tamanhoMaximoNumeros) {
            this.aviso.classList.add("visivel");
            this.aviso.classList.remove("oculto");
            this.aviso.textContent = 'Apenas 11 números são permitidos.';
            this.CampoEntrada.value = this.CampoEntrada.value.slice(0, this.tamanhoMaximo - 1);
            this.Ok = false;
        } else {
            this.aviso.classList.remove("visivel");
            this.aviso.classList.add("oculto");
            this.Ok = true;
        }
    }
    
}

const cPF = new CampoTextoCPF('cpf');
