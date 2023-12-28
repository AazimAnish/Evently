const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    domains: ['utfs.io'],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'utfs.io',
            port: '',
        }
    ]
}

module.exports = nextConfig
