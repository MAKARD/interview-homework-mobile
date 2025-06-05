import { Injectable } from '@nestjs/common';

import * as shipmentsAllMock from './mocks/shipments-all.mock.json';
import { Shipment } from '../models/Shipment.model';

@Injectable()
export class ShipmentRepository {
	private inMemoryShipments: Array<Shipment>;

	constructor() {
		this.inMemoryShipments = shipmentsAllMock as Array<Shipment>;
	}

	public getAllAsDetails(): Array<Shipment> {
		return this.inMemoryShipments;
	}
}
