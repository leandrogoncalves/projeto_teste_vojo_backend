"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
const user_interface_1 = require("../../users/interfaces/user.interface");
exports.GetUser = common_1.createParamDecorator((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
});
//# sourceMappingURL=get-user.decorator.js.map