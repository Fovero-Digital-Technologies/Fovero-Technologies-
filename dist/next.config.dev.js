"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  env: {
    title: "Fovero Digital Technologies",
    tagline: "Making IT Work for You",
    titleDescription: "Fovero Digital Technologies is a digital tech company dedicated to providing digital solutions through web and software development, marketing and graphics."
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  }
};
module.exports = nextConfig;