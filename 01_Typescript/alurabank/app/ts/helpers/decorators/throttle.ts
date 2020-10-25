export function throttle(timeout = 500) {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	
		let metodoOriginal = descriptor.value;
		
		let timer = 0;
		clearTimeout(timer);
		descriptor.value = function(...args: any[]) {
			
			if( event ) {
				event.preventDefault();
			}

			let retorno: any;
			clearTimeout(timer);
			timer = setTimeout(() => metodoOriginal.apply(this, args), timeout );

			return retorno;
		}
		
		return descriptor;
	}
}