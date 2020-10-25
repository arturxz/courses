import { printarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
	private _elemento: JQuery;
	private _escapa: boolean;

	constructor(seletor: string, escapa: boolean = false) {
		this._elemento = $(seletor);
		this._escapa = escapa;
	}

	abstract template(model: T): string;

	@printarTempoDeExecucao()
	update(model: T): void {
		let template = this.template(model);

		if( this._escapa ) {
			template = template.replace(/<script>[\s\S]*?<\/script>/, '');
		}

		this._elemento.html(template);
	}
}