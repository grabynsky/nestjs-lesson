import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../common/helpers/transform.helper';
import { GenderEnum } from '../../enums/gender.enum';

export class CarBaseReqDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 30)
  producer: string;

  @IsString()
  @Transform(TransformHelper.toTrim)
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 30)
  model: string;

  @ApiProperty({ example: 2021 })
  @IsInt()
  @Type(() => Number)
  @Min(1980)
  year: number;
}

export class UserBaseReqDto {
  @IsString()
  @Transform(TransformHelper.toTrim)
  @Transform(TransformHelper.toLowerCase)
  @Length(3, 150)
  name?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(150)
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'test@test.com' })
  @Transform(TransformHelper.toTrim)
  @Transform(TransformHelper.toLowerCase)
  // @ValidateIf((obj) => !obj.phone)
  @IsString()
  @IsEmail()
  email: string;

  // @ValidateIf((obj) => !obj.email)
  @Transform(TransformHelper.toTrim)
  @IsString()
  phone: string;

  @ApiProperty({ example: '123456qeASD' })
  @IsNotIn(['password', 'qwerty', '123456'])
  @Transform(TransformHelper.toTrim)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and be at least 8 characters long',
  })
  password: string;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsBoolean()
  @IsOptional()
  isStudent: boolean = false;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CarBaseReqDto)
  cars: CarBaseReqDto[];
}
