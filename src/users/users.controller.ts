import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiConflictResponse } from '@nestjs/swagger';

import { CreateUserReqDto } from './models/dto/req/create-user.req.dto';
import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';
import { UserListDto } from './models/dto/req/user-list.dto';
import { UserResDto } from './models/dto/res/user.res.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiBearerAuth()
  // @ApiOkResponse({
  //   description: 'Successfully created the user',
  //   type: UserResDto,
  // })
  // @ApiForbiddenResponse({ description: 'Forbidden' })
  // @ApiNotFoundResponse({ description: 'User not Found' })
  // @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  // @ApiOperation({ summary: 'Create user', description: 'Create a new user' })
  @ApiConflictResponse({ description: 'Conflict' })
  @Post()
  async create(@Body() createUserDto: CreateUserReqDto): Promise<UserResDto> {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query() query: UserListDto) {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserReqDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
