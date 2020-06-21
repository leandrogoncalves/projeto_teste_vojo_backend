"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchema = void 0;
const mongoose = __importStar(require("mongoose"));
exports.JobSchema = new mongoose.Schema({
    title: { type: String, trim: true, unique: true },
    description: { type: String, trim: true },
    requirements: { type: String, trim: true },
    type: { type: String, trim: true },
    sector: { type: String, trim: true },
    functions: { type: String, trim: true },
    level: { type: String, trim: true },
    salary: { type: Number, trim: true },
}, {
    timestamps: true,
    collection: "jobs",
});
//# sourceMappingURL=job.schema.js.map