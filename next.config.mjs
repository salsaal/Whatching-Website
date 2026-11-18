import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    remotePatterns: [
      {
        // Only YouTube thumbnails; an open pattern let any site use our
        // image optimiser.
        protocol: "https",
        hostname: "i.ytimg.com"
      }
    ]
  },
  // /resources listed the same posts as /blog; the address keeps working.
  async redirects() {
    return [{ source: "/resources", destination: "/blog", permanent: true }];
  },
  compress: true,
  compiler: {
    removeConsole: false
  },
  typescript: { ignoreBuildErrors: false }
};

export default nextConfig;
