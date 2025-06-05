import { Injectable, NotFoundException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileUploadsService {
	async getFilePath(filename: string): Promise<string> {
		const filePath = join('uploads', filename);
		if (!existsSync(filePath)) {
			throw new NotFoundException('File not found');
		}
		return filePath;
	}
}
