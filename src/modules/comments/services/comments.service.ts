import { Injectable } from '@nestjs/common';

import { CreateCommentDto } from '../models/dto/req/create-comment.dto';

@Injectable()
export class CommentsService {
  create(dto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comments`;
  }

  public async deleteAllCommentsForArticle(articleId: string) {}
}