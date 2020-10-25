System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(timeout = 500) {
        return function (target, propertyKey, descriptor) {
            let metodoOriginal = descriptor.value;
            let timer = 0;
            clearTimeout(timer);
            descriptor.value = function (...args) {
                if (event) {
                    event.preventDefault();
                }
                let retorno;
                clearTimeout(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), timeout);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
