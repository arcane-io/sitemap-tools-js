process.bin = process.title = 'sitemap-tools';

let app = require('commander');
let colors = require('colors');
let fs = require("fs");

let STConfig = require('./index').SitemapToolsConfig;
let SitemapTools = require('./sitemap-tools').SitemapTools; 

let appVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

// setup args
app.version(appVersion);
app.description('Sitemap tools cli. By default it does nothing so you may want give it some params :) ');
app.Command('sitemap-tools');
app.usage('[options] <sitemap-url>');
app.option('-p, --persist', 'persist the sitemap files');
app.option('-c, --check [mode]', 'sitemap validation method (available modes: none, xml, link)', /^(none|xml|link)$/i, 'none');
app.option('-o, --output <output-folder>', 'is there any place you want to put the results?', 'out');
app.option('-f, --file [url-input-file]', "path to a file that contains a list of url's (one url er line)");
app.option('-V, --version', 'Print the application version');
app.option('-v, --verbose', 'verbose output');

// parse programs args
app.parse(process.argv);

if (app.args.length == 0 && !app.file) {
    console.error(colors.red('sitemap url was not specified'));
    app.outputHelp();
    process.exit(1);
}

var config = new STConfig({
    persist: app.persist,
    validate: app.check,
    output: app.output,
    sitemap: app.args,
    file: app.file,
    verbose: app.verbose
});


if (config.verbose) {
    console.log('app config: \n', config);
}

let sitemapTools = new SitemapTools(config);
sitemapTools.start();