import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';

import { ArticlesModule } from './modules/articles/articles.module';
import { CommentsModule } from './modules/comments/comments.module';
import configuration from './configs/configuration';
import { UsersModule } from './modules/users/users.module';

@ApiTags('Users')
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    UsersModule,
    ArticlesModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
