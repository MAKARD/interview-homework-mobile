import {
	Controller,
	Post,
	UseInterceptors,
	UploadedFile,
	Get,
	Param,
	Res,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { extname } from 'path';

import { FileUploadsService } from './file-uploads.service';

@Controller('/file')
export class FileUploadsController {
	constructor(private readonly fileUploadsService: FileUploadsService) {}

	@Post('upload')
	@UseInterceptors(
		FileInterceptor('file', {
			storage: diskStorage({
				destination: './uploads',
				filename: (req, file, cb) => {
					const uniqueSuffix = uuidv4();

					cb(null, uniqueSuffix + extname(file.originalname));
				},
			}),
		}),
	)
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		return { filename: file.filename };
	}

	@Get('/:filename')
	async getImage(@Param('filename') filename: string, @Res() res: Response) {
		const file = await this.fileUploadsService.getFilePath(filename);

		res.sendFile(file, { root: '.' });
	}
}
