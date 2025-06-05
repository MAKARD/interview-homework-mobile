import { Product } from './product.model';

export interface ShipmentItem {
	id: string;
	quantity: number;
	products: Array<Product>;
}
