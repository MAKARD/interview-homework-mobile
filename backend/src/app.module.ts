import { Module } from '@nestjs/common';

import { WarehouseModule } from './warehouse/warehouse.module';
import { FileUploadsModule } from './file-uploads/file-uploads.module';

@Module({
	imports: [WarehouseModule, FileUploadsModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
