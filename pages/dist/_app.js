"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("@fontsource/advent-pro/200.css");
require("@fontsource/advent-pro/300.css");
require("@fontsource/advent-pro/400.css");
require("@fontsource/advent-pro/500.css");
require("@fontsource/advent-pro/600.css");
require("@fontsource/advent-pro/700.css");
require("tailwindcss/tailwind.css");
require("../styles/globals.css");
var react_redux_1 = require("react-redux");
var store_1 = require("../store/store");
var MasterLayout_1 = require("../components/Layouts/MasterLayout");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_1["default"].createElement(react_redux_1.Provider, { store: store_1["default"] },
        react_1["default"].createElement(MasterLayout_1["default"], null,
            react_1["default"].createElement(Component, __assign({}, pageProps)))));
}
exports["default"] = MyApp;
