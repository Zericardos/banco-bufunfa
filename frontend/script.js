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
    CaracteresMaximos = (tamanhoMaximo) => {
        this.CampoEntrada.addEventListener('input', (ev) => {
            if (this.CampoEntrada.value.length > tamanhoMaximo) {
                this.aviso.classList.add("visivel");
                this.aviso.classList.remove("oculto");
                this.aviso.textContent = `Apenas ${tamanhoMaximo} letras são permitidas.`
                this.CampoEntrada.value = this.CampoEntrada.value.slice(0, tamanhoMaximo);
            
            } else {
                this.aviso.classList.remove("visivel");
                this.aviso.classList.add("oculto");                
            }
        })
    }
};

const campoNome = new CampoTextoBufunfa('form-cadastro', 'nome');
campoNome.TransformarEntrada(CaixaAltaPrimeiraLetra, 500);
campoNome.ApenasLetras();
campoNome.CaracteresMaximos(40);
