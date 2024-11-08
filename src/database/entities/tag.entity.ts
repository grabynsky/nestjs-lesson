import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ArticleEntity } from './article.entity';
import { TableNameEnum } from './enums/table-name.enum';
import { CreateUpdateModel } from './models/create-update.model';
import { TagID } from '../../common/types/entity-ids.type';

@Entity(TableNameEnum.TAGS)
export class TagEntity extends CreateUpdateModel {
  @PrimaryGeneratedColumn('uuid')
  id: TagID;

  @Column({ type: 'text' })
  name: string;

  @ManyToMany(() => ArticleEntity, (entity) => entity.tags)
  @JoinTable()
  articles?: ArticleEntity[];
}
