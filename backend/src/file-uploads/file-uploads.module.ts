import { Module } from '@nestjs/common';

import { FileUploadsController } from './file-uploads.controller';
import { FileUploadsService } from './file-uploads.service';

@Module({
	imports: [],
	controllers: [FileUploadsController],
	providers: [FileUploadsService],
})
export class FileUploadsModule {}
