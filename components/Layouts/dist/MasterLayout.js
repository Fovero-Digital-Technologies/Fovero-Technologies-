"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var react_redux_1 = require("react-redux");
var action_1 = require("../../store/theme/action");
var theme_1 = require("../../functions/theme");
var MasterLayout = function (props) {
    var dispatch = react_redux_1.useDispatch();
    var router = router_1.useRouter();
    react_1.useLayoutEffect(function () {
        theme_1.themeChange(props);
    });
    react_1.useLayoutEffect(function () {
        theme_1.themeOSLoad(props, dispatch, action_1.setDarkModeTheme, action_1.setLightModeTheme);
    }, []);
    return (React.createElement(React.Fragment, null, props.children));
};
var mapStateToProps = function (state) {
    return state;
};
exports["default"] = react_redux_1.connect(mapStateToProps)(MasterLayout);
