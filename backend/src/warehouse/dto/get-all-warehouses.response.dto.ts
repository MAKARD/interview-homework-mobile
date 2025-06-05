import { warehouseItem } from '../models/Warehouse-item.model';

export interface GetAllWarehousesResponseDto {
	warehouses: Array<warehouseItem>;
}
