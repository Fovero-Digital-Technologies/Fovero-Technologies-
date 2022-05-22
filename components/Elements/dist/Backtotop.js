"use strict";
exports.__esModule = true;
var md_1 = require("react-icons/md");
var Fab_1 = require("@mui/material/Fab");
var Backtotop = function () {
    var UpArrow = md_1.MdArrowUpward;
    var scrollToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (React.createElement(Fab_1["default"], { color: "primary", "aria-label": "add", className: "flex items-center justify-center bg-primary text-white hover:bg-primary-hov dark:bg-warning dark:text-dark dark:hover:bg-warning-hov rounded-full shadow text-lg fixed z-[10000] right-[30px] bottom-[40px]", onClick: scrollToTop },
        React.createElement(UpArrow, null)));
};
exports["default"] = Backtotop;
