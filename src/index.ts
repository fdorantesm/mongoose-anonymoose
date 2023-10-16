import { Schema } from "mongoose";

export function anonymoose(schema: Schema): void {
  schema.set("toJSON", {
    virtuals: true,
    transform: function (_, ret) {
      delete ret._id;
      delete ret.__v;
    },
  });
  schema.set("toObject", {
    virtuals: true,
    transform: function (_, ret) {
      delete ret._id;
      delete ret.__v;
    },
  });
}
