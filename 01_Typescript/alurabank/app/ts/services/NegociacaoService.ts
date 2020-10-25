import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

	obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

		let retorno = fetch('http://localhost:8080/dados')
						.then(res => handler(res))
						.then(res => res.json())
						.then((dados: NegociacaoParcial[]) => 
							dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))

						)
						.catch(err => {
							console.log(err);
							throw new Error('Não foi possível importar as negociações');
						});

		return < Promise<Negociacao[]> > retorno;
	}
}

// INTERFACE QUE RECEBA UMA FUNÇÃO QUE RECEBE UM RESPONSE COMO PARAMETRO
// E RETORNA UM RESPONSE COMO RESPOSTA
export interface HandlerFunction {
	(res: Response): Response;
}