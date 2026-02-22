CaixaAltaPrimeiraLetra = (palavra) => {
//function CaixaAltaPrimeiraLetra(palavra) {
    if (palavra.length === 0) {
        return palavra;
    } else {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }
}

class CampoTextoSobrenomeBufunfa {
    constructor(formElement, idElement) {
        this.formulario = formElement;
        this.CampoEntrada = document.getElementById(idElement);
        this.CampoEntrada.value = '';
        this.timer = null;
        this.aviso = document.getElementById(`${idElement}-aviso`);
        this.aviso.classList.add("oculto");
        this.tamanhoMaximo = 121;
        this.tamanhoMaximoSobrenome = 40;
        this.tamanhoMinimo = 2;
        // Tag que sinaliza se o campo foi preenchido corretamente ou não, para ser usada na validação do formulário
        this.Ok = false;
        this.mensagemAvisoPadrao = `Apenas ${this.tamanhoMinimo} a ${this.tamanhoMaximo - 1} letras são permitidas.`;
        this.valorEntrada;
        this.listaSobrenomes;
        this.listaSobrenomesCaptalizados;
        this.CampoEntrada.addEventListener(
        'input', () => {
            const posicaoAtualCursor = this.CampoEntrada.selectionStart;
            this.CampoEntrada.value = this.CampoEntrada.value.replace('  ', ' ');
            this.CampoEntrada.selectionEnd = posicaoAtualCursor;
            this.valorEntrada = this.CampoEntrada.value;
            this.listaSobrenomes = this.valorEntrada.split(' ').filter(Boolean);
            this.listaSobrenomesCaptalizados = this.listaSobrenomes.map(sobrenome => this.CaracteresSemEspaco(sobrenome));
            this.CaracteresMaximos();
        }
    )
    }
    
