CaixaAltaPrimeiraLetra = (palavra) => {
//function CaixaAltaPrimeiraLetra(palavra) {
    if (palavra.length === 0) {
        return palavra;
    } else {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }
}
class CampoTextoBufunfa {
    constructor(formElement, idElement) {
        this.formulario = formElement;
        this.CampoEntrada = document.getElementById(idElement);
        this.CampoEntrada.value = '';
        this.timer = null;
        this.aviso = document.getElementById(`${idElement}-aviso`);
        this.aviso.classList.add("oculto");
        this.tamanhoMaximo = 41;
        this.tamanhoMinimo = 2;
        // Tag que sinaliza se o campo foi preenchido corretamente ou não, para ser usada na validação do formulário
        this.Ok = false;
        this.mensagemAvisoPadrao = `Apenas ${this.tamanhoMinimo} a ${this.tamanhoMaximo - 1} letras são permitidas.`;
    }
    
    TransformarEntrada = (fn, delay) => {
        const context = this;
        this.CampoEntrada.addEventListener(
        'input',
        () => {
            // Salva a posição atual do cursor antes de modificar o valor
            const posicaoAtualCursor = this.CampoEntrada.selectionStart
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.CampoEntrada.value = fn(this.CampoEntrada.value);
                // Restaura a posição do cursor após a modificação
                this.CampoEntrada.selectionEnd = posicaoAtualCursor
            },
            delay)
        })
    }
    ApenasLetras = () => {
    this.CampoEntrada.addEventListener('input', () => {
        let s = this.CampoEntrada.value.normalize('NFC');
        try {
            this.CampoEntrada.value = s.replace(/[^\p{L}\p{M}]+/gu, '');
        } catch (e) {
            this.CampoEntrada.value = s.replace(/[^A-Za-zÀ-ÖØ-öø-ÿĀ-ž]+/g, '');
        }
        }
    )
    }    
    CaracteresMaximos = () => {
        this.CampoEntrada.addEventListener('input', (ev) => {
            if (this.CampoEntrada.value.length >= this.tamanhoMaximo - 1) {
                this.aviso.classList.add("visivel");
                this.aviso.classList.remove("oculto");
                this.aviso.textContent = this.mensagemAvisoPadrao;
                this.CampoEntrada.value = this.CampoEntrada.value.slice(0, this.tamanhoMaximo - 1);
                this.Ok = false;
            } else {
                this.aviso.classList.remove("visivel");
                this.aviso.classList.add("oculto");
                this.Ok = true;
            }
        })
    }

    CaracteresMinimos = () => {
        this.CampoEntrada.addEventListener('blur', (ev) => {
            if (this.CampoEntrada.value.length < this.tamanhoMinimo) {
                this.aviso.classList.add("visivel");
                this.aviso.classList.remove("oculto");
                this.aviso.textContent = `Pelo menos ${this.tamanhoMinimo} letras devem ser informadas.`
                this.CampoEntrada.value = this.CampoEntrada.value.slice(0, this.tamanhoMinimo);
                this.Ok = false;
            } else {
                this.aviso.classList.remove("visivel");
                this.aviso.classList.add("oculto");
                this.Ok = true;
            }
        })
    }

    CaracteresSemEspaco = () => {
        const regexEspaco = /\s/g;
        const regexCaractereEspecial = /[^A-Za-z0-9\s]/;
        // ^\w = não letras/números/underscore; ^\s = não espaço
        const regexNumeros = /\d/g;
        
        this.CampoEntrada.addEventListener('input', (ev) => {
            switch (true) {
                case (regexEspaco.test(this.CampoEntrada.value)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Espaços não são permitidos. ${this.mensagemAvisoPadrao}`
                    this.CampoEntrada.value = this.CampoEntrada.value.replace(regexEspaco, '');
                    break;
                case (regexCaractereEspecial.test(this.CampoEntrada.value)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Caracteres especiais não são permitidos. ${this.mensagemAvisoPadrao}`
                    this.CampoEntrada.value = this.CampoEntrada.value.replace(regexCaractereEspecial, '');
                    break;
                case (regexNumeros.test(this.CampoEntrada.value)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Números não são permitidos. ${this.mensagemAvisoPadrao}`
                    this.CampoEntrada.value = this.CampoEntrada.value.replace(regexNumeros, '');
                    break;
                default:
                    if (this.Ok) {
                        this.aviso.classList.remove("visivel");
                        this.aviso.classList.add("oculto");
                    }
                    break;
            }
        })
    }
}
const campoNome = new CampoTextoBufunfa('form-cadastro', 'nome');
campoNome.TransformarEntrada(CaixaAltaPrimeiraLetra, 500);
//campoNome.ApenasLetras();
campoNome.CaracteresMaximos();
campoNome.CaracteresMinimos();
campoNome.CaracteresSemEspaco();
