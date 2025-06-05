import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

import { GetAllShipmentsResponseDto } from '../dto/get-all-shipments.response.dto';
import { WarehouseService } from '../services/warehouse.service';
import { ShipmentService } from '../services/shipment.service';

@Controller('warehouse/:warehouseId/shipment')
export class WarehouseShipmentController {
	constructor(
		private readonly shipmentService: ShipmentService,
		private readonly warehouseService: WarehouseService,
	) {}

	@Get('/')
	public async findAll(
		@Param('warehouseId') warehouseId: string,
	): Promise<GetAllShipmentsResponseDto> {
		const warehouse = await this.warehouseService.findOneById(warehouseId);

		if (!warehouse) {
			throw new BadRequestException('No resource by given id');
		}

		const shipments = await this.shipmentService.findAll();

		return {
			shipments,
		};
	}
}
