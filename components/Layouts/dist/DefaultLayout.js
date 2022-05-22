"use strict";
exports.__esModule = true;
var react_1 = require("react");
var dynamic_1 = require("next/dynamic");
var MainHeader = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("../Headers/Mainheader"); }); });
// const Mobileheader = dynamic(
//   () => import("../Headers/Mobileheader"),
//   // { ssr: false }
// )
// const Footer = dynamic(
//   () => import("../Footers/Footer"),
//   // { ssr: false }
// )
var Metadata_1 = require("../Headers/Partials/Metadata");
var DefaultLayout = function (props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Metadata_1["default"], { title: props.title, metadescription: props.desc }),
        react_1["default"].createElement(MainHeader, null),
        react_1["default"].createElement("div", { className: "h-full bg-gray-100 dark:bg-dark dark:text-light" }, props.children)));
};
exports["default"] = DefaultLayout;
