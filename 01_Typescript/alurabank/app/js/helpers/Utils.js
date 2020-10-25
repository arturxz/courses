System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function imprime(...objects) {
        objects.forEach(obj => obj.paraTexto());
    }
    exports_1("imprime", imprime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
