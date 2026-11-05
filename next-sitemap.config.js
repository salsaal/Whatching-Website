// next-sitemap.config.js
// Generated on every build (postbuild). The output in public/ is gitignored.
module.exports = {
  siteUrl: "https://www.whatching.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }]
  }
};
