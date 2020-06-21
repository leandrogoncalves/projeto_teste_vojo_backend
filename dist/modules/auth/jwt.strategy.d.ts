import { Strategy } from "passport-jwt";
import { Model } from "mongoose";
import { IUser } from "@/modules/users/interfaces/user.interface";
import { JwtPayload } from "./interfaces/payload.interface";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    validate(payload: JwtPayload): Promise<IUser>;
}
export {};
