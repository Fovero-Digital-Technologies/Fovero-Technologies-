"use strict";
exports.__esModule = true;
exports.themeOSLoad = exports.themeChange = void 0;
exports.themeChange = function (props) {
    var htmlApp = document.querySelector("html");
    // console.log({htmlApp})
    if (props.theme.lightMode) {
        htmlApp.classList.remove("dark");
    }
    else {
        htmlApp.classList.add("dark");
    }
};
exports.themeOSLoad = function (props, dispatch, setDarkModeTheme, setLightModeTheme) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (props.theme.lightMode) {
            dispatch(setDarkModeTheme());
        }
    }
    else {
        if (!props.theme.lightMode) {
            dispatch(setLightModeTheme());
        }
    }
};
