import { Shipment } from "../models/Shipment.model";
import { API } from "./api";

export namespace GetShipmentsList {
    export const api: API = {
        method: 'GET',
        path: '/warehouse/:warehouseId/shipment'
    }

    export interface ResponseDTO {
        shipments: Array<Shipment>;
    }
}
