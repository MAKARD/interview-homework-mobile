import { Product } from './product.model';

export interface Warehouse {
	id: string;
	name: string;
	products: Array<Product>;
}
