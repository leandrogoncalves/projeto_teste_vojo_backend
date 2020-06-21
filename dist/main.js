"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("dotenv/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const filters_1 = require("./shared/filters");
const exceptions_1 = require("./shared/exceptions");
const port = process.env.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        exposedHeaders: [
            "Content-Length",
            "Vojo-Authorization",
            "Vojo-Client-Origin",
        ],
    });
    app.useGlobalFilters(new filters_1.FallbackExceptionFilter(), new filters_1.HttpExceptionFilter(), new filters_1.ValidationFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
            let fields = {};
            errors.map((err) => {
                fields = Object.assign(Object.assign({}, fields), { [err.property]: err.value
                        ? "Campo inválido."
                        : "Campo obrigatório." });
            });
            return new exceptions_1.ValidationException(fields);
        },
    }));
    await app.listen(port || 80);
    common_1.Logger.log(`Server started on port ${port}`, "Bootstrap");
}
bootstrap();
//# sourceMappingURL=main.js.map