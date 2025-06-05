import {
	Controller,
	Post,
	UseInterceptors,
	UploadedFile,
	Get,
	Param,
	Res,
} from '@nestjs/common';
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
					const uniqueSuffix =
						Date.now() + '-' + Math.round(Math.random() * 1e9);
					cb(null, uniqueSuffix + extname(file.originalname));
				},
			}),
		}),
	)
	uploadFile(@UploadedFile() file: Express.Multer.File) {
		console.log('file', file);
		return { filename: file.filename, path: `/files/${file.filename}` };
	}

	@Get('/:filename')
	async getImage(@Param('filename') filename: string, @Res() res: Response) {
		const file = await this.fileUploadsService.getFilePath(filename);

		res.sendFile(file, { root: '.' });
	}
}
