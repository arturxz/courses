import { Negociacoes } from '../models/Negociacoes';
import { View } from './View';

export class NegociacoesView extends View<Negociacoes> {

	template(model: Negociacoes): string {

		return `
				<table class="table table-hover table-bordered">
					<thead>
						<tr>
							<th>DATA</th>
							<th>QUANTIDADE</th>
							<th>VALOR</th>
							<th>VOLUME</th>
						</tr>
					</thead>
	
					<tbody>
						${model.toArray().map(negociacao =>
			`
				<tr>
					<td>${negociacao.data.getDate()}/${negociacao.data.getMonth()}/${negociacao.data.getFullYear()}</td>
					<td>${negociacao.qtd}</td>
					<td>${negociacao.val}</td>
					<td>${negociacao.volume}</td>
				</tr>
			` ).join('')}
			</tbody>
				<tfoot>
				</tfoot>
			</table>`;
	}
}
