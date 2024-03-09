import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  readonly description: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  readonly phoneNumber: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  readonly email: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  readonly address: string;
}
