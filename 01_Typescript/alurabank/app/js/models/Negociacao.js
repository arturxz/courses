System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, qtd, val) {
                    this.data = data;
                    this.qtd = qtd;
                    this.val = val;
                }
                get volume() {
                    return this.qtd * this.val;
                }
                paraTexto() {
                    console.log(`Data: ${this.data}
			 Qtd : ${this.qtd}
			 Val : ${this.val}
			 Vol : ${this.volume}`);
                }
                igual(neg) {
                    return this.data.getDate() == neg.data.getDate()
                        && this.data.getMonth() == neg.data.getMonth()
                        && this.data.getFullYear() == neg.data.getFullYear();
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
