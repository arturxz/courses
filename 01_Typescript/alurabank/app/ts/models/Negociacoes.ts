import { printarTempoDeExecucao } from '../helpers/decorators/index';
import { Negociacao, MeuObjeto } from './index';

export class Negociacoes implements MeuObjeto<Negociacoes> {

	private _negociacoes: Negociacao[] = [];

	adiciona(negociacao: Negociacao) {
		this._negociacoes.push(negociacao);
	}

	@printarTempoDeExecucao(true)
	toArray(): Negociacao[] {
		return ([] as Negociacao[]).concat(this._negociacoes);
	}

	paraTexto(): void {
		console.log( JSON.stringify( this._negociacoes ) );
	}

	igual( neg: Negociacoes ) {
		return JSON.stringify( this._negociacoes ) == JSON.stringify( neg._negociacoes );
	}
}