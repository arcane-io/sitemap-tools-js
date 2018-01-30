let Sitemap = require('./sitemap').Sitemap;
let SitemapToolsConfig = require('./st-config').SitemapToolsConfig;


// sitemap parser
// sitemap item

class SitemapTools {
    constructor(config) {
        this.config = config;
    }

    start() {
        for(let url in this.config.sitemapList) {
            let sitemap = new Sitemap(url);
            // parse
            // check
            // save
        }
    }
}




exports.SitemapTools = SitemapTools;