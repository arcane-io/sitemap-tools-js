class Sitemap {
    constructor(url, name) {
        if (!url) {
            url = 'localhost';
        }

        if(!url.startWith('http')) {
            url = 'http://' + url;
        }

        this.url = url;
        this.name = name ? name : 'sitemap.xml';
    }
}

exports.Sitemap = Sitemap;