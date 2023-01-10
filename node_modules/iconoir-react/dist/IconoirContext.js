"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconoirProvider = exports.IconoirContext = void 0;
var react_1 = __importDefault(require("react"));
exports.IconoirContext = react_1.default.createContext({});
function IconoirProvider(_a) {
    var iconProps = _a.iconProps, children = _a.children;
    return react_1.default.createElement(exports.IconoirContext.Provider, { value: iconProps || {}, children: children });
}
exports.IconoirProvider = IconoirProvider;
