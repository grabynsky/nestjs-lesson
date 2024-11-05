import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';

import { AppConfig, Config } from '../../../configs/config.type';
import { UserEntity } from '../../../database/entities/user.entity';
import { CreateUserReqDto } from '../models/dto/req/create-user.req.dto';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';
import { UserResDto } from '../models/dto/res/user.res.dto';
import { UserRepository } from '../../repository/services/user.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService<Config>,
    private userRepository: UserRepository,
  ) {}

  public async create(dto: CreateUserReqDto): Promise<UserResDto> {
    const appConfig = this.configService.get<AppConfig>('app');
    // console.log(appConfig);
    return {} as UserResDto;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserReqDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  public async checkAbilityToEditArticle(userId: string, articleId: string) {}
}
