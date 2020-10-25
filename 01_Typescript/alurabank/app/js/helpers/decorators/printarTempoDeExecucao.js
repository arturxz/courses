System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function printarTempoDeExecucao(emSegundos = false) {
        return function (target, propertyKey, descriptor) {
            let metodoOriginal = descriptor.value;
            let unidade = 'ms';
            let divisor = 1;
            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            descriptor.value = function (...args) {
                console.log('------------------------------');
                console.log(`Parâmetros recebidos pelo método ${propertyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método ${propertyKey} foi ${JSON.stringify(retorno)}`);
                console.log(`O método ${propertyKey} demorou ${((t2 - t1) / divisor) + unidade}`);
                console.log('------------------------------');
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("printarTempoDeExecucao", printarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
