import { forwardRef, Module } from '@nestjs/common';

import { RedisModule } from '../redis/redis.module';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { AuthCacheService } from './services/auth-cache.service';
import { TokenService } from './services/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule, RedisModule],
  controllers: [AuthController],
  providers: [AuthService, AuthCacheService, TokenService],
  exports: [],
})
export class AuthModule {}
