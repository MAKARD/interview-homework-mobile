import { WarehouseItem } from '../models/warehouse-item.model';

export interface GetAllWarehousesResponseDto {
	warehouses: Array<WarehouseItem>;
}
