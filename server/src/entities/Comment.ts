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
import User from "./User";
import Reply from "./Reply";
import Feedback from "./Feedback";

@Entity()
class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  content: string;

  @ManyToOne(() => Feedback, (feedback) => feedback.comments, {
    // cascade: true,
    onDelete: "CASCADE",
  })
  feedback: Feedback;

  @ManyToOne(() => User, (user) => user.comments, {
    // cascade: true,
    onDelete: "CASCADE",
  })
  user: User;

  @OneToMany(() => Reply, (reply) => reply.comment, {
    eager: true,
  })
  replies: Reply[];
}

export default Comment;
