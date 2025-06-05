import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { WarehouseService } from '../services/warehouse.service';
import { GetAllWarehousesResponseDto } from '../dto/get-all-warehouses.response.dto';
import { GetWarehouseDetailsResponseDto } from '../dto/get-warehouse-details.response.dto';

@Controller('warehouse')
export class WarehouseController {
	constructor(private readonly warehouseService: WarehouseService) {}

	@Get('/')
	public async findAll(): Promise<GetAllWarehousesResponseDto> {
		const warehouses = await this.warehouseService.findAll();

		return {
			warehouses,
		};
	}

	@Get('/:id')
	public async findOneById(
		@Param('id') id: string,
	): Promise<GetWarehouseDetailsResponseDto> {
		const warehouse = await this.warehouseService.findOneById(id);

		if (!warehouse) {
			throw new BadRequestException('No resource by given id');
		}

		return warehouse;
	}
}
