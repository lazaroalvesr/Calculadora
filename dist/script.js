"use strict";
class Calculadora {
    display;
    constructor() {
        this.display = document.querySelector('.display');
        this.inicia = () => {
            this.capturaEnter();
            this.capturaCliques();
        };
        this.capturaEnter = () => {
            document.addEventListener('keyup', (el) => {
                if (el.keyCode !== 13)
                    return;
                this.realizaConta();
            });
        };
        this.capturaCliques = () => {
            document.addEventListener('click', (event) => {
                const el = event.target;
                if (el.classList.contains('btn-num'))
                    this.addNumDisplay(el);
                if (el.classList.contains('btn-clear'))
                    this.clear();
                if (el.classList.contains('btn-del'))
                    this.del();
                if (el.classList.contains('btn-eq'))
                    this.realizaConta();
            });
        };
        this.realizaConta = () => {
            try {
                const conta = eval(this.display.value);
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }
                ;
                this.display.value = conta.toString();
            }
            catch (e) {
                alert('Conta invalida');
                return;
            }
            ;
        };
        this.addNumDisplay = (el) => {
            this.display.value += el.innerText;
            if (window.innerWidth > 600) {
                this.display.focus();
            }
            ;
        };
        this.clear = () => this.display.value = '';
        this.del = () => this.display.value = this.display.value.slice(0, -1);
    }
    ;
    inicia;
    capturaCliques;
    capturaEnter;
    realizaConta;
    addNumDisplay;
    clear;
    del;
}
const calculadora = new Calculadora();
calculadora.inicia();
//# sourceMappingURL=script.js.map