/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
            {
                source: '/demos/views',
                destination: 'https://m4z62t-5173.csb.app/',
                permanent: false,
                basePath: false
            },
            {
                source: '/voxer',
                destination: 'https://voxer-ten.vercel.app/',
                permanent: false,
                basePath: false
            },
            {
                source: '/flappybirdclone',
                destination: 'https://flappybirdclone-pi.vercel.app/',
                permanent: false,
                basePath: false
            },
            {
                source: '/calccube',
                destination: 'https://calccube.vercel.app/',
                permanent: false,
                basePath: false
            },
            {
                source: '/sortviz',
                destination: 'https://sortviz-tau.vercel.app/',
                permanent: false,
                basePath: false
            }
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.mp3$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/_next/static/audio/',
                    outputPath: 'static/audio/',
                    esModule: false
                }
            }
        });
        return config;
    }
}

module.exports = nextConfig