    TransformarEntrada = (fn, delay) => {
        const context = this;
        let valorEntrada;
        let listaSobrenomes;
        let listaSobrenomesCaptalizados;
        this.CampoEntrada.addEventListener(
        'input',
        () => {
            // Salva a posição atual do cursor antes de modificar o valor
            const posicaoAtualCursor = this.CampoEntrada.selectionStart
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                valorEntrada = this.CampoEntrada.value;
                listaSobrenomes = valorEntrada.split(' ');
                listaSobrenomesCaptalizados = listaSobrenomes.map(sobrenome => fn(sobrenome));
                this.CampoEntrada.value = listaSobrenomesCaptalizados.join(' ');
                // Restaura a posição do cursor após a modificação
                this.CampoEntrada.selectionEnd = posicaoAtualCursor
            },
            delay)
        })
    }
    CaracteresMaximos = () => {
        const haAlgumSobrenomeMaiorQueMaximo = this.listaSobrenomes.some(sobrenome => sobrenome.length > this.tamanhoMaximoSobrenome);            
        if (this.CampoEntrada.value.length >= this.tamanhoMaximo) {
                this.aviso.classList.add("visivel");
                this.aviso.classList.remove("oculto");
                this.aviso.textContent = this.mensagemAvisoPadrao;
                this.CampoEntrada.value = this.CampoEntrada.value.slice(0, this.tamanhoMaximo - 1);
                this.Ok = false;
        } // US1.4 (CA03):
        else if (haAlgumSobrenomeMaiorQueMaximo) {
            this.aviso.classList.add("visivel");
            this.aviso.classList.remove("oculto");
            this.aviso.textContent = `Apenas ${this.tamanhoMaximoSobrenome} caracteres são aceitos por sobrenome.`;
            const indexSobrenomeMaiorQueMaximo = this.listaSobrenomes.findIndex(sobrenome => sobrenome.length > this.tamanhoMaximoSobrenome);
            if (indexSobrenomeMaiorQueMaximo == this.listaSobrenomes.length - 1) {
                this.CampoEntrada.value = this.listaSobrenomes.slice(0, indexSobrenomeMaiorQueMaximo).concat(this.listaSobrenomes[indexSobrenomeMaiorQueMaximo].slice(0, -1)).join(' ');
            } else if (indexSobrenomeMaiorQueMaximo == 0) {
                this.CampoEntrada.value = this.listaSobrenomes[indexSobrenomeMaiorQueMaximo].slice(0, -1).concat(this.listaSobrenomes.slice(indexSobrenomeMaiorQueMaximo + 1)).joint(' ');
            } else {
                this.CampoEntrada.value = this.listaSobrenomes.slice(0, indexSobrenomeMaiorQueMaximo).concat(this.listaSobrenomes[indexSobrenomeMaiorQueMaximo].slice(0, -1)).concat(this.listaSobrenomes.slice(indexSobrenomeMaiorQueMaximo + 1)).join(' ');
            }
            this.Ok = false;
            } else {
                this.aviso.classList.remove("visivel");
                this.aviso.classList.add("oculto");
                this.Ok = true;
            }
        }

    CaracteresMinimos = () => {
        let valorEntrada;
        let listaSobrenomes;
        let listaSobrenomesCaptalizados;

        this.CampoEntrada.addEventListener('blur', (ev) => {
            // Tamanho absoluto do campo de sobrenome, sem considerar os espaços
            valorEntrada = this.CampoEntrada.value;
            listaSobrenomes = valorEntrada.split(' ');
            const tamanhoListaSobrenomes = listaSobrenomes.reduce(
                (accumulator, currentValue) => {
                    return accumulator + currentValue.length;
                }, 0
            );
            const haAlgumSobrenomeMenorQueMinimo = listaSobrenomes.filter(Boolean).some(sobrenome => sobrenome.length < this.tamanhoMinimo);
            switch (true) {
                // US1.4 (CA02): O sistema deve validar se o sobrenome informado possui pelo menos 2 caracteres, desconsiderando os espaços. Caso haja mais de um sobrenome, cada um deles deve possuir pelo menos 2 caracteres.
                case (tamanhoListaSobrenomes < this.tamanhoMinimo):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Pelo menos ${this.tamanhoMinimo} letras devem ser informadas por Sobrenome.`
                    this.Ok = false;
                    break;
                case (haAlgumSobrenomeMenorQueMinimo):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Pelo menos ${this.tamanhoMinimo} letras devem ser informadas por Sobrenome.`
                    this.Ok = false;
                    break;
                default:
                    this.aviso.classList.remove("visivel");
                    this.aviso.classList.add("oculto");
                    this.Ok = true;
                    break;
            }
        })
    }

    CaracteresSemEspaco = (sobrenome) => {
        const regexEspaco = /\s/g;
        const regexCaractereEspecial = /[^A-Za-z0-9\s]/;
        // ^\w = não letras/números/underscore; ^\s = não espaço
        const regexNumeros = /\d/g;
        
        this.CampoEntrada.addEventListener('input', (ev) => {
            switch (true) {
                case (regexEspaco.test(sobrenome)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Espaços não são permitidos. ${this.mensagemAvisoPadrao}`
                    sobrenome = sobrenome.replace(regexEspaco, '');
                    break;
                case (regexCaractereEspecial.test(sobrenome)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Caracteres especiais não são permitidos. ${this.mensagemAvisoPadrao}`
                    sobrenome = sobrenome.replace(regexCaractereEspecial, '');
                    break;
                case (regexNumeros.test(sobrenome)):
                    this.aviso.classList.add("visivel");
                    this.aviso.classList.remove("oculto");
                    this.aviso.textContent = `Números não são permitidos. ${this.mensagemAvisoPadrao}`
                    sobrenome = sobrenome.replace(regexNumeros, '');
                    break;
                default:
                    if (this.Ok) {
                        this.aviso.classList.remove("visivel");
                        this.aviso.classList.add("oculto");
                    }
                    break;
                //return sobrenome;
            }
        })
    }
}

const campoSobrenome = new CampoTextoSobrenomeBufunfa('form-cadastro', 'sobrenome');
campoSobrenome.TransformarEntrada(CaixaAltaPrimeiraLetra, 500);
campoSobrenome.CaracteresMinimos();
