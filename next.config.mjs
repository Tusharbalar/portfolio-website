/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            },
        ],
    },
    experimental: {
        serverActions: true
    }
};

export default nextConfig;
