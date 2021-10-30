/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([[withBundleAnalyzer, {}]], {
    poweredByHeader: false,
    images: {
        domains: ['cdn.sanity.io']
    }
});
