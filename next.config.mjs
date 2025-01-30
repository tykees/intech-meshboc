/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['us-east-1-shared-usea1-02.graphassets.com', "img.clerk.com", "eu-west-2.graphassets.com"]
    }
};

export default nextConfig;
