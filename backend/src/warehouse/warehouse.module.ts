import { Module } from '@nestjs/common';

import { WarehouseController } from './controllers/warehouse.controller';
import { WarehouseProductController } from './controllers/warehouse-product.controller';
import { WarehouseShipmentController } from './controllers/warehouse-shipment.controller';

import { WarehouseService } from './services/warehouse.service';
import { ShipmentService } from './services/shipment.service';

import { ShipmentRepository } from './repositories/shipment.repository';
import { WarehouseRepository } from './repositories/warehouse.repository';

@Module({
	imports: [],
	controllers: [
		WarehouseController,
		WarehouseProductController,
		WarehouseShipmentController,
	],
	providers: [
		WarehouseService,
		ShipmentService,
		ShipmentRepository,
		WarehouseRepository,
	],
})
export class WarehouseModule {}
