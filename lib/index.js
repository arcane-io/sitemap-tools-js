// [x] build url list
// for each url 
// -> save & parse sitemap (repeat for other sitemap files)
// -> validate -> save validation results

exports.Sitemap = require('./sitemap').Sitemap;;
exports.SitemapTools = require('./sitemap-tools').SitemapTools;
exports.SitemapToolsConfig = require('./st-config').SitemapToolsConfig;