"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Texthandler = void 0;
class Texthandler {
    constructor() {
        this.capitalize = (str) => {
            if (typeof str !== 'string')
                return null;
            str = str.toLowerCase();
            str = str.charAt(0).toUpperCase() + str.slice(1);
            return str;
        };
    }
}
exports.Texthandler = Texthandler;
//# sourceMappingURL=text-handler.js.map