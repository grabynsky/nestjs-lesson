import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
