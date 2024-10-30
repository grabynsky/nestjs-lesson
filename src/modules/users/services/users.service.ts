import { Injectable } from '@nestjs/common';

import { AppConfig, Config } from '../../../configs/config.type';
import { CreateUserReqDto } from '../models/dto/req/create-user.req.dto';
import { UpdateUserReqDto } from '../models/dto/req/update-user.req.dto';
import { UserResDto } from '../models/dto/res/user.res.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService<Config>) {}

  public async create(dto: CreateUserReqDto): Promise<UserResDto> {
    const appConfig = this.configService.get<AppConfig>('app');
    console.log(appConfig);
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
