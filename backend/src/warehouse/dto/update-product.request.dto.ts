import {
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
	IsUrl,
} from 'class-validator';

export class UpdateProductRequestDto {
	@IsString()
	@IsUrl()
	imageUrl?: string;

	@IsString()
	@IsNotEmpty()
	name?: string;

	@IsString()
	@IsNotEmpty()
	description?: string;

	@IsInt()
	@IsPositive()
	quantity?: number;

	@IsNumber()
	@IsPositive()
	unitPrice?: number;
}
