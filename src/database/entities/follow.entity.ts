import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TableNameEnum } from './enums/table-name.enum';
import { UserEntity } from './user.entity';
import { FollowID, UserID } from '../../common/types/entity-ids.type';

@Entity(TableNameEnum.FOLLOW)
export class FollowEntity {
  @PrimaryGeneratedColumn('uuid')
  id: FollowID;

  @CreateDateColumn()
  created: string;

  @Column()
  follower_id: UserID;
  @ManyToOne(() => UserEntity, (entity) => entity.followers)
  @JoinColumn({ name: 'follower_id' })
  follower?: UserEntity;

  @Column()
  following_id: UserID;
  @ManyToOne(() => UserEntity, (entity) => entity.following)
  @JoinColumn({ name: 'following_id' })
  following?: UserEntity;
}
