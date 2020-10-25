import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao, NegociacaoParcial } from '../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

export class NegociacaoController {

	@domInject('#data')
	private _inputData: JQuery;

	@domInject('#quantidade')
	private _inputQuantidade: JQuery;

	@domInject('#valor')
	private _inputValor: JQuery;

	private _negociacoes = new Negociacoes(); 
	private _negociacoesView = new NegociacoesView('#negociacoesView');
	private _mensagemView = new MensagemView('#mensagemView');

	private _service = new NegociacaoService();

	constructor() {
		this._negociacoesView.update(this._negociacoes);
	}

	@throttle(500)
	adiciona() {

		// TRATANDO DATA
		let strData = this._inputData.val() as String;
		let arrData = strData.split('-');
		let data = new Date( parseInt(arrData[0]), parseInt(arrData[1]), parseInt(arrData[2]) );

		if( this._avaliaSeDiaUtil(data) ) {
			// SE FOR SEXTA OU SABADO
			this._mensagemView.update('As negociações só podem ser feitas em dias úteis.');
			return;
		}
		const negociacao = new Negociacao(
			data,
			parseInt( (this._inputQuantidade.val() as String).toString() ),
			parseFloat( (this._inputValor.val() as String).toString() )
		);
		
		imprime( negociacao );
		this._negociacoes.adiciona(negociacao);
		this._negociacoes.paraTexto();
		this._negociacoesView.update(this._negociacoes);
		this._mensagemView.update('Negociação adicionada com sucesso');
	}

	private _avaliaSeDiaUtil( data: Date ): boolean {
		if( data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo ) {
			return false;
		} else {
			return true;
		}
	}

	@throttle()
	async importaDados() {

		function isOk( res: Response ) {
			if( res.ok ) {
				return res;
			} else {
				throw new Error( res.statusText );
			}
		}

		try {
			const negociacoesParaImportar = await this._service
				.obterNegociacoes( isOk );

			const negociacoesJaImportadas = this._negociacoes.toArray();

			negociacoesParaImportar
				.filter(negociacao => 
					!negociacoesJaImportadas.some(jaImportada => 
						negociacao.igual(jaImportada)))
				.forEach(negociacao => 
				this._negociacoes.adiciona(negociacao));

			this._negociacoesView.update(this._negociacoes);

		} catch(err) {
			this._mensagemView.update(err.message);
		}
	}
}

enum DiaDaSemana {
	Domingo,
	Segunda,
	Terca,
	Quarta,
	Quinta,
	Sexta,
	Sabado
}