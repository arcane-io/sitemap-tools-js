process.bin = process.title = 'sitemap-tools';

var app = require('commander');
var colors = require('colors');
var fs = require("fs");


var appVersion = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

// setup args
app.version(appVersion);
app.description('Sitemap tools cli. By default it does nothing so you may want give it some params :) ');
app.Command('sitemap-tools');
app.usage('[options] <sitemap-url>');
app.option('-p, --persist', 'persist the sitemap files');
app.option('-c, --check [mode]', 'sitemap validation method (available modes: none, xml, link)', /^(none|xml|link)$/i, 'none');
app.option('-o, --output <output-folder>', 'Any place you want to put the results?', 'out');
app.option('-v, --version', 'Print the application version');
app.option('-V, --verbose', 'verbose output');

// parse programs args
app.parse(process.argv);

if (app.args.length == 0) {
    console.error(colors.red('sitemap url was not specified'));
    app.outputHelp();
    process.exit(1);
}

var config = {
    'persist': app.persist ? true : false,
    'validate': app.check,
    'output': app.output,
    'url': app.args[0],
    'verbose': app.verbose ? true : false
};

if (config.verbose) {
    console.log(config);
}

