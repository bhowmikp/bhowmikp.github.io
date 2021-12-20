module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_HOST_URL || 'https://prantar.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    robotsTxtOptions: {
        additionalSitemaps: [`${process.env.NEXT_PUBLIC_HOST_URL || 'https://prantar.com'}/server-sitemap.xml`]
    }
};
