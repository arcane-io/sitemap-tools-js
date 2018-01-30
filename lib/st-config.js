let fs = require("fs");

/**
 * Parse the input file and extract a list of URL's.
 */
let parseInputFile = function(file) {
    let urlList = [];
    let lines = fs.readFileSync(file, {encoding: 'utf8'}).replace(new RegExp(' ','g'), '\n').split(/[\n\r]/);
    
    lines.forEach(part => {
        part = part.trim();
        if (part.length != 0) {
            urlList.push(part);
        }
    });

    console.log('file parse finished: ', urlList);
    return urlList;
}

class SitemapToolsConfig {
    constructor(config) {
        if(!config) {
            throw "could not initialise configuration. no params specified";
        }
        
        this.persistSitemap = config.persist ? true : false;
        this.validationMode = config.validate ? config.validate : 'none';
        this.outputPath = config.output ? config.output : 'out';
        this.verbose = config.verbose ? true : false;
        
        if(config.file) {
            this.sitemapList = parseInputFile(config.file);
        }

        if (!this.sitemapList || this.sitemapList.length == 0) {
            this.sitemapList = config.sitemap;
        }
    }

    toString() {
        return JSON.stringify({
            persistSitemap: this.persistSitemap,
            validationMode: this.validationMode,
            outputPath: this.outputPath,
            sitemapList: this.sitemapList,
            verboseOutput: this.verbose
        }, null, 4);
    }
}

exports.SitemapToolsConfig = SitemapToolsConfig;