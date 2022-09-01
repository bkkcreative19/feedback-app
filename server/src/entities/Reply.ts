import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Comment from "./Comment";
import User from "./User";

@Entity()
class Reply extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  content: string;

  @ManyToOne(() => Comment, (comment) => comment.replies, {
    cascade: true,
    onDelete: "CASCADE",
  })
  comment: Comment;
  @ManyToOne(() => User, (user) => user.replies, {
    cascade: true,
    onDelete: "CASCADE",
  })
  user: User;
}

export default Reply;
