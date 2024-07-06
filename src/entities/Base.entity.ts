import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity {
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createAt: Date

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date
}