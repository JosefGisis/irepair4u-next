/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://www.irepair4unj.com",
	generateRobotsTxt: true,
	// Add paths to pages that should be included in the sitemap
	paths: ["/", "/about", "/contact-us", "/services", "/faq", "/README"],
	generateIndexSitemap: false,
	transform: async (_, path) => {
		console.log(path)
		switch (path) {
			case "/": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 1.0,
				}
			}
			case "/about": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.7,
				}
			}
			case "/services": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.7,
				}
			}
			case "/faq": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.7,
				}
			}
			case "/contact-us": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.7,
				}
			}
			case "/README": {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.2,
				}
			}
			default: {
				return {
					loc: path,
					changefreq: "monthly",
					lastmod: new Date().toISOString(),
					priority: 0.7,
				}
			}
		}
	},
}
