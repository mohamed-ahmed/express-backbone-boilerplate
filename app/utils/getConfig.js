var siteConfig;

try {
    // Usually we check for siteConfig.js in project root.
    siteConfig = require('../../siteConfig');
} catch(e) {
    try {
        siteConfig = require(process.env.HOME+'/siteConfig'); // Looks for siteConfig in home dir, used for no.de
    } catch(e) {
        throw new Error('Could not load site config.');
    }
}

module.exports = siteConfig;
