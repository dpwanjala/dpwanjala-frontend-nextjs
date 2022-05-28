const withPlugins = require('next-compose-plugins');

// use mdx for md and mdx files
const withMDX = require('@next/mdx')({
    extension: /\.mdx$/
})

const nextConfig = {
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     config.node = {
    //       fs: 'empty'
    //     }
    //     return config
    //   },
}

module.exports = withPlugins([
    withMDX({
        // configure the extensions looked for in the pages directory when resolving pages
        pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    })
], nextConfig);