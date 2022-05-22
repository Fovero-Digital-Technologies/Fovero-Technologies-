"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var router_1 = require("next/router");
var link_1 = require("next/link");
var react_redux_1 = require("react-redux");
var action_1 = require("../../store/theme/action");
var MaterialUISwitch_1 = require("./Partials/MaterialUISwitch");
var MainHeader = function (props) {
    // console.log(props)
    var _a = react_1.useState(props.theme.lightMode), isLight = _a[0], setIsLight = _a[1];
    var router = router_1.useRouter();
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        setIsLight(props.theme.lightMode);
    }, [props.theme.lightMode]);
    return (React.createElement("header", { className: "bg-gray-100 dark:bg-dark py-2 px-5 flex justify-between items-center shadow-sm" },
        React.createElement(link_1["default"], { href: "/", passHref: true },
            React.createElement("a", null, !props.theme.lightMode ? React.createElement(image_1["default"], { src: "/img/logo/Fovero Technologies Logo Dark.png", alt: "Fovero Digital Technologies Logo", width: 73.32, height: 44.66, className: "cursor-pointer mt-4" }) : React.createElement("h1", { className: "font-bold text-lg sm:text-xl text-brand" }, "Fovero Technologies"))),
        React.createElement("div", { className: "flex gap-6 items-center" },
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
exports["default"] = react_redux_1.connect(mapStateToProps)(MainHeader);
