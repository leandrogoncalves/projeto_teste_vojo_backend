"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobValidationParameterPipe = void 0;
const common_1 = require("@nestjs/common");
class JobValidationParameterPipe {
    transform(value, metadata) {
        console.log(value, metadata);
        if (!value) {
            throw new common_1.BadRequestException(`O valor do parametro ${metadata.data} deve ser preeenchido`);
        }
        return value;
    }
}
exports.JobValidationParameterPipe = JobValidationParameterPipe;
//# sourceMappingURL=Job-validation-parameter.pipe.js.map