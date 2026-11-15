import type { MetadataRoute } from "next";

const siteUrl = "https://palworld-breeding-calculator-darvesh-projects.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
