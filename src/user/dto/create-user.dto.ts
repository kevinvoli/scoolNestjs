import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
} from '@nestjs/class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public mail: string;
  @IsString()
  @IsNotEmpty()
  public name: string;
  @IsNumber()
  @IsNotEmpty()
  public univercite: any;
  @IsNumber()
  @IsNotEmpty()
  public prenom: string;
  @IsNotEmpty()
  @Length(8)
  @IsString()
  public password: string;
  @IsNotEmpty()
  public naissence_etud: string;
  @IsNotEmpty()
  public niveau: string;
}
