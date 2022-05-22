"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var router_1 = require("next/router");
var link_1 = require("next/link");
var react_redux_1 = require("react-redux");
var action_1 = require("../../store/theme/action");
var MaterialUISwitch_1 = require("./Partials/MaterialUISwitch");
var MobileHeader = function (props) {
    // console.log(props);
    var _a = react_1.useState(false), showMobileNav = _a[0], setShowMobileNav = _a[1];
    var _b = react_1.useState(props.theme.lightMode), isLight = _b[0], setIsLight = _b[1];
    react_1.useEffect(function () {
        setIsLight(props.theme.lightMode);
    }, [props.theme.lightMode]);
    var router = router_1.useRouter();
    var dispatch = react_redux_1.useDispatch();
    var changeTheme = function () {
        if (props.theme.lightMode) {
            dispatch(action_1.setDarkModeTheme());
        }
        else {
            dispatch(action_1.setLightModeTheme());
        }
    };
    return (React.createElement("header", { className: "bg-light dark:bg-dark-background py-2 px-5 flex md:hidden justify-between items-center sticky z-[100] top-0 shadow-sm" },
        React.createElement(link_1["default"], { href: "/" },
            React.createElement("a", null,
                React.createElement(image_1["default"], { src: props.theme.lightMode ? "/img/logo/Fovero Technologies Logo.png" : "/img/logo/Fovero Technologies Logo Dark.png", alt: "Braandly", width: 133.32, height: 34.66, className: "cursor-pointer mt-4" }))),
        React.createElement("div", { className: "flex gap-3 items-center" },
            React.createElement(MaterialUISwitch_1["default"], { sx: { m: 1 }, 
                // defaultChecked={isLight}
                checked: isLight, 
                // defaultChecked={isLight}
                // lightMode={props.theme.lightMode}
                onChange: function () {
                    if (props.theme.lightMode) {
                        dispatch(action_1.setDarkModeTheme());
                    }
                    else {
                        dispatch(action_1.setLightModeTheme());
                    }
                } }))));
};
var mapStateToProps = function (state) {
    return state;
};
exports["default"] = react_redux_1.connect(mapStateToProps)(MobileHeader);
