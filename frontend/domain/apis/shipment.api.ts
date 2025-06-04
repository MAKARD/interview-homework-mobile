import { Shipment } from "../models/Shipment.model";
import { API } from "./api";

export namespace GetShipmentsList {
    export const api: API = {
        method: 'GET',
        path: '/warehouse/:warehouseId/shipments'
    }

    export interface ResponseDTO {
        shipments: Array<Shipment>;
    }
}
