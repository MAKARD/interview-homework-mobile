import {
	IsDefined,
	IsInt,
	IsNotEmpty,
	IsNumber,
	IsPositive,
	IsString,
	IsUrl,
} from 'class-validator';

export class CreateProductRequestDto {
	@IsString()
	@IsUrl()
	imageUrl?: string;

	@IsString()
	@IsDefined()
	@IsNotEmpty()
	name: string;

	@IsDefined()
	@IsString()
	@IsNotEmpty()
	description: string;

	@IsInt()
	@IsDefined()
	@IsPositive()
	quantity: number;

	@IsNumber()
	@IsDefined()
	@IsPositive()
	unitPrice: number;
}
