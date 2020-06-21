"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationFilter = void 0;
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("../exceptions/validation.exception");
let ValidationFilter = (() => {
    let ValidationFilter = class ValidationFilter {
        catch(exception, host) {
            const ctx = host.switchToHttp();
            const response = ctx.getResponse();
            const request = ctx.getRequest();
            common_1.Logger.error(`${request.method} ${request.url}`, exception.stack, 'ValidationFilter');
            console.log(exception);
            return response.status(422).json({
                error: {
                    message: 'Um ou mais campos inválidos',
                    fields: exception.ValidationErrors
                }
            });
        }
    };
    ValidationFilter = __decorate([
        common_1.Catch(validation_exception_1.ValidationException)
    ], ValidationFilter);
    return ValidationFilter;
})();
exports.ValidationFilter = ValidationFilter;
//# sourceMappingURL=validation.filter.js.map