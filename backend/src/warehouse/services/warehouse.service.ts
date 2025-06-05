import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { WarehouseItem } from '../models/warehouse-item.model';
import { Warehouse } from '../models/warehouse.model';
import { WarehouseRepository } from '../repositories/warehouse.repository';
import { Product } from '../models/product.model';

@Injectable()
export class WarehouseService {
	constructor(private readonly warehouseRepository: WarehouseRepository) {}

	public async findAll(): Promise<Array<WarehouseItem>> {
		return Promise.resolve(this.warehouseRepository.getAllAsItems());
	}

	public async findOneById(id: string): Promise<Warehouse | void> {
		const warehouse = this.warehouseRepository
			.getAllAsDetails()
			.find((warehouse) => warehouse.id === id);

		return Promise.resolve(warehouse);
	}

	public async deleteOneProductById(
		warehouseId: string,
		id: string,
	): Promise<Warehouse | void> {
		const warehouse = this.warehouseRepository.getOneById(warehouseId);

		if (!warehouse) {
			return Promise.resolve();
		}

		warehouse.products = warehouse.products.filter(
			(product) => product.id !== id,
		);

		return Promise.resolve(warehouse);
	}

	public updateOneProductById(
		warehouseId: string,
		id: string,
		updatedProduct: Partial<Product>,
	): Promise<Warehouse | void> {
		const warehouse = this.warehouseRepository.getOneById(warehouseId);

		if (!warehouse) {
			return Promise.resolve();
		}

		const product = warehouse.products.find((product) => product.id === id);

		if (!product) {
			return Promise.resolve();
		}

		product.description = updatedProduct.description ?? product.description;
		product.imageUrl = updatedProduct.imageUrl ?? product.imageUrl;
		product.name = updatedProduct.name ?? product.name;
		product.quantity = updatedProduct.quantity ?? product.quantity;
		product.unitPrice = updatedProduct.unitPrice ?? product.unitPrice;

		return Promise.resolve(warehouse);
	}

	public createOneProduct(
		warehouseId: string,
		product: Omit<Product, 'id'>,
	): Promise<Product | void> {
		const warehouse = this.warehouseRepository.getOneById(warehouseId);

		if (!warehouse) {
			return Promise.resolve();
		}

		const createdProduct = {
			...product,
			id: uuidv4(),
		};

		warehouse.products.push(createdProduct);

		return Promise.resolve(createdProduct);
	}
}
