import * as mongoose from "mongoose";

export const JobSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, unique: true },
    description: { type: String, trim: true },
    requirements: { type: String, trim: true },
    type: { type: String, trim: true },
    sector: { type: String, trim: true },
    functions: { type: String, trim: true },
    level: { type: String, trim: true },
    salary: { type: Number, trim: true },
  },
  {
    timestamps: true,
    collection: "jobs",
  }
);
