import { Document } from "mongoose";
export interface IJob extends Document {
    readonly _id: string;
    title: string;
    description: string;
    requirements: string;
    type: string;
    sector: string;
    functions: string;
    level: string;
    salary: number;
}
