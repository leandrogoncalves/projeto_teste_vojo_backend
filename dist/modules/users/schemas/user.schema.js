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
exports.UserSchema = void 0;
const mongoose = __importStar(require("mongoose"));
exports.UserSchema = new mongoose.Schema({
    isActive: { type: Boolean, default: true },
    email: { type: String, trim: true, lowercase: true, unique: true },
    cellphone: { type: String, trim: true, unique: true },
    firstName: { type: String, trim: true, lowercase: true },
    lastName: { type: String, trim: true, lowercase: true },
    password: { type: String, trim: true },
}, { timestamps: true, collection: 'users' });
//# sourceMappingURL=user.schema.js.map