/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  changefreq: "daily",
};

module.exports = config;
