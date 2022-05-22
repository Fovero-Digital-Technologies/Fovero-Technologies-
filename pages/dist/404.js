"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var DefaultLayout_1 = require("../components/Layouts/DefaultLayout");
function NotFound(_a) {
    return (react_1["default"].createElement(DefaultLayout_1["default"], { title: "404 - Page Not Found", desc: "This page does not exist." },
        react_1["default"].createElement("div", { className: "h-[calc(100vh-52px)] bg-gray-100 dark:bg-dark flex flex-col items-center justify-center gap-10" },
            react_1["default"].createElement(image_1["default"], { src: "/svg/404.svg", className: "", alt: "Page Not Found", width: 250, height: 200 }),
            react_1["default"].createElement("div", { className: "text-center pb-6 max-w-[700px] px-5" },
                react_1["default"].createElement("h1", { className: "text-4xl font-bold mb-2 text-brand dark:text-brand2" }, "Page Not Found"),
                react_1["default"].createElement("p", { className: "mb-5 text-xl tracking-wider" }, "This page does not exist."),
                react_1["default"].createElement(link_1["default"], { href: "/", passHref: true },
                    react_1["default"].createElement("a", { className: "md:col-span-3 px-5 py-2 bg-brand text-white hover:text-white rounded hover:bg-brand-hov transition duration-300 ease-in-out text-lg inline-flex gap-3 items-center justify-center" },
                        react_1["default"].createElement(fa_1.FaHome, null),
                        react_1["default"].createElement("span", null, "Go Home")))))));
}
exports["default"] = NotFound;
