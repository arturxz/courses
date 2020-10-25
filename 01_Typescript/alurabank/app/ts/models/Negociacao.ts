import { MeuObjeto } from './index';

export class Negociacao implements MeuObjeto<Negociacao> {

	constructor(readonly data: Date, readonly qtd: number, readonly val: number) {}

	get volume() {
		return this.qtd * this.val;
	}

	paraTexto(): void{
		console.log(
			`Data: ${this.data}
			 Qtd : ${this.qtd}
			 Val : ${this.val}
			 Vol : ${this.volume}`
		);
	}

	igual(neg: Negociacao): boolean {
		return this.data.getDate() == neg.data.getDate()
			&& this.data.getMonth() == neg.data.getMonth()
			&& this.data.getFullYear() == neg.data.getFullYear();
	}
}