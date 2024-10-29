import { Module } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ArticlesModule } from './articles/articles.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';

@ApiTags('Users')
@Module({
  imports: [UsersModule, ArticlesModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
