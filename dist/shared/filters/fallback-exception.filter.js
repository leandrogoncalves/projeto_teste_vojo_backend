"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallbackExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let FallbackExceptionFilter = (() => {
    let FallbackExceptionFilter = class FallbackExceptionFilter {
        catch(exception, host) {
            const ctx = host.switchToHttp();
            const request = ctx.getRequest();
            const response = ctx.getResponse();
            common_1.Logger.error(`${request.method} ${request.url}`, exception.stack, 'FallbackExceptionFilter');
            return response.status(500).json({
                error: {
                    message: "Um erro inesperado ocorreu. Tente novamente."
                }
            });
        }
    };
    FallbackExceptionFilter = __decorate([
        common_1.Catch()
    ], FallbackExceptionFilter);
    return FallbackExceptionFilter;
})();
exports.FallbackExceptionFilter = FallbackExceptionFilter;
//# sourceMappingURL=fallback-exception.filter.js.map