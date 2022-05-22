"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var DefaultLayout_1 = require("../components/Layouts/DefaultLayout");
var fa_1 = require("react-icons/fa");
var Tooltip_1 = require("@mui/material/Tooltip");
var socialDatas = [
    {
        title: "Facebook",
        link: "https://web.facebook.com/FoveroDigitalTechnologies",
        icon: React.createElement(fa_1.FaFacebookF, null)
    },
    {
        title: "Twitter",
        link: "https://twitter.com/foverodigitech",
        icon: React.createElement(fa_1.FaTwitter, null)
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/foverodigitech",
        icon: React.createElement(fa_1.FaInstagram, null)
    },
    {
        title: "Linkedin",
        link: "https://www.linkedin.com/company/foverodigitech",
        icon: React.createElement(fa_1.FaLinkedinIn, null)
    },
    {
        title: "WhatsApp",
        link: "https://api.whatsapp.com/send?phone=2349028034384&text=Hello,%20I%20would%20like%20to%20make%20enquiries%20about",
        icon: React.createElement(fa_1.FaWhatsapp, null)
    },
];
var Home = function () {
    return (React.createElement(DefaultLayout_1["default"], { title: "Construction in Progress" },
        React.createElement("div", { className: "min-h-[calc(100vh-67px)] h-full px-5 flex flex-col items-center justify-center gap-y-10 text-center pb-10" },
            React.createElement("div", null,
                React.createElement("h2", { className: "text-lg dark:text-white mb-3 tracking-wider" },
                    "HELLO! WE ARE",
                    " ",
                    React.createElement("span", { className: "block text-5xl text-brand font-bold mt-1 dark:text-brand2" }, "COMING SOON...")),
                React.createElement("p", { className: "text-xl text-gray-500 dark:text-light tracking-wider" }, "We are building the best website for you with the best technologies.")),
            React.createElement(image_1["default"], { src: "/svg/building-website.svg", alt: "Fovero Digital Technologies is coming soon", width: 520, height: 309 }),
            React.createElement("div", { className: "inline-flex flex-wrap mx-auto justify-center items-center gap-5 md:gap-10 text-2xl" }, socialDatas.map(function (social) { return React.createElement(Tooltip_1["default"], { title: social.title, placement: "top", arrow: true, key: social.title },
                React.createElement("a", { href: social.link, target: "_blank", rel: "noopener noreferrer", className: "text-gray-500 dark:text-light" }, social.icon)); })))));
};
exports["default"] = Home;
