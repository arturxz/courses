export function domInject(seletor: string) {
	return function(target: any, key: string) {

		let elemento: JQuery;
		const getter = function() {
			if( !elemento ) {
				elemento = $(seletor);
			}
			console.log(`buscando ${seletor} o valor ${elemento.val()} para injetar em ${key}`);
			return elemento;
		}

	Object.defineProperty(target, key, {
		get: getter
	});
	}
}