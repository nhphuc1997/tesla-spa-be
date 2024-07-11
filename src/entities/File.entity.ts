import { BaseEntity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Base } from "./Base.entity.js";

export class File extends Base {
  @Column({ nullable: true })
  s3Key: string

  @Column({ nullable: true })
  bucket: string

  @Column({ nullable: true })
  mime: string
}