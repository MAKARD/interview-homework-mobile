import { Injectable } from '@nestjs/common';

import shipmentsAllMock from './mocks/shipments-all.mock.json';
import { Shipment } from '../models/Shipment.model';

@Injectable()
export class ShipmentRepository {
	constructor(private inMemoryShipments: Array<Shipment>) {
		this.inMemoryShipments = shipmentsAllMock as Array<Shipment>;
	}

	public getAllAsDetails(): Array<Shipment> {
		return this.inMemoryShipments;
	}
}
