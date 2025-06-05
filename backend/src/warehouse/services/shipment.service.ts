import { Injectable } from '@nestjs/common';

import { ShipmentRepository } from '../repositories/shipment.repository';
import { Shipment } from '../models/Shipment.model';

@Injectable()
export class ShipmentService {
	constructor(private readonly shipmentRepository: ShipmentRepository) {}

	public async findAll(): Promise<Array<Shipment>> {
		return Promise.resolve(this.shipmentRepository.getAllAsDetails());
	}
}
