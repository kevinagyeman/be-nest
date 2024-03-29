import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDishDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @IsOptional()
  readonly additionalInfo: string;
}
