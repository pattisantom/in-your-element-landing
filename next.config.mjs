/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local images from /public only — no external domains needed
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
