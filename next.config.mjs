/** @type {import('next').NextConfig} */

const nextConfig = {
	experimental: {
		ppr: "incremental", // 允许您对特定路由采用 PPR 策略
	},
};

export default nextConfig;
