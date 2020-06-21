"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./modules/auth/auth.module");
const jobs_module_1 = require("./modules/jobs/jobs.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            controllers: [app_controller_1.AppController],
            imports: [
                mongoose_1.MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING, {
                    useNewUrlParser: true,
                    useFindAndModify: false,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                }),
                auth_module_1.AuthModule,
                jobs_module_1.JobsModule
            ],
            providers: [app_service_1.AppService],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map