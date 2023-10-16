"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonymoose = void 0;
function anonymoose(schema) {
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
exports.anonymoose = anonymoose;
