import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import Comment from "./Comment";

@Entity()
class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  title: string;

  @Column("varchar")
  category: string;

  @Column("int")
  upvotes: number;

  @Column("varchar")
  status: string;

  @Column("varchar")
  description: string;

  @OneToMany(() => Comment, (comment) => comment.feedback, {
    eager: true,
  })
  comments: Comment[];
}

export default Feedback;
