import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { Length, IsNotEmpty } from "class-validator";

import * as bcrypt from "bcryptjs";
import Comment from "./Comment";
import Reply from "./Reply";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  @Length(4, 20)
  username: string;

  @Column("varchar")
  @Length(4, 20)
  name: string;

  @Column("varchar")
  @Length(4, 100)
  password: string;

  @Column("varchar")
  userLogo: string;

  @Column()
  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @Column()
  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  @OneToMany(() => Comment, (comment) => comment.user, {})
  comments: Comment[];
  @OneToMany(() => Reply, (reply) => reply.user, {
    eager: true,
  })
  replies: Reply[];

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}

export default User;
