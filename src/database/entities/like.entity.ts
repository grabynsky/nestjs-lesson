import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArticleEntity } from './article.entity';
import { UserEntity } from './user.entity';
import { TableNameEnum } from './enums/table-name.enum';

@Entity(TableNameEnum.LIKES)
export class LikeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  article_id: string;
  @ManyToOne(() => ArticleEntity, (entity) => entity.likes)
  @JoinColumn({ name: 'article_id' })
  article?: ArticleEntity;

  @Column()
  user_id: string;
  @ManyToOne(() => UserEntity, (entity) => entity.likes)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;
}
