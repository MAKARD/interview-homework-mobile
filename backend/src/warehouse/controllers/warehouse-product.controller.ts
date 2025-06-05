import {
	BadRequestException,
	Body,
	Controller,
	Delete,
	Param,
	Patch,
	Post,
} from '@nestjs/common';

import { WarehouseService } from '../services/warehouse.service';
import { UpdateProductRequestDto } from '../dto/update-product.request.dto';
import { CreateProductRequestDto } from '../dto/create-product.request.dto';
import { Product } from '../models/product.model';

@Controller('warehouse/:warehouseId/product')
export class WarehouseProductController {
	constructor(private readonly warehouseService: WarehouseService) {}

	@Delete('/:id')
	public async deleteOneById(
		@Param('warehouseId') warehouseId: string,
		@Param('id') id: string,
	): Promise<void> {
		const warehouse = await this.warehouseService.deleteOneProductById(
			warehouseId,
			id,
		);

		if (!warehouse) {
			throw new BadRequestException('No resource by given id');
		}
	}

	@Patch('/:id')
	public async updateOneById(
		@Param('warehouseId') warehouseId: string,
		@Param('id') id: string,
		@Body() updateProductDto: UpdateProductRequestDto,
	): Promise<void> {
		const warehouse = await this.warehouseService.updateOneProductById(
			warehouseId,
			id,
			updateProductDto,
		);

		if (!warehouse) {
			throw new BadRequestException('No resource by given id');
		}
	}

	@Post('/')
	public async createOne(
		@Param('warehouseId') warehouseId: string,
		@Body() createProductDto: CreateProductRequestDto,
	): Promise<Product> {
		const product = await this.warehouseService.createOneProduct(
			warehouseId,
			createProductDto,
		);

		if (!product) {
			throw new BadRequestException('No resource by given id');
		}

		return Promise.resolve(product);
	}
}
