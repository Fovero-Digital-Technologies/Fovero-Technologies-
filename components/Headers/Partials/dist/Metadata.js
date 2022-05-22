"use strict";
exports.__esModule = true;
var react_1 = require("react");
var head_1 = require("next/head");
var router_1 = require("next/router");
var Metadata = function (_a) {
    var title = _a.title, metadescription = _a.metadescription, imageUrl = _a.imageUrl;
    var router = router_1.useRouter();
    var titleView, description;
    if (title) {
        titleView = title + " | " + process.env.title;
    }
    else {
        titleView = process.env.title + " | " + process.env.tagline;
    }
    if (metadescription) {
        description = metadescription;
    }
    else {
        description = process.env.titleDescription;
    }
    return (react_1["default"].createElement(head_1["default"], null,
        react_1["default"].createElement("meta", { charSet: "UTF-8" }),
        react_1["default"].createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0, maxiumum-scale=1" }),
        react_1["default"].createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
        react_1["default"].createElement("meta", { name: "description", content: "" + description }),
        react_1["default"].createElement("title", null, titleView),
        react_1["default"].createElement("meta", { name: "twitter:card", content: "summary", key: "twcard" }),
        react_1["default"].createElement("meta", { name: "twitter:creator", content: "foverodigitech", key: "twhandle" }),
        react_1["default"].createElement("meta", { property: "og:url", content: router.pathname, key: "ogurl" }),
        react_1["default"].createElement("meta", { property: "og:image", content: imageUrl, key: "ogimage" }),
        react_1["default"].createElement("meta", { property: "og:site_name", content: "Fovero Digital Technologies", key: "ogsitename" }),
        react_1["default"].createElement("meta", { property: "og:title", content: titleView, key: "ogtitle" }),
        react_1["default"].createElement("meta", { property: "og:description", content: description, key: "ogdesc" }),
        react_1["default"].createElement("link", { rel: "icon", href: "/img/logo/Fovero Technologies Favicon.png" })));
};
exports["default"] = Metadata;
