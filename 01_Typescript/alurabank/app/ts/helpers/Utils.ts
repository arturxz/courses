import { Imprimivel } from '../models/index';

export function imprime(...objects: Imprimivel[]) {
    objects.forEach(obj => obj.paraTexto());
}