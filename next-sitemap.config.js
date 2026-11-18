// next-sitemap.config.js
// Generated on every build (postbuild). The output in public/ is gitignored.
module.exports = {
  siteUrl: "https://www.whatching.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // No <lastmod>: every page would get the build time, which search engines
  // learn to ignore. Articles show their real dates on the page instead.
  autoLastmod: false,
  exclude: ["/404", "/api/*"],
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }]
  }
};
