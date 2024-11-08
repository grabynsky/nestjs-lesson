import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';

import { UserID } from '../../common/types/entity-ids.type';
import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  public async findOne(@Param('id', ParseUUIDPipe) id: UserID) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: UserID,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: UserID) {
    return this.usersService.remove(id);
  }
}
