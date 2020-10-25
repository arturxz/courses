System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(seletor) {
        return function (target, key) {
            let elemento;
            const getter = function () {
                if (!elemento) {
                    elemento = $(seletor);
                }
                console.log(`buscando ${seletor} o valor ${elemento.val()} para injetar em ${key}`);
                return elemento;
            };
            Object.defineProperty(target, key, {
                get: getter
            });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
