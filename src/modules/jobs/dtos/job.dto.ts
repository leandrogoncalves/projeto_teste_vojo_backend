import { IsNotEmpty, IsString, MinLength, IsNumber } from "class-validator";

export class JobDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(10, { message: "O titulo deve ter pelo menos 10 caracteres." })
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(50, { message: "A Descrição deve ter pelo menos 50 caracteres." })
  readonly description: string;

  @IsString()
  readonly requirements: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly sector: string;

  @IsString()
  readonly functions: string;

  @IsString()
  readonly level: string;

  @IsNumber()
  readonly salary: number;
}
