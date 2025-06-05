import { Shipment } from '../models/Shipment.model';

export interface GetAllShipmentsResponseDto {
	shipments: Array<Shipment>;
}
