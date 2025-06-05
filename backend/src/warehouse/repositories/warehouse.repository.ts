import { Injectable } from '@nestjs/common';

import warehouseAllMock from './mocks/warehouse-all.mock.json';
import { Warehouse } from '../models/warehouse.model';
import { WarehouseItem } from '../models/Warehouse-item.model';

@Injectable()
export class WarehouseRepository {
	constructor(private inMemoryWarehouses: Array<Warehouse>) {
		this.inMemoryWarehouses = warehouseAllMock;
	}

	public getAllAsItems(): Array<WarehouseItem> {
		return this.inMemoryWarehouses.map((warehouse) => ({
			id: warehouse.id,
			name: warehouse.name,
		}));
	}

	public getAllAsDetails(): Array<Warehouse> {
		return this.inMemoryWarehouses;
	}

	public getOneById(id: string): Warehouse {
		const warehouse = this.inMemoryWarehouses.find(
			(warehouse) => warehouse.id === id,
		);

		return warehouse;
	}
}
