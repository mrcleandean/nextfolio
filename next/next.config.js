/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